const TutorModel            = require('../models/tutor.model');
const ParejaModel           = require('../models/pareja.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class TutoresController {
    getAll = async (req, res, next) => {
        const tutoresList = await TutorModel.find();
        if(!tutoresList.length){
            throw new HttpException(404, 'Tutores not found');
        }

        res.send(tutoresList);
    }

    getById = async (req, res, next) => {
        const tutor = await TutorModel.find({id: req.params.id});
        if(!tutor){
            throw new HttpException(404, 'Tutor not found');
        }

        res.send(tutor);
    }

    getAllWithPareja = async (req, res, next) => {
        const tutoresWithPareja = await TutorModel.findWithPareja();
        if(!tutoresWithPareja.length){
            throw new HttpException(404, 'Tutores not found');
        }

        res.send(tutoresWithPareja);
    }

    getByIdWithPareja = async (req, res, next) => {
        const tutorWithPareja = await TutorModel.findWithPareja({id: req.params.id});
        if(!tutorWithPareja){
            throw new HttpException(404, 'Tutor not found');
        }

        res.send(tutorWithPareja);
    }

    create = async(req, res, next) => {
        this.checkValidation(req);
        const resultT = await TutorModel.create(req.body.tutor);
        if(!resultT){
            throw new HttpException(500, 'Something went wrong');
        }
        if(req.body.tutor.tiene_pareja){

            const resultP = await ParejaModel.create(req.body.pareja);
            if(!resultP){
                throw new HttpException(500, 'Something went wrong');
            }
        }

        res.status(201).send('Tutor was created');
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const resultT = await TutorModel.update(req.params.id, req.body.tutor);
        if(!resultT){
            throw new HttpException(404, 'Something went wrong');
        }
        if(req.body.tutor.tiene_pareja){
            await ParejaModel.delete(req.params.id);
            const resultP = await ParejaModel.create(req.body.pareja);
            if(!resultP){
                throw new HttpException(404, 'Something went wrong');
            }
        }
        else{
            await ParejaModel.delete(req.params.id);
        }

        const {affectedRows, changedRows, info} = resultT;
        const message = !affectedRows ? 'Tutor not found':
            affectedRows ? 'Tutor update successfuly' : 'Update faild';

        res.send({message, info});
    }

    delete = async (req, res, next) => {
        const resultT = await TutorModel.delete(req.params.id);
        if(!resultT){
            throw new HttpException(404, 'Tutor not found');
        }
        
        res.send('Tutor has been deleted');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new TutoresController;

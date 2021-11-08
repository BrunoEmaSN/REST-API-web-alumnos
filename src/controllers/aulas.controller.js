const AulaModel             = require('../models/aula.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class AulasController{
    getAll = async (req, res, next) => {
        const aulasList = await AulaModel.find();
        if(!aulasList.length){
            throw new HttpException(404, 'Aulas not found');
        }

        res.send(aulasList);
    }

    getById = async (req, res, next) => {
        const aula = await AulaModel.find({id: req.params.id});
        if(!aula){
            throw new HttpException(404, 'Aulas not found');
        }
        
        res.send(aula);
    }

    create = async (req, res, next) => {
        this.checkValidation(req);
        const result = await AulaModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Aula was created');
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const result = await AulaModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong');
        }

        const {affectedRows, info} = result;

        const message = !affectedRows ? 'Aula not found' :
            affectedRows ? 'Aula update successfuly' : 'Update faild';

        res.send({message, info});
    }

    delete = async (req, res, next) => {
        const result = await AulaModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Aula not found');
        }

        res.send('Aula has been deleted');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new AulasController;

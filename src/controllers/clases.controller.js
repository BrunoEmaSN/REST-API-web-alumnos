const ClaseModel           = require('../models/clase.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class ClasesController{
    getAll = async (req, res, next) => {
        const clasesList = await ClaseModel.find();
        if(!clasesList.length){
            throw new HttpException(404, 'Clases not found');
        }

        res.send(clasesList);
    }

    getById = async (req, res, next) => {
        const clase = await ClaseModel.find({id: req.params.id});
        if(!clase){
            throw new HttpException(404, 'Clase not found');
        }

        res.send(clase);
    }

    create = async (req, res, next) => {
        this.checkValidation(req);
        const result = await ClaseModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong');
        }
        res.status(201).send('Clase was created');
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const result = await ClaseModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong');
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Clase not found' :
            affectedRows ? 'Clase update successfuly' : 'Update faild';
    
        res.send({message, info});
    }

    delete = async (req, res, next) => {
        const result = await ClaseModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Clase not found');
        }

        res.send('Clase has been deleted');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new ClasesController();

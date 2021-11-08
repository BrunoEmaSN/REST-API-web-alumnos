const PeriodoModel          = require('../models/periodo.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class PeriodosController {
    getAll = async (req, res, next) => {
        const periodosList = await PeriodoModel.find(req.body);
        if(!periodosList.length){
            throw new HttpException(404, 'Periodos not found');
        }

        res.send(periodosList);
    }

    getById = async (req, res, next) => {
        const periodo = await PeriodoModel.find({id: req.params.id});
        if(!periodo){
            throw new HttpException(404, 'Periodo not found');
        }

        res.send(periodo);
    }

    create = async (req, res, next) => {
        this.checkValidation(req);
        const result = await PeriodoModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Periodo was created');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new PeriodosController;

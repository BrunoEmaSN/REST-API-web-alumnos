const SancionModel          = require('../models/sancion.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class SancionesController {
    getAll = async (req, res, next) => {
        const sancionesList = await SancionModel.find();
        if(!sancionesList.length){
            throw new HttpException(404, 'Sanciones not found');
        }

        res.send(sancionesList);
    }

    getById = async (req, res, next) => {
        const sancion = await SancionModel.find({id: req.params.id});
        if(!sancion){
            throw new HttpException(404, 'Sancion not found');
        }

        res.send(sancion);
    }

    update = async (req, res, next) => {
        const result = await SancionModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong');
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Sancion not found' :
            affectedRows ? 'Sancion update successfuly' : 'Update faild';

        res.send({message, info});
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new SancionesController;

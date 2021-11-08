const CalificacionModel     = require('../models/calificacion.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class CalificacionesController {
    getAll = async (req, res, next) => {
        const calificacionesList = await CalificacionModel.find();
        if(!calificacionesList.length){
            throw new HttpException(404, 'Calificaciones not found');
        }

        res.send(calificacionesList);
    }

    getById = async (req, res, next) => {
        const calificacion = await CalificacionModel.find({id: req.params.id});
        if(!calificacion){
            throw new HttpException(404, 'Calificacion not found');
        }

        res.send(calificacion);
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const result = await CalificacionModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong');
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Calificacion not found' :
            affectedRows ? 'Calificacion update successfuly' : 'Update faild';

        res.send({message, info});
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new CalificacionesController;

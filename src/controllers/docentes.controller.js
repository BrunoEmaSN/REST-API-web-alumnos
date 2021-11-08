const DocenteModel          = require('../models/docente.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class DocentesController{
    getAll = async (req, res, next) => {
        const docentesList = await DocenteModel.find();
        if(!docentesList.length){
            throw new HttpException(404, 'Docentes not found');
        }
        res.send(docentesList);
    }

    getById = async (req, res, next) => {
        const docente = await DocenteModel.find({id: req.params.id});
        if(!docente){
            throw new HttpException(404, 'Docente not found');
        }
        res.send(docente);
    }

    create = async (req, res, next) => {
        this.checkValidation(req);
        const result = await DocenteModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong');
        }
        res.status(201).send('Docente was created');
    }
    
    createDocenteMateria = async (req, res, next) => {
        this.checkValidation(req);
        req.body.map(async (docenteMateria) => {
            let result = await DocenteModel.createDocenteMateria(docenteMateria);
            if(!result){
                throw new HttpException(500, 'Something went wrong');
            }
        });
        res.status(201).send('Docente Materia was created');
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const result = await DocenteModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong');
        }

        const {affectedRows, changedRows, info} = result;

        const message = !affectedRows ? 'Docente not found' :
            affectedRows ? 'Docente update successfuly' : 'Update faild';

        res.send({message, info});
    }

    delete = async (req, res, next) => {
        const result = await DocenteModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Docente not found');
        }

        res.send('Docente has been deleted');
    }

    deleteDocenteMateria = async (req, res, next) => {
        const result = await DocenteModel.deleteDocenteMateria(req.params.id);
        if(!result){
            throw new HttpException(404, 'Docente Materia not found');
        }
        res.send('Docente Materia has been deleted');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new DocentesController();

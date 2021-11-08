const MateriaModel           = require('../models/materia.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class MateriasController{
    getAll = async (req, res, next) => {
        const materiasList = await MateriaModel.find();
        if(!materiasList.length){
            throw new HttpException(404, 'Materias not found');
        }

        res.send(materiasList);
    }

    getById = async (req, res, next) => {
        const materia = await MateriaModel.find({id: req.params.id});
        if(!materia){
            throw new HttpException(404, 'Materia not found');
        }

        res.send(materia);
    }

    create = async (req, res, next) => {
        this.checkValidation(req);
        const result = await MateriaModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Materia was created');
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const result = await MateriaModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Someting went wrong');
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Materia not found' :
            affectedRows ? 'Materia update successfuly' : 'Update faild';

        res.send({message, info});
    }

    delete = async (req, res, next) => {
        const result = await MateriaModel.delete(req.params.id);
        if(!result){
            throw new HttpExceotion(404, 'Materia not found');
        }
        res.send('Materia has been deleted');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new MateriasController();

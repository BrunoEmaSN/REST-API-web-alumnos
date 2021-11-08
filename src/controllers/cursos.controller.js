const CursoModel            = require('../models/curso.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class CursosController{
    getAll = async (req, res, next) => {
        const cursosList = await CursoModel.find();
        if(!cursosList){
            throw new HttpException(404, 'Cursos not found');
        }

        res.send(cursosList);
    }

    getById = async (req, res, next) => {
        const curso = await CursoModel.find({id: req.params.id});
        if(!curso){
            throw new HttpException(404, 'Curso not found');
        }

        res.send(curso);
    }

    create = async (req, res, next) => {
        this.checkValidation(req);
        const result = await CursoModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong');
        }
        
        res.status(201).send('Curso was created');
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const result = await CursoModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong');
        }

        const {affectedRows, changedRows, info} = result;
        const message = !affectedRows ? 'Curso not found' :
            affectedRows && changedRows ? 'Curso update successfuly' : 'Update faild';

        res.send({message, info});
    }
    
    delete = async (req, res, next) => {
        const result = await CursoModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Curso not found');
        }

        res.send('Curso has been deleted');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new CursosController;

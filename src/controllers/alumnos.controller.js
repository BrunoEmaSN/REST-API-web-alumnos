const AlumnoModel           = require('../models/alumno.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class AlumnosController{
    getAll = async (req, res, next) => {
        const alumnosList = await AlumnoModel.find();
        if(!alumnosList.length){
            throw new HttpException(404, 'Alumnos not found');
        }

        res.send(alumnosList);
    }

    getById = async (req, res, next) => {
        const alumno = await AlumnoModel.find({id: req.params.id});
        if(!alumno){
            throw new HttpException(404, 'Alumno not found');
        }

        res.send(alumno);
    }


    getByCurso = async (req, res, next) => {
        const cursoAlumnos = await AlumnoModel.find({curso_id: req.params.curso_id});
        if(!cursoAlumnos.length){
            throw new HttpException(404, 'Alumnos not found');
        }
        res.send(cursoAlumnos);
    }

    create = async (req, res, next) => {
        this.checkValidation(req);
        const result  = await AlumnoModel.create(req.body); 
        if(!result){
            throw new HttpException(500, 'Something went wrong');
        }

        res.status(201).send('Alumno was created');
    }

    createAlumnoTutor = async (req, res, next) => {
        this.checkValidation(req);
        req.body.map(async (alumnoTutor) => {
            let result = await AlumnoModel.createAlumnoTutor(alumnoTutor);
            if(!result){
                throw new HttpException(500, 'Something went wrong');
            }
        });

        res.status(201).send('Alumno Tutor was created');
    }

    createAlumnoMateria = async (req, res, next) => {
        this.checkValidation(req);
        req.body.map(async (alumnoMateria) => {
            let result = await AlumnoModel.createAlumnoMateria(alumnoMateria);
            if(!result){
                throw new HttpException(500, 'Something went wrong');
            }
        });

        res.status(201).send('Alumno Materia was created');
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const result = await AlumnoModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong');
        }
        const {affectedRows, info} = result;
        console.log(result);
        const message = !affectedRows ? 'Alumno not found' :
        affectedRows ? 'Alumno update successfuly' : 'Update faild';
        
        res.send({message, info});
    }

    delete = async (req, res, next) => {
        const result = await AlumnoModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Alumno not found');
        }
        res.send('Alumno has been deleted');
    }

    deleteAlumnoTutor = async (req, res, next) => {
        const result = await AlumnoModel.deleteAlumnoTutor(req.params.id);
        if(!result){
            throw new HttpException(404, 'Alumno Tutor not found');
        }
        res.send('Alumno Tutor has been deleted');
    }

    deleteAlumnoMateria = async (req, res, next) => {
        const result = await AlumnoModel.deleteAlumnoMateria(req.params.id);
        if(!result){
            throw new HttpException(404, 'Alumno Materia not found');
        }
        res.send('Alumno Materia has been deleted');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new AlumnosController;

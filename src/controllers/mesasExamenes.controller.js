const MesaExamenModel       = require('../models/mesaExamen.model');
const HttpException         = require('../utils/HttpException.utils');
const { validationResult }  = require('express-validator');

class MesasExamenesController{
    getAll = async (req, res, next) => {
        const mesasList = await MesaExamenModel.find();
        if(!mesasList.length){
            throw new HttpException(404, 'Mesas not found');
        }

        res.send(mesasList);
    }

    getById = async (req, res, next) => {
        const mesa = await MesaExamenModel.find({id: req.params.id});
        if(!mesa){
            throw new HttpException(404, 'Mesa not found');
        }
        res.send(mesa);
    }

    create = async (req, res, next) => {
        this.checkValidation(req);
        const resultM = await MesaExamenModel.createMaestro(req.body.maestro);
        if(!resultM){
            throw new HttpException(500, 'Something went wrong');
        }
        req.body.novedad.map(async (novedad) => {
            console.log(novedad);
            let result = await MesaExamenModel.createNovedad(novedad);
            if(!result){
                throw new HttpException(500, 'Something went wrong');
            }
        });

        res.status(201).send('Mesa was created');
    }

    update = async (req, res, next) => {
        this.checkValidation(req);
        const resultM = await MesaExamenModel.updateMaestro(req.params.id, req.body.maestro);
        if(!resultM){
            throw new HttpException(404, 'Something went wrong');
        }
        req.body.novedad.map(async (novedad) => {
            let result = await MesaExamenModel.updateNovedad(novedad);
            if(!result){
                throw new HttpException(404, 'Something went wrong');
            }
        });

        const {affectedRows, info} = resultM;
        const message = !affectedRows ? 'Mesa not found' :
            affectedRows ? 'Mesa update successfuly' : 'Update faild';
        
        res.send({message, info});
    }

    delete = async (req, res, next) => {
        const result = await MesaExamenModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Mesa not found');
        }

        res.send('Mesa has been deleted');
    }

    checkValidation = (req) => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

module.exports = new MesasExamenesController();

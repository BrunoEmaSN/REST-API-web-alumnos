import { validationResult } from "express-validator";
import HttpException from "../utils/HttpException.utils";
import CalificacionModel from "../models/Calificacion.model";
import ICalificacionesService from "./interfaces/ICalificaciones.service";
const calificacionFormatter = require("../utils/formatter/calificacion");

class CalificacionesService implements ICalificacionesService{
    getAll = async (): Promise<any> => {
        const calificacionesList = await CalificacionModel.getAll();
        if(!calificacionesList.length){
            throw new HttpException(404, 'Calificaciones not found', null);
        }

        return calificacionesList[0];
    }

    getById = async (req: any): Promise<any> => {
        const calificacion = await CalificacionModel.find({id: req.params.id});
        if(!calificacion){
            throw new HttpException(404, 'Calificacion not found', null);
        }

        return calificacion[0][0];
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const calificacion = calificacionFormatter(req.body);
        const result = await CalificacionModel.update(calificacion);
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Calificacion not found' :
            affectedRows ? 'Calificacion update successfuly' : 'Update faild';

        return {message, info};
    }

    checkValidation = async (req: Request): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
    
}

export default new CalificacionesService();
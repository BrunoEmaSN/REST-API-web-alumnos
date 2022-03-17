import { validationResult } from "express-validator";
import HttpException from "../utils/HttpException.utils";
import ClaseModel from "../models/Clase.model";
import ICalificacionesService from "./interfaces/ICalificaciones.service";
const claseFormatter = require("../utils/formatter/clase");

class ClasesService implements ICalificacionesService{
    getAll = async (): Promise<any> => {
        const clasesList = await ClaseModel.getAll();
        if(!clasesList.length){
            throw new HttpException(404, 'Clases not found', null);
        }

        return clasesList[0];
    }

    getById = async (req: any): Promise<any> => {
        const clase = await ClaseModel.find({id: req.params.id});
        if(!clase){
            throw new HttpException(404, 'Clase not found', null);
        }

        return clase[0][0];
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const clase = claseFormatter(req.body);
        const result = await ClaseModel.create(clase);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

        return result[0][0];
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const clase = claseFormatter(req.body);
        const result = await ClaseModel.update({ id: req.params.id, ...clase });
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }
    
        return result[0][0];
    }

    delete = async (req: any): Promise<any> => {
        const result = await ClaseModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Clase not found', null);
        }

        return 'Clase has been deleted';
    }

    checkValidation = async (req: Request): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new ClasesService();
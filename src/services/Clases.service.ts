import { validationResult } from "express-validator";
import HttpException from "../utils/HttpException.utils";
import ClaseModel from "../models/Clase.model";
import ICalificacionesService from "./interfaces/ICalificaciones.service";

class ClasesService implements ICalificacionesService{
    getAll = async (): Promise<any> => {
        const clasesList = await ClaseModel.getAll();
        if(!clasesList.length){
            throw new HttpException(404, 'Clases not found', null);
        }

        return clasesList;
    }

    getById = async (req: any): Promise<any> => {
        const clase = await ClaseModel.find({id: req.params.id});
        if(!clase){
            throw new HttpException(404, 'Clase not found', null);
        }

        return clase;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const result = await ClaseModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }
        return 'Clase was created';
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const result = await ClaseModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Clase not found' :
            affectedRows ? 'Clase update successfuly' : 'Update faild';
    
        return {message, info};
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
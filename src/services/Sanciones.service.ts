import { validationResult } from "express-validator";
import SancionModel from "../models/Sancion.model";
import HttpException from "../utils/HttpException.utils";
import ISancionesService from "./interfaces/ISanciones.service";

class SancionesService implements ISancionesService {
    getAll = async (): Promise<any> => {
        const sancionesList = await SancionModel.getAll();
        if(!sancionesList.length){
            throw new HttpException(404, 'Sanciones not found', null);
        }

        return sancionesList;
    }

    getById = async (req: any): Promise<any> => {
        const sancion = await SancionModel.find({id: req.params.id});
        if(!sancion){
            throw new HttpException(404, 'Sancion not found', null);
        }

        return sancion;
    }

    update = async (req: any): Promise<any> => {
        const result = await SancionModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Sancion not found' :
            affectedRows ? 'Sancion update successfuly' : 'Update faild';

        return {message, info};
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new SancionesService();
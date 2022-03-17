import { validationResult } from "express-validator";
import HttpException from "../utils/HttpException.utils";
import AulaModel from "../models/Aula.model";
import IAulasService from "./interfaces/IAulas.service";
const aulaFormatter = require("../utils/formatter/aula");

class AulasService implements IAulasService {
    getAll = async (): Promise<any> => {
        const aulasList = await AulaModel.getAll();
        if(!aulasList.length){
            throw new HttpException(404, 'Aulas not found', null);
        }

        return aulasList[0];
    }

    getById = async (req: any): Promise<any> => {
        const aula = await AulaModel.find({id: req.params.id});
        if(!aula){
            throw new HttpException(404, 'Aulas not found', null);
        }
        
        return aula[0][0];
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const result = await AulaModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

        return result[0][0];
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const aula = aulaFormatter( req.body );
        const result = await AulaModel.update( aula );
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }

        const {affectedRows, info} = result;

        const message = !affectedRows ? 'Aula not found' :
            affectedRows ? 'Aula update successfuly' : 'Update faild';

        return {message, info};
    }

    delete = async (req: any): Promise<string> => {
        const result = await AulaModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Aula not found', null);
        }

        return 'Aula has been deleted';
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new AulasService();
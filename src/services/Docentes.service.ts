import IDocentesService from "./interfaces/IDocentes.service";
import DocenteModel from "../models/Docente.model";
import HttpException from "../utils/HttpException.utils";
import { validationResult } from "express-validator";

class DocentesService implements IDocentesService {
    getAll = async (): Promise<any> => {
        const docentesList = await DocenteModel.getAll();
        if(!docentesList.length){
            throw new HttpException(404, 'Docentes not found', null);
        }
        return docentesList;
    }

    getById = async (req: any): Promise<any> => {
        const docente = await DocenteModel.find({id: req.params.id});
        if(!docente){
            throw new HttpException(404, 'Docente not found', null);
        }
        return docente;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const result = await DocenteModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }
        return 'Docente was created';
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const result = await DocenteModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }

        const {affectedRows, changedRows, info} = result;

        const message = !affectedRows ? 'Docente not found' :
            affectedRows ? 'Docente update successfuly' : 'Update faild';

        return {message, info};
    }

    delete = async (req: any): Promise<string> => {
        const result = await DocenteModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Docente not found', null);
        }

        return 'Docente has been deleted';
    }

    checkValidation = async (req: Request): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new DocentesService();
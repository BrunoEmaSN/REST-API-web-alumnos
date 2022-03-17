import { validationResult } from "express-validator";
import HttpException from "../utils/HttpException.utils";
import CursoModel from "../models/Curso.model";
import ICursosService from "./interfaces/ICursos.service";
const cursoFormatter = require("../utils/formatter/curso");

class CursosService implements ICursosService{
    getAll = async (): Promise<any> => {
        const cursosList = await CursoModel.getAll();
        if(!cursosList){
            throw new HttpException(404, 'Cursos not found', null);
        }

        return cursosList[0];
    }

    getById = async (req: any): Promise<any> => {
        const curso = await CursoModel.find({id: req.params.id});
        if(!curso){
            throw new HttpException(404, 'Curso not found', null);
        }

        return curso[0][0];
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const result = await CursoModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }
        
        return result;
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const curso = cursoFormatter(req.body);
        const result = await CursoModel.update( curso );
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }
        return result;
    }
    
    delete = async (req: any): Promise<string> => {
        const result = await CursoModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Curso not found', null);
        }

        return 'Curso has been deleted';
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new CursosService();
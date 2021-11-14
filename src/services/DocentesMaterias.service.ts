import { validationResult } from "express-validator";
import DocenteMateriaModel from "../models/DocenteMateria.model";
import HttpException from "../utils/HttpException.utils";
import IDocentesMateriasService from "./interfaces/IDocentesMaterias.service";

class DocentesMateriasService implements IDocentesMateriasService{
    getByDocente = async (req: any): Promise<any> => {
        const docenteMaterias = await DocenteMateriaModel.getByDocente(req.params.id);
        if(!docenteMaterias.length){
            throw new HttpException(404, 'Docentes not found', null);
        }
        return docenteMaterias;
    }
    
    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        req.body.map(async (docenteMateria: ArrayLike<unknown> | { [s: string]: unknown; }) => {
            let result = await DocenteMateriaModel.create(docenteMateria);
            if(!result){
                throw new HttpException(500, 'Something went wrong', null);
            }
        });
        return 'Docente Materia was created';
    }

    delete = async (req: any): Promise<string> => {
        const result = await DocenteMateriaModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Docente Materia not found', null);
        }
        return 'Docente Materia has been deleted';
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new DocentesMateriasService();
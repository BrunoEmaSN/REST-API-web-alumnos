import { validationResult } from "express-validator";
import MateriaModel from "../models/Materia.model";
import IMateriasService from "./interfaces/IMaterias.service";
import HttpException from "../utils/HttpException.utils";

class MateriasService implements IMateriasService{
    getAll = async (): Promise<any> => {
        const materiasList = await MateriaModel.getAll();
        if(!materiasList.length){
            throw new HttpException(404, 'Materias not found', null);
        }

        return materiasList;
    }

    getById = async (req: any): Promise<any> => {
        const materia = await MateriaModel.find({id: req.params.id});
        if(!materia){
            throw new HttpException(404, 'Materia not found', null);
        }

        return materia;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const result = await MateriaModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

        return 'Materia was created';
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const result = await MateriaModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Someting went wrong', null);
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Materia not found' :
            affectedRows ? 'Materia update successfuly' : 'Update faild';

        return {message, info};
    }

    delete = async (req: any): Promise<string> => {
        const result = await MateriaModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Materia not found', null);
        }
        return 'Materia has been deleted';
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new MateriasService();
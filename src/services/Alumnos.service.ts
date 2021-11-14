import AlumnoModel from "../models/Alumno.model";
import IAlumnosService from "./interfaces/IAlumnos.service";
import HttpException from "../utils/HttpException.utils";
import { validationResult } from "express-validator";
import { Request } from "express-validator/src/base";

class AlumnosService implements IAlumnosService{
    getAll = async (): Promise<Array<any>> => {
        const alumnosList: any = await AlumnoModel.getAll();
        if(!alumnosList.length){
            throw new HttpException(404, 'Alumnos not found', null);
        }

        return alumnosList;
    }

    getById = async (req: any): Promise<any> => {
        const alumno = await AlumnoModel.findAllAlumnos({id: req.params.id});
        if(!alumno){
            throw new HttpException(404, 'Alumnos not found', null);
        }

        return alumno;
    }

    getByCurso = async (req: any): Promise<any> => {
        const cursoAlumnos: any = await AlumnoModel.find({curso_id: req.params.curso_id});
        if(!cursoAlumnos.length){
            throw new HttpException(404, 'Alumnos not found', null);
        }

        return cursoAlumnos;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const result  = await AlumnoModel.create(req.body); 
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

        return 'Alumno was created';
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const result: any = await AlumnoModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }
        const {affectedRows, info} = result;
        const message = !affectedRows ? 'Alumno not found' :
        affectedRows ? 'Alumno update successfuly' : 'Update faild';
        
        return {message, info};
    }

    delete = async (req: any): Promise<string> => {
        const result = await AlumnoModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Alumno not found', null);
        }
        
        return 'Alumno has been deleted';
    }

    checkValidation = async (req: Request): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new AlumnosService();
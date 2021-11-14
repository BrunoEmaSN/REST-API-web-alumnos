import AlumnoMateriaModel from "../models/AlumnoMateria.model";
import HttpException from "../utils/HttpException.utils";
import { validationResult } from "express-validator";
import { Request } from "express-validator/src/base";
import IAlumnnosMateriasService from "./interfaces/IAlumnosMaterias.service";

class AlumnosMateriasService implements IAlumnnosMateriasService {
    getByAlumno = async (req: any): Promise<any> => {
        const alumno = await AlumnoMateriaModel.find({id: req.params.id});
        if(!alumno){
            throw new HttpException(404, 'Alumno not found', null);
        }

        return alumno;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        req.body.map(async (alumnoMateria: any) => {
            let result = await AlumnoMateriaModel.create(alumnoMateria);
            if(!result){
                throw new HttpException(500, 'Something went wrong', null);
            }
        });

        return 'Alumno Materia was created';
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const result = await AlumnoMateriaModel.update(req.params.id, req.body);
        if(!result){
            throw new HttpException(404, 'Something went wrong', null);
        }
        const {affectedRows, info} = result;
        console.log(result);
        const message = !affectedRows ? 'Alumno not found' :
        affectedRows ? 'Alumno update successfuly' : 'Update faild';

        return {message, info};
    }

    delete = async (req: any): Promise<string> => {
        const result = await AlumnoMateriaModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Alumno Materia not found', null);
        }

        return 'Alumno Materia has been deleted';
    }
    
    checkValidation = async (req: Request): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
    
}

export default new AlumnosMateriasService();
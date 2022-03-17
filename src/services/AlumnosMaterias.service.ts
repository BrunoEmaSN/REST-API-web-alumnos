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
        return alumno[0];
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        req.body.materias.map(async (materia: any) => {
            let result = await AlumnoMateriaModel.create({
                documento: req.body.documento,
                materiId: materia.id,
                estado: materia.estado
            });
            if(!result){
                throw new HttpException(500, 'Something went wrong', null);
            }
        });

        return 'Alumno Materia was created';
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);

        const result = new Array();
        result.push( await this.delete(req) );
        result.push( await this.create(req) );

        const message = 'Alumno update successfuly';
        return {message};
    }

    delete = async (req: any): Promise<string> => {
        await AlumnoMateriaModel.delete(req.params.id);
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
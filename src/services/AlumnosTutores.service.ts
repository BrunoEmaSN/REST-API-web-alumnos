import AlumnoTutorModel from "../models/AlumnoTutor.model";
import HttpException from "../utils/HttpException.utils";
import IAlumnosTutoresService from "./interfaces/IAlumnosTutores.service";
import { validationResult } from "express-validator";

class AlumnosTutoresService implements IAlumnosTutoresService{
    getByAlumno = async (req: any): Promise<any> => {
        const alumno = await AlumnoTutorModel.getAll({id: req.params.id});
        if(!alumno){
            throw new HttpException(404, 'Alumno not found', null);
        }

        return alumno;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        req.body.map(async (alumnoTutor: any) => {
            let result = await AlumnoTutorModel.create(alumnoTutor);
            if(!result){
                throw new HttpException(500, 'Something went wrong', null);
            }
        });

        return 'Alumno Tutor was created';
    }
    delete = async (req: any): Promise<string> => {
        const result = await AlumnoTutorModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Alumno Tutor not found', null);
        }
        return 'Alumno Tutor has been deleted';
    }
    checkValidation(req: Request): void {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new AlumnosTutoresService();
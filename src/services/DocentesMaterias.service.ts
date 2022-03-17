import { validationResult } from "express-validator";
import DocenteMateriaModel from "../models/DocenteMateria.model";
import HttpException from "../utils/HttpException.utils";
import IDocentesMateriasService from "./interfaces/IDocentesMaterias.service";

class DocentesMateriasService implements IDocentesMateriasService{
    getByDocente = async (req: any): Promise<any> => {
        const docenteMaterias = await DocenteMateriaModel.getByDocente(req.params.id);
        return docenteMaterias[0];
    }
    
    create = async (req: any): Promise<string> => {
        this.checkValidation(req);

        req.body.materias.map(async (materia: any) => {
            let result = await DocenteMateriaModel.create({
                documento: req.body.documento,
                materiaId: materia.id
            });
            if(!result){
                throw new HttpException(500, 'Something went wrong', null);
            }
        });
        
        return 'Docente Materia was created';
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);

        const result = new Array();
        result.push( await this.delete(req) );
        result.push( await this.create(req) );

        const message = 'Docente update successfuly';
        return {message};
    }

    delete = async (req: any): Promise<string> => {
        const result = await DocenteMateriaModel.delete(req.params.id);
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
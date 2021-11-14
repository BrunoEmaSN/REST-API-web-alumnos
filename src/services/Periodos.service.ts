import { validationResult } from "express-validator";
import PeriodoModel from "../models/Periodo.model";
import IPeriodosService from "./interfaces/IPeriodos.service";
import HttpException from "../utils/HttpException.utils";

class PeriodosService implements IPeriodosService{
    getAll = async (req: any): Promise<any> => {
        const periodosList = await PeriodoModel.getAll(req.body);
        if(!periodosList.length){
            throw new HttpException(404, 'Periodos not found', null);
        }

        return periodosList;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const result = await PeriodoModel.create(req.body);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

        return 'Periodo was created';
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new PeriodosService();
import { validationResult } from "express-validator";
import PeriodoModel from "../models/Periodo.model";
import IPeriodosService from "./interfaces/IPeriodos.service";
import HttpException from "../utils/HttpException.utils";
const periodoFormatter = require("../utils/formatter/periodo");

class PeriodosService implements IPeriodosService{
    getAll = async (req: any): Promise<any> => {
        const periodosList = await PeriodoModel.getAll({tipo: req.params.tipo});
        if(!periodosList.length){
            throw new HttpException(404, 'Periodos not found', null);
        }

        return periodosList[0];
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const periodo = periodoFormatter( req.body );
        await PeriodoModel.create(periodo);

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
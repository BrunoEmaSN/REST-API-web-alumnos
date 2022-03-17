import { validationResult } from "express-validator";
import MesaExamenModel from "../models/MesaExamen.model";
import IMesasExamenesService from "./interfaces/IMesasExamenes.service";
import HttpException from "../utils/HttpException.utils";
const { maestroFormatter, novedadFormatter } = require("../utils/formatter/mesaExamen");

class MesasExamenesService implements IMesasExamenesService {
    getAll = async (): Promise<any> => {
        const mesasList = await MesaExamenModel.getAll();
        if(!mesasList.length){
            throw new HttpException(404, 'Mesas not found', null);
        }

        return mesasList[0];
    }

    getById = async (req: any): Promise<any> => {
        const mesa = await MesaExamenModel.find({id: req.params.id});
        if(!mesa){
            throw new HttpException(404, 'Mesa not found', null);
        }
        return mesa[0];
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const maestro = maestroFormatter( req.body.maestro );

        const resultN = new Array();
        const resultM = await MesaExamenModel.createMaestro(maestro);
        if(!resultM){
            throw new HttpException(500, 'Something went wrong', null);
        }
        req.body.novedad.map(async (n: ArrayLike<unknown> | { [s: string]: unknown; }) => {
            const novedad = novedadFormatter(n);
            resultN.push(await this.addNovedad({
                maestroId: resultM.last_id,
                ...novedad
            }));
        });

        return resultM;
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const maestro = maestroFormatter( req.body.maestro );

        const resultN = new Array();
        const resultM = await MesaExamenModel.updateMaestro({
            id: parseInt(req.params.id),
            ...maestro
        });

        if(!resultM){
            throw new HttpException(404, 'Something went wrong', null);
        }

        resultN.push(await this.removeNovedad(parseInt(req.params.id)));
        req.body.novedad.map(async (n: ArrayLike<unknown> | { [s: string]: unknown; }) => {
            const novedad = novedadFormatter(n);
            resultN.push(await this.addNovedad({
                maestroId: parseInt(req.params.id),
                ...novedad
            }));
        });

        const {affectedRows, info} = resultM;
        const message = !affectedRows ? 'Mesa not found' :
            affectedRows ? 'Mesa update successfuly' : 'Update faild';
        
        return {message, info, resultN};
    }

    delete = async (req: any): Promise<string> => {
        await MesaExamenModel.deleteMaestro(parseInt(req.params.id));
        return 'Mesa has been deleted';
    }

    addNovedad = async (req: any): Promise<string> => {
        let result = await MesaExamenModel.createNovedad(req);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

        return `Mesa novedad created`;
    }

    removeNovedad = async (id: any): Promise<string> => {
        await MesaExamenModel.deleteNovedad(id);
        return `Mesas remove`;
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new MesasExamenesService();
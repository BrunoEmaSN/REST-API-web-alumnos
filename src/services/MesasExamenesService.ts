import { validationResult } from "express-validator";
import MesaExamenModel from "../models/MesaExamen.model";
import IMesasExamenesService from "./interfaces/IMesasExamenes.service";
import HttpException from "../utils/HttpException.utils";

class MesasExamenesService implements IMesasExamenesService {
    getAll = async (): Promise<any> => {
        const mesasList = await MesaExamenModel.getAll();
        if(!mesasList.length){
            throw new HttpException(404, 'Mesas not found', null);
        }

        return mesasList;
    }

    getById = async (req: any): Promise<any> => {
        const mesa = await MesaExamenModel.find({id: req.params.id});
        if(!mesa){
            throw new HttpException(404, 'Mesa not found', null);
        }
        return mesa;
    }

    create = async (req: any): Promise<string> => {
        this.checkValidation(req);
        const resultN = new Array();
        const resultM = await MesaExamenModel.createMaestro(req.body.maestro);
        if(!resultM){
            throw new HttpException(500, 'Something went wrong', null);
        }
        req.body.novedad.map(async (novedad: ArrayLike<unknown> | { [s: string]: unknown; }) => {
            resultN.push(await this.addNovedad(novedad));
        });

        return `Mesa was created \n${resultN}`;
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const resultN = new Array();
        const resultM = await MesaExamenModel.updateMaestro(req.params.id, req.body.maestro);
        if(!resultM){
            throw new HttpException(404, 'Something went wrong', null);
        }
        resultN.push(await this.removeNovedad(req.params.id));
        req.body.novedad.map(async (novedad: ArrayLike<unknown> | { [s: string]: unknown; }) => {
            resultN.push(await this.addNovedad(novedad));
        });

        const {affectedRows, info} = resultM;
        const message = !affectedRows ? 'Mesa not found' :
            affectedRows ? 'Mesa update successfuly' : 'Update faild';
        
        return {message, info, resultN};
    }

    delete = async (req: any): Promise<string> => {
        const result = await MesaExamenModel.deleteMaestro(parseInt(req.params.id));
        if(!result){
            throw new HttpException(404, 'Mesa not found', null);
        }

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
        let result = await MesaExamenModel.deleteNovedad(id);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

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
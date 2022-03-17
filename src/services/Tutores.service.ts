import { validationResult } from "express-validator";
import ParejaModel from "../models/Pareja.model";
import TutorModel from "../models/Tutor.model";
import ITutoresService from "./interfaces/ITutores.service";
import HttpException from "../utils/HttpException.utils";
const { tutorFormatter, parejaFormatter } = require("../utils/formatter/tutor");

class TutoresService implements ITutoresService {
    getAll = async (): Promise<any> => {
        const tutoresList = await TutorModel.getAll();
        if(!tutoresList.length){
            throw new HttpException(404, 'Tutores not found', null);
        }

        return tutoresList[0];
    }

    getById = async (req: any): Promise<any> => {
        const tutor = await TutorModel.find({id: req.params.id});
        if(!tutor){
            throw new HttpException(404, 'Tutor not found', null);
        }
        return tutor[0][0];
    }

    getAllWithPareja = async (): Promise<any> => {
        const tutoresWithPareja = await TutorModel.getAllWithPareja();
        if(!tutoresWithPareja.length){
            throw new HttpException(404, 'Tutores not found', null);
        }

        return tutoresWithPareja[0];
    }

    getByIdWithPareja = async (req: any): Promise<any> => {
        const tutorWithPareja = await TutorModel.findWithPareja({id: req.params.id});
        if(!tutorWithPareja){
            throw new HttpException(404, 'Tutor not found', null);
        }

        return tutorWithPareja[0][0];
    }

    create = async(req: any): Promise<string> => {
        this.checkValidation(req);
        const tutor = tutorFormatter( req.body );
        const resultT = await TutorModel.create( tutor );
        const resultP = new Array();
        if(!resultT){
            throw new HttpException(500, 'Something went wrong', null);
        }
        if(tutor.tienePareja){
            const pareja = parejaFormatter( req.body );
            resultP.push(await this.addPareja( pareja ));
        }

        return `Tutor was created ${resultP}`;
    }

    update = async (req: any): Promise<any> => {
        this.checkValidation(req);
        const tutor = tutorFormatter( req.body );
        const resultT = await TutorModel.update(tutor);
        const resultP = new Array();
        
        if(!resultT){
            throw new HttpException(404, 'Something went wrong', null);
        }

        if(tutor.tienePareja){
            const pareja = parejaFormatter( req.body );
            resultP.push(await this.removePareja(req.params.id));
            resultP.push(await this.addPareja(pareja));
        }
        else{
            resultP.push(await this.removePareja(req.params.id));
        }

        const {affectedRows, info} = resultT;
        const message = !affectedRows ? 'Tutor not found':
            affectedRows ? 'Tutor update successfuly' : 'Update faild';

        return {message, info, resultP};
    }

    addPareja = async (pareja: any): Promise<any> => {
        const result = await ParejaModel.create(pareja);
        if(!result){
            throw new HttpException(500, 'Something went wrong', null);
        }

        return `Add pareja ${pareja.nombre} ${pareja.apellido}`;
    }

    removePareja = async (id: any): Promise<any> => {
        await ParejaModel.delete(id);

        return `Remove pareja`;
    }

    delete = async (req: any): Promise<string> => {
        const result = await TutorModel.delete(req.params.id);
        if(!result){
            throw new HttpException(404, 'Tutor not found', null);
        }
        
        return 'Tutor has been deleted';
    }

    checkValidation = async (req: any): Promise<void> => {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            throw new HttpException(400, 'Validation faild', errors);
        }
    }
}

export default new TutoresService();
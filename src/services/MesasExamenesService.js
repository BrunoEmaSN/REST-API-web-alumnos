"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const MesaExamen_model_1 = __importDefault(require("../models/MesaExamen.model"));
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
class MesasExamenesService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const mesasList = yield MesaExamen_model_1.default.getAll();
            if (!mesasList.length) {
                throw new HttpException_utils_1.default(404, 'Mesas not found', null);
            }
            return mesasList;
        });
        this.getById = (req) => __awaiter(this, void 0, void 0, function* () {
            const mesa = yield MesaExamen_model_1.default.find({ id: req.params.id });
            if (!mesa) {
                throw new HttpException_utils_1.default(404, 'Mesa not found', null);
            }
            return mesa;
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const resultN = new Array();
            const resultM = yield MesaExamen_model_1.default.createMaestro(req.body.maestro);
            if (!resultM) {
                throw new HttpException_utils_1.default(500, 'Something went wrong', null);
            }
            req.body.novedad.map((novedad) => __awaiter(this, void 0, void 0, function* () {
                resultN.push(yield this.addNovedad(novedad));
            }));
            return `Mesa was created \n${resultN}`;
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const resultN = new Array();
            const resultM = yield MesaExamen_model_1.default.updateMaestro(req.params.id, req.body.maestro);
            if (!resultM) {
                throw new HttpException_utils_1.default(404, 'Something went wrong', null);
            }
            resultN.push(yield this.removeNovedad(req.params.id));
            req.body.novedad.map((novedad) => __awaiter(this, void 0, void 0, function* () {
                resultN.push(yield this.addNovedad(novedad));
            }));
            const { affectedRows, info } = resultM;
            const message = !affectedRows ? 'Mesa not found' :
                affectedRows ? 'Mesa update successfuly' : 'Update faild';
            return { message, info, resultN };
        });
        this.delete = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield MesaExamen_model_1.default.deleteMaestro(parseInt(req.params.id));
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Mesa not found', null);
            }
            return 'Mesa has been deleted';
        });
        this.addNovedad = (req) => __awaiter(this, void 0, void 0, function* () {
            let result = yield MesaExamen_model_1.default.createNovedad(req);
            if (!result) {
                throw new HttpException_utils_1.default(500, 'Something went wrong', null);
            }
            return `Mesa novedad created`;
        });
        this.removeNovedad = (id) => __awaiter(this, void 0, void 0, function* () {
            let result = yield MesaExamen_model_1.default.deleteNovedad(id);
            if (!result) {
                throw new HttpException_utils_1.default(500, 'Something went wrong', null);
            }
            return `Mesas remove`;
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
    }
}
exports.default = new MesasExamenesService();

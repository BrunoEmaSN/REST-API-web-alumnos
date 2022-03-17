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
const DocenteMateria_model_1 = __importDefault(require("../models/DocenteMateria.model"));
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
class DocentesMateriasService {
    constructor() {
        this.getByDocente = (req) => __awaiter(this, void 0, void 0, function* () {
            const docenteMaterias = yield DocenteMateria_model_1.default.getByDocente(req.params.id);
            return docenteMaterias[0];
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            req.body.materias.map((materia) => __awaiter(this, void 0, void 0, function* () {
                let result = yield DocenteMateria_model_1.default.create({
                    documento: req.body.documento,
                    materiaId: materia.id
                });
                if (!result) {
                    throw new HttpException_utils_1.default(500, 'Something went wrong', null);
                }
            }));
            return 'Docente Materia was created';
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const result = new Array();
            result.push(yield this.delete(req));
            result.push(yield this.create(req));
            const message = 'Docente update successfuly';
            return { message };
        });
        this.delete = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield DocenteMateria_model_1.default.delete(req.params.id);
            return 'Docente Materia has been deleted';
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
    }
}
exports.default = new DocentesMateriasService();

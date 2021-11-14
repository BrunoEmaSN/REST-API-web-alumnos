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
            if (!docenteMaterias.length) {
                throw new HttpException_utils_1.default(404, 'Docentes not found', null);
            }
            return docenteMaterias;
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            req.body.map((docenteMateria) => __awaiter(this, void 0, void 0, function* () {
                let result = yield DocenteMateria_model_1.default.create(docenteMateria);
                if (!result) {
                    throw new HttpException_utils_1.default(500, 'Something went wrong', null);
                }
            }));
            return 'Docente Materia was created';
        });
        this.delete = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield DocenteMateria_model_1.default.delete(req.params.id);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Docente Materia not found', null);
            }
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
//# sourceMappingURL=DocentesMaterias.service.js.map
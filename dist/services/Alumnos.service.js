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
const Alumno_model_1 = __importDefault(require("../models/Alumno.model"));
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
const express_validator_1 = require("express-validator");
class AlumnosService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const alumnosList = yield Alumno_model_1.default.getAll();
            if (!alumnosList.length) {
                throw new HttpException_utils_1.default(404, 'Alumnos not found', null);
            }
            return alumnosList;
        });
        this.getById = (req) => __awaiter(this, void 0, void 0, function* () {
            const alumno = yield Alumno_model_1.default.findAllAlumnos({ id: req.params.id });
            if (!alumno) {
                throw new HttpException_utils_1.default(404, 'Alumnos not found', null);
            }
            return alumno;
        });
        this.getByCurso = (req) => __awaiter(this, void 0, void 0, function* () {
            const cursoAlumnos = yield Alumno_model_1.default.find({ curso_id: req.params.curso_id });
            if (!cursoAlumnos.length) {
                throw new HttpException_utils_1.default(404, 'Alumnos not found', null);
            }
            return cursoAlumnos;
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const result = yield Alumno_model_1.default.create(req.body);
            if (!result) {
                throw new HttpException_utils_1.default(500, 'Something went wrong', null);
            }
            return 'Alumno was created';
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const result = yield Alumno_model_1.default.update(req.params.id, req.body);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Something went wrong', null);
            }
            const { affectedRows, info } = result;
            const message = !affectedRows ? 'Alumno not found' :
                affectedRows ? 'Alumno update successfuly' : 'Update faild';
            return { message, info };
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield Alumno_model_1.default.delete(id);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Alumno not found', null);
            }
            return 'Alumno has been deleted';
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
    }
}
exports.default = new AlumnosService();
//# sourceMappingURL=Alumnos.service.js.map
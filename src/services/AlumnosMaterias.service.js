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
const AlumnoMateria_model_1 = __importDefault(require("../models/AlumnoMateria.model"));
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
const express_validator_1 = require("express-validator");
class AlumnosMateriasService {
    constructor() {
        this.getByAlumno = (req) => __awaiter(this, void 0, void 0, function* () {
            const alumno = yield AlumnoMateria_model_1.default.find({ id: req.params.id });
            if (!alumno) {
                throw new HttpException_utils_1.default(404, 'Alumno not found', null);
            }
            return alumno;
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            req.body.map((alumnoMateria) => __awaiter(this, void 0, void 0, function* () {
                let result = yield AlumnoMateria_model_1.default.create(alumnoMateria);
                if (!result) {
                    throw new HttpException_utils_1.default(500, 'Something went wrong', null);
                }
            }));
            return 'Alumno Materia was created';
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const result = yield AlumnoMateria_model_1.default.update(req.params.id, req.body);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Something went wrong', null);
            }
            const { affectedRows, info } = result;
            console.log(result);
            const message = !affectedRows ? 'Alumno not found' :
                affectedRows ? 'Alumno update successfuly' : 'Update faild';
            return { message, info };
        });
        this.delete = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield AlumnoMateria_model_1.default.delete(req.params.id);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Alumno Materia not found', null);
            }
            return 'Alumno Materia has been deleted';
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
    }
}
exports.default = new AlumnosMateriasService();

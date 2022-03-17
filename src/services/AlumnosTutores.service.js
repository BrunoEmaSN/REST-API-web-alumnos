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
const AlumnoTutor_model_1 = __importDefault(require("../models/AlumnoTutor.model"));
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
const express_validator_1 = require("express-validator");
class AlumnosTutoresService {
    constructor() {
        this.getByAlumno = (req) => __awaiter(this, void 0, void 0, function* () {
            const alumno = yield AlumnoTutor_model_1.default.getAll({ id: req.params.id });
            if (!alumno) {
                throw new HttpException_utils_1.default(404, 'Alumno not found', null);
            }
            return alumno[0];
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            req.body.map((alumnoTutor) => __awaiter(this, void 0, void 0, function* () {
                let result = yield AlumnoTutor_model_1.default.create(alumnoTutor);
                if (!result) {
                    throw new HttpException_utils_1.default(500, 'Something went wrong', null);
                }
            }));
            return 'Alumno Tutor was created';
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const result = new Array();
            result.push(yield this.delete(req));
            result.push(yield this.create(req));
            return 'Alumno Tutor was update';
        });
        this.delete = (req) => __awaiter(this, void 0, void 0, function* () {
            yield AlumnoTutor_model_1.default.delete(req.params.id);
            return 'Alumno Tutor has been deleted';
        });
    }
    checkValidation(req) {
        const errors = express_validator_1.validationResult(req);
        if (!errors.isEmpty()) {
            throw new HttpException_utils_1.default(400, 'Validation faild', errors);
        }
    }
}
exports.default = new AlumnosTutoresService();

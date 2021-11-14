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
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
const Calificacion_model_1 = __importDefault(require("../models/Calificacion.model"));
class CalificacionesService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const calificacionesList = yield Calificacion_model_1.default.getAll();
            if (!calificacionesList.length) {
                throw new HttpException_utils_1.default(404, 'Calificaciones not found', null);
            }
            return calificacionesList;
        });
        this.getById = (req) => __awaiter(this, void 0, void 0, function* () {
            const calificacion = yield Calificacion_model_1.default.find({ id: req.params.id });
            if (!calificacion) {
                throw new HttpException_utils_1.default(404, 'Calificacion not found', null);
            }
            return calificacion;
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const result = yield Calificacion_model_1.default.update(req.params.id, req.body);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Something went wrong', null);
            }
            const { affectedRows, info } = result;
            const message = !affectedRows ? 'Calificacion not found' :
                affectedRows ? 'Calificacion update successfuly' : 'Update faild';
            return { message, info };
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
    }
}
exports.default = new CalificacionesService();
//# sourceMappingURL=Calificaciones.service.js.map
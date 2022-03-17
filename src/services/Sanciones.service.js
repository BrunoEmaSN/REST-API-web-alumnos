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
const Sancion_model_1 = __importDefault(require("../models/Sancion.model"));
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
const sancionFormatter = require("../utils/formatter/sancion");
class SancionesService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const sancionesList = yield Sancion_model_1.default.getAll();
            if (!sancionesList.length) {
                throw new HttpException_utils_1.default(404, 'Sanciones not found', null);
            }
            return sancionesList[0];
        });
        this.getById = (req) => __awaiter(this, void 0, void 0, function* () {
            const sancion = yield Sancion_model_1.default.find({ id: req.params.id });
            if (!sancion) {
                throw new HttpException_utils_1.default(404, 'Sancion not found', null);
            }
            return sancion[0][0];
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            const sancion = sancionFormatter(req.body);
            console.log(sancion);
            const result = yield Sancion_model_1.default.update(sancion);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Something went wrong', null);
            }
            const { affectedRows, info } = result;
            const message = !affectedRows ? 'Sancion not found' :
                affectedRows ? 'Sancion update successfuly' : 'Update faild';
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
exports.default = new SancionesService();

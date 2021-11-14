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
const Clase_model_1 = __importDefault(require("../models/Clase.model"));
class ClasesService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const clasesList = yield Clase_model_1.default.getAll();
            if (!clasesList.length) {
                throw new HttpException_utils_1.default(404, 'Clases not found', null);
            }
            return clasesList;
        });
        this.getById = (req) => __awaiter(this, void 0, void 0, function* () {
            const clase = yield Clase_model_1.default.find({ id: req.params.id });
            if (!clase) {
                throw new HttpException_utils_1.default(404, 'Clase not found', null);
            }
            return clase;
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const result = yield Clase_model_1.default.create(req.body);
            if (!result) {
                throw new HttpException_utils_1.default(500, 'Something went wrong', null);
            }
            return 'Clase was created';
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const result = yield Clase_model_1.default.update(req.params.id, req.body);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Something went wrong', null);
            }
            const { affectedRows, info } = result;
            const message = !affectedRows ? 'Clase not found' :
                affectedRows ? 'Clase update successfuly' : 'Update faild';
            return { message, info };
        });
        this.delete = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield Clase_model_1.default.delete(req.params.id);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Clase not found', null);
            }
            return 'Clase has been deleted';
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
    }
}
exports.default = new ClasesService();

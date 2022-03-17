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
const Periodo_model_1 = __importDefault(require("../models/Periodo.model"));
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
const periodoFormatter = require("../utils/formatter/periodo");
class PeriodosService {
    constructor() {
        this.getAll = (req) => __awaiter(this, void 0, void 0, function* () {
            const periodosList = yield Periodo_model_1.default.getAll({ tipo: req.params.tipo });
            if (!periodosList.length) {
                throw new HttpException_utils_1.default(404, 'Periodos not found', null);
            }
            return periodosList[0];
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const periodo = periodoFormatter(req.body);
            yield Periodo_model_1.default.create(periodo);
            return 'Periodo was created';
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
    }
}
exports.default = new PeriodosService();

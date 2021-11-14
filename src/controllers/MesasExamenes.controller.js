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
const MesasExamenesService_1 = __importDefault(require("../services/MesasExamenesService"));
class MesasExamenesController {
    constructor(mesasExamenesService) {
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._mesasExamenesService.getAll());
        });
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._mesasExamenesService.getById(req));
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201).send(yield this._mesasExamenesService.create(req));
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._mesasExamenesService.update(req));
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._mesasExamenesService.delete(req));
        });
        this._mesasExamenesService = mesasExamenesService;
    }
}
exports.default = new MesasExamenesController(MesasExamenesService_1.default);

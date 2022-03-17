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
const AlumnosTutores_service_1 = __importDefault(require("../services/AlumnosTutores.service"));
class AlumnosTutoresController {
    constructor(alumnosTutoresService) {
        this.getByAlumno = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosTutoresService.getByAlumno(req));
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201).send(yield this._alumnosTutoresService.create(req));
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201).send(yield this._alumnosTutoresService.update(req));
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosTutoresService.delete(req));
        });
        this._alumnosTutoresService = alumnosTutoresService;
    }
}
exports.default = new AlumnosTutoresController(AlumnosTutores_service_1.default);

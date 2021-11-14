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
const AlumnosMaterias_service_1 = __importDefault(require("../services/AlumnosMaterias.service"));
class AlumnosMateriasController {
    constructor(alumnosMateriasService) {
        this.getByAlumno = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosMateriasService.getByAlumno(req));
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201).send(yield this._alumnosMateriasService.create(req));
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosMateriasService.update(req));
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosMateriasService.delete(req));
        });
        this._alumnosMateriasService = alumnosMateriasService;
    }
}
exports.default = new AlumnosMateriasController(AlumnosMaterias_service_1.default);

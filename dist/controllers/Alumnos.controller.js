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
const Alumnos_service_1 = __importDefault(require("../services/Alumnos.service"));
class AlumnosController {
    constructor(IAlumnosService) {
        this.getAll = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosService.getAll());
        });
        this.getById = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosService.getById(req));
        });
        this.getByCurso = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosService.getByCurso(req));
        });
        this.create = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.status(201).send(yield this._alumnosService.create(req));
        });
        this.update = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosService.update(req));
        });
        this.delete = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield this._alumnosService.delete(req));
        });
        this._alumnosService = IAlumnosService;
    }
}
exports.default = new AlumnosController(Alumnos_service_1.default);
//# sourceMappingURL=Alumnos.controller.js.map
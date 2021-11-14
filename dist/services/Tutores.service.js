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
const Pareja_model_1 = __importDefault(require("../models/Pareja.model"));
const Tutor_model_1 = __importDefault(require("../models/Tutor.model"));
const HttpException_utils_1 = __importDefault(require("../utils/HttpException.utils"));
class TutoresService {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const tutoresList = yield Tutor_model_1.default.getAll();
            if (!tutoresList.length) {
                throw new HttpException_utils_1.default(404, 'Tutores not found', null);
            }
            return tutoresList;
        });
        this.getById = (req) => __awaiter(this, void 0, void 0, function* () {
            const tutor = yield Tutor_model_1.default.find({ id: req.params.id });
            if (!tutor) {
                throw new HttpException_utils_1.default(404, 'Tutor not found', null);
            }
            return tutor;
        });
        this.getAllWithPareja = () => __awaiter(this, void 0, void 0, function* () {
            const tutoresWithPareja = yield Tutor_model_1.default.getAllWithPareja();
            if (!tutoresWithPareja.length) {
                throw new HttpException_utils_1.default(404, 'Tutores not found', null);
            }
            return tutoresWithPareja;
        });
        this.getByIdWithPareja = (req) => __awaiter(this, void 0, void 0, function* () {
            const tutorWithPareja = yield Tutor_model_1.default.findWithPareja({ id: req.params.id });
            if (!tutorWithPareja) {
                throw new HttpException_utils_1.default(404, 'Tutor not found', null);
            }
            return tutorWithPareja;
        });
        this.create = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const resultP = new Array();
            const resultT = yield Tutor_model_1.default.create(req.body.tutor);
            if (!resultT) {
                throw new HttpException_utils_1.default(500, 'Something went wrong', null);
            }
            if (req.body.tutor.tiene_pareja) {
                resultP.push(yield this.addPareja(req.body.pareja));
            }
            return `Tutor was created ${resultP}`;
        });
        this.update = (req) => __awaiter(this, void 0, void 0, function* () {
            this.checkValidation(req);
            const resultT = yield Tutor_model_1.default.update(req.params.id, req.body.tutor);
            const resultP = new Array();
            if (!resultT) {
                throw new HttpException_utils_1.default(404, 'Something went wrong', null);
            }
            if (req.body.tutor.tiene_pareja) {
                resultP.push(yield this.addPareja(req.params.id));
                resultP.push(yield this.addPareja(req.body.pareja));
            }
            else {
                resultP.push(yield this.addPareja(req.params.id));
            }
            const { affectedRows, info } = resultT;
            const message = !affectedRows ? 'Tutor not found' :
                affectedRows ? 'Tutor update successfuly' : 'Update faild';
            return { message, info, resultP };
        });
        this.addPareja = (pareja) => __awaiter(this, void 0, void 0, function* () {
            const result = yield Pareja_model_1.default.create(pareja);
            if (!result) {
                throw new HttpException_utils_1.default(500, 'Something went wrong', null);
            }
            return `Add pareja ${pareja.firstName} ${pareja.lastName}`;
        });
        this.removePareja = (id) => __awaiter(this, void 0, void 0, function* () {
            const result = yield Pareja_model_1.default.delete(id);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Pareja not found', null);
            }
            return `Remove pareja`;
        });
        this.delete = (req) => __awaiter(this, void 0, void 0, function* () {
            const result = yield Tutor_model_1.default.delete(req.params.id);
            if (!result) {
                throw new HttpException_utils_1.default(404, 'Tutor not found', null);
            }
            return 'Tutor has been deleted';
        });
        this.checkValidation = (req) => __awaiter(this, void 0, void 0, function* () {
            const errors = express_validator_1.validationResult(req);
            if (!errors.isEmpty()) {
                throw new HttpException_utils_1.default(400, 'Validation faild', errors);
            }
        });
    }
}
exports.default = new TutoresService();
//# sourceMappingURL=Tutores.service.js.map
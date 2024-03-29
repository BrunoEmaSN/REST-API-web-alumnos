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
Object.defineProperty(exports, "__esModule", { value: true });
const common_utils_1 = require("../utils/common.utils");
const query = require('../database/db-connection.js');
class AlumnoMateriaModel {
    constructor() {
        this.find = (params) => __awaiter(this, void 0, void 0, function* () {
            const sql = `CALL find_alumno_materia(?)`;
            const { values } = common_utils_1.multipleColumnSet(params);
            return yield query(sql, [...values]);
        });
        this.create = (params) => __awaiter(this, void 0, void 0, function* () {
            const { values } = common_utils_1.multipleColumnSet(params);
            const sql = `CALL add_alumno_materia(?, ?, ?)`;
            const result = query(sql, [...values]);
            const affectedRows = result ? result.affectedRows : 0;
            return affectedRows;
        });
        this.update = (id, params) => __awaiter(this, void 0, void 0, function* () {
            const { values } = common_utils_1.multipleColumnSet(params);
            const sql = `CALL edit_alumno_materia(?, ?)`;
            const result = yield query(sql, [id, ...values]);
            return result;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const sql = `CALL remove_alumno_materia(?)`;
            const result = yield query(sql, [id]);
            const affectedRows = result ? result.affectedRows : 0;
            return affectedRows;
        });
    }
}
exports.default = new AlumnoMateriaModel();
//# sourceMappingURL=AlumnoMateria.model.js.map
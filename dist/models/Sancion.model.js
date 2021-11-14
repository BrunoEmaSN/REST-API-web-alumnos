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
class SancionModel {
    constructor() {
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const sql = `CALL get_all_sanciones()`;
            return yield query(sql);
        });
        this.find = (params) => __awaiter(this, void 0, void 0, function* () {
            const sql = `CALL find_sancion(?)`;
            const { values } = common_utils_1.multipleColumnSet(params);
            return yield query(sql, [...values]);
        });
        this.update = (id, params) => __awaiter(this, void 0, void 0, function* () {
            const { values } = common_utils_1.multipleColumnSet(params);
            const sql = `CALL edit_sancion(?, ?, ?, ?, ?, ?)`;
            const result = yield query(sql, [id, ...values]);
            return result;
        });
    }
}
exports.default = new SancionModel();
//# sourceMappingURL=Sancion.model.js.map
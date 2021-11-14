import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class PeriodoModel {
    getAll = async (params: any) => {
        const sql       = `CALL get_all_periodos(?)`;
        const {values}  = multipleColumnSet(params);
        return await query(sql, [...values]);
    }

    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params)
        const sql           = `CALL add_periodo(?, ?, ?, ?)`;
        const result        = query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;
        return  affectedRows;
    }
}

export default new PeriodoModel();
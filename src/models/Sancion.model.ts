import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class SancionModel {
    getAll = async () => {
        const sql = `CALL get_all_sanciones()`;
        return await query(sql);
    }

    find = async (params: any) => {
        const sql       = `CALL find_sancion(?)`;
        const {values}  = multipleColumnSet(params);
        const result = await query(sql, [...values]);

        return result;
    }

    update = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_sancion(?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);

        return result;
    }
}

export default new SancionModel();
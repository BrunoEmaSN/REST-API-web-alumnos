import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class CalificacionModel {
    getAll = async () => {
        const sql = `CALL get_all_calificaciones()`;
        return await query(sql);
    }

    find = async (params: any) => {
        const sql       = `CALL find_calificacion(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    update = async (id: any, params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_calificacion(?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }
}

export default new CalificacionModel();
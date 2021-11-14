import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');


class ClaseModel{
    getAll = async () => {
        const sql = `CALL get_all_clases()`;
        return await query(sql);
    }

    find = async (params: any) => {
        const sql       = `CALL find_clase(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_clase(?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    update = async (id: any, params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_clase(?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id: any) => {
        const sql           = `CALL remove_clase(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

export default new ClaseModel();
import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class DocenteModel {
    getAll = async () => {
        const sql = `CALL get_all_docentes()`;
        return await query(sql);
    }

    find = async (params: any) => {
        const sql       = `CALL find_docente(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_docente(?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    update = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}  = multipleColumnSet(params);
        const sql       = `CALL edit_docente(?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result    = await query(sql, [...values]);

        return result;
    }

    delete = async (id: any) => {
        const sql           = `CALL remove_docente(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

export default new DocenteModel();
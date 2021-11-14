import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class TutorModel {
    getAll = async () => {
        const sql = `CALL get_all_tutores()`;
        return await query(sql);
    }

    find = async (params: any) => {
        const {values}  = multipleColumnSet(params);
        const sql       = `CALL find_tutor(?)`;
        
        return await query(sql, [...values]);
    }

    getAllWithPareja = async () => {
        const sql = `CALL get_all_tutores_parejas()`;
        return await query(sql);
    }

    findWithPareja = async (params: any) => {
        const {values}  = multipleColumnSet(params);
        const sql       = `CALL find_tutor_pareja(?)`;

        return await query(sql, [...values]);
    }

    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_tutor(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id: any, params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_tutor(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return result;
    }

    delete = async (id: any) => {
        const sql           = `CALL remove_tutor(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

export default new TutorModel();
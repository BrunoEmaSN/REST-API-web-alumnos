import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class AulaModel {
    getAll = async () => {
        const sql = 'CALL get_all_aulas()';
        return await query(sql, []);
    }

    find = async (params: any) => {
        const sql       = 'CALL find_aula(?)';
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_aula(?, ?)`;
        const result        = await query(sql, [...values]);

        return result;
    }

    update = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet( params );
        const sql           = 'CALL edit_aula(?, ?, ?)';
        const result        = await query(sql, [ ...values ]);
        
        return result;
    }

    delete = async (id: any) => {
        const sql           = 'CALL remove_aula(?)';
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

export default new AulaModel();
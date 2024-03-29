import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class AlumnoMateriaModel{
    find = async (params: any) => {
        const sql         = `CALL find_alumno_materia(?)`;
        const { values }  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}     = multipleColumnSet(params);
        const sql          = `CALL add_alumno_materia(?, ?, ?)`;
        const result: any  = query(sql, [...values]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id: any, params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const { values }  = multipleColumnSet(params);
        const sql       = `CALL edit_alumno_materia(?, ?)`;
        const result    = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id: any) => {
        const sql          = `CALL remove_alumno_materia(?)`;
        const result: any  = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

export default new AlumnoMateriaModel();
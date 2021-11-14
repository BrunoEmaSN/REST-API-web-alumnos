import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class AlumnoTutorModel{
    getAll = async (params: any) => {
        const sql: string = `CALL get_all_alumno_tutores(?)`;
        const { values }  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}     = multipleColumnSet(params);
        const sql          = `CALL add_alumno_tutor(?, ?, ?)`;
        const result: any  = await query(sql, [...values]);
        const affectedRows = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    delete = async (id: any) => {
        const sql          = `CALL remove_alumno_tutor(?)`;
        const result: any  = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;
        
        return affectedRows;
    }
}

export default new AlumnoTutorModel();
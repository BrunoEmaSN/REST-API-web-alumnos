import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class AlumnoModel {
    getAll = async () => {
        const sql = `CALL get_all_alumnos()`;
        return await query(sql, []);
    }

    findAllAlumnos = async (params: any) => {
        const sql         = `CALL find_all_alumnos(?)`;
        const { values }  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    find = async (params: any) => {
        const sql           = `CALL find_alumno(?)`;
        const { values }  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_alumno(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result: any   = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id: any, params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}  = multipleColumnSet(params);
        const sql       = `CALL edit_alumno(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result    = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id: any) => {
        const sql           = `CALL remove_alumno(?)`;
        const result: any   = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;
        
        return affectedRows;
    }
}

export default new AlumnoModel();
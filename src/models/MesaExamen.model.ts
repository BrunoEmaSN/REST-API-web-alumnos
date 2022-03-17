import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class MesaExamenModel{
    getAll = async () => {
        const sql = `CALL get_all_mesas_examen_maestro()`;
        return await query(sql);
    }

    find = async (params: any) => {
        const sql       = `CALL find_mesa_examen_novedad(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    createMaestro = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_mesa_examen_maestro(?, ?)`;
        const result        = await query(sql, [...values]);

        return result[0][0];
    }

    createNovedad = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_mesa_examen_novedad(?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    updateMaestro = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values} = multipleColumnSet(params);
        const sql      = `CALL edit_mesa_examen_maestro(?, ?, ?)`;
        const result   = await query(sql, [...values]);
        
        return result;
    }

    deleteMaestro = async (id: any) => {
        const sql    = `CALL remove_mesa_examen_maestro(?)`;
        const result = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    deleteNovedad = async (id: any) => {
        const sql = `CALL remove_mesa_examen_novedad(?)`;
        const result = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

export default new MesaExamenModel();
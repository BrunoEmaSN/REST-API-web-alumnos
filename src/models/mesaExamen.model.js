const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class MesaExamenModel{
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql = `CALL get_all_mesas_examen_maestro()`;
            return await query(sql);
        }
        const sql       = `CALL find_mesa_examen_novedad(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    createMaestro = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_mesa_examen_maestro(?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    createNovedad = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_mesa_examen_novedad(?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    updateMaestro = async (id, params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_mesa_examen_maestro(?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);
        
        return result;
    }

    updateNovedad = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_mesa_examen_novedad(?, ?, ?, ?, ?, ?, ?, ?)`;
        console.log(sql);
        const result        = await query(sql, [...values]);
        return result;
    }

    delete = async (id) => {
        const sql = `CALL remove_mesa_examen(?)`;
        const result = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new MesaExamenModel();

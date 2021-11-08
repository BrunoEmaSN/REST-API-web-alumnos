const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class DocenteModel {
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql = `CALL get_all_docentes()`;
            return await query(sql);
        }
        const sql       = `CALL find_docente(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_docente(?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    createDocenteMateria = async (params) => {
        const {values}     = multipleColumnSet(params);
        const sql          = `CALL add_docente_materia(?, ?)`;
        const result       = await query(sql, [...values]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id, params) => {
        const {values}  = multipleColumnSet(params);
        const sql       = `CALL edit_docente(?, ?, ?, ?, ?, ?, ?, ?, ?, ? , ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result    = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id) => {
        const sql           = `CALL remove_docente(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    deleteDocenteMateria = async (id) => {
        const sql          = `CALL remove_docente_materia(?)`;
        const result       = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new DocenteModel;

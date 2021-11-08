const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class MateriaModel {
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql = `CALL get_all_materias()`;
            return await query(sql);
        }
        const sql       = `CALL find_materia(?)`;
        const {values}  = multipleColumnSet(params);
        
        return await query(sql, [...values]);
    }

    create = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_materia(?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id, params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_materia(?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id) => {
        const sql           = `CALL remove_materia(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new MateriaModel;

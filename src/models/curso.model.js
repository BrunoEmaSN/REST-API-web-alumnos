const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class CursoModel {
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            let sql = 'CALL get_all_cursos()';
            return await query(sql);
        }
        const sql       = 'CALL find_curso(?)';
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = 'CALL add_curso(?, ?, ?, ?, ?)';
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id, params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_curso(?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id) => {
        const sql           = 'CALL remove_curso(?)';
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new CursoModel;

const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class TutorModel {
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql = `CALL get_all_tutores()`;
            return await query(sql);
        }
        const {values}  = multipleColumnSet(params);
        const sql       = `CALL find_tutor(?)`;
        
        return await query(sql, [...values]);
    }

    findWithPareja = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql = `CALL get_all_tutores_parejas()`;
            return await query(sql);
        }
        const {values}  = multipleColumnSet(params);
        const sql       = `CALL find_tutor_pareja(?)`;

        return await query(sql, [...values]);
    }

    create = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_tutor(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id, params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_tutor(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return result;
    }

    delete = async (id) => {
        const sql           = `CALL remove_tutor(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new TutorModel;

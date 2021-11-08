const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class ClaseModel{
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql = `CALL get_all_clases()`;
            return await query(sql);
        }
        const sql       = `CALL find_clase(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    create = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_clase(?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    update = async (id, params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_clase(?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id) => {
        const sql           = `CALL remove_clase(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new ClaseModel();

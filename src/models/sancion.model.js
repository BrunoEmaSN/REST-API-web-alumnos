const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class SancionModel {
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql = `CALL get_all_sanciones()`;
            return await query(sql);
        }
        const sql       = `CALL find_sancion(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    update = async (id, params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_sancion(?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }
}

module.exports = new SancionModel;

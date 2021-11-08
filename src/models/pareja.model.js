const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class ParejaModel {
    create = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_pareja(?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    delete = async (id) => {
        const sql           = `CALL remove_pareja(?)`
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new ParejaModel();

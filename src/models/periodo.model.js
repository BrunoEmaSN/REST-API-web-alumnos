const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class PeriodoModel {
    find = async (params = {}) => {
        const sql       = `CALL get_all_periodos(?)`;
        const {values}  = multipleColumnSet(params);
        return await query(sql, [...values]);
    }

    create = async (params) => {
        const {values}      = multipleColumnSet(params)
        const sql           = `CALL add_periodo(?, ?, ?, ?)`;
        const result        = query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;
        return  affectedRows;
    }
}

module.exports = new PeriodoModel;

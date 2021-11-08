const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class CalificacionModel {
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql = `CALL get_all_calificaciones()`;
            return await query(sql);
        }
        const sql       = `CALL find_calificacion(?)`;
        const {values}  = multipleColumnSet(params);

        return await query(sql, [...values]);
    }

    update = async (id, params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_calificacion(?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }

}

module.exports = new CalificacionModel;

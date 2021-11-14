import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');

class ParejaModel {
    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_pareja(?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    delete = async (id: any) => {
        const sql           = `CALL remove_pareja(?)`
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

export default new ParejaModel();
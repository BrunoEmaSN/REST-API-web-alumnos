import { multipleColumnSet } from "../utils/common.utils";
const query = require('../database/db-connection.js');
const Role  = require('../utils/userRoles.utils');

class UserModel {
    getAll = async () => {
        const sql    = `CALL get_all_users()`;
        const result = await query(sql);
        return result[0];
    }

    getById = async (params: any) => {
        const sql    = `CALL find_user_id(?)`;
        const {values} = multipleColumnSet(params);
        const result = await query(sql, [...values]);
        return result[0][0];
    }

    find = async (params: any) => {
        const sql       = `CALL find_username(?)`;
        const {values}  = multipleColumnSet(params);
        const result    = await query(sql, [...values]);

        return result[0][0];
    }
    
    create = async (params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const sql           = `CALL add_user(?, ?, ?, ?)`;
        const {values}  = multipleColumnSet(params);
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id: any, params: { [s: string]: unknown; } | ArrayLike<unknown>) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_user(?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id: any) => {
        const sql           = `CALL remove_user(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

export default new UserModel();
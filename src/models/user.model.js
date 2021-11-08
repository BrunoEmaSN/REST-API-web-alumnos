const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');
const Role                  = require('../utils/userRoles.utils');

class UserModel {
    find = async (params = {}) => {
        if(!Object.keys(params).length){
            const sql    = `CALL get_all_users()`;
            const result = await query(sql);
            return result[0];
        }
        if(params.id != undefined){
            const sql    = `CALL find_user_id(?)`;
            const {values} = multipleColumnSet(params);
            const result = await query(sql, [...values]);
            return result[0][0];
        }
        const sql       = `CALL find_username(?)`;
        const {values}  = multipleColumnSet(params);
        const result    = await query(sql, [...values]);

        return result[0][0];
    }
    
    create = async ({id, username, password, rol = Role.SuperUser}) => {
        const sql           = `CALL add_user(?, ?, ?, ?)`;
        const result        = await query(sql, [id, username, password, rol]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id, params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL edit_user(?, ?, ?, ?)`;
        const result        = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id) => {
        const sql           = `CALL remove_user(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new UserModel;

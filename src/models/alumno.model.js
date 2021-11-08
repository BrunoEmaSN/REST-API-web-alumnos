const query                 = require('../database/db-connection');
const { multipleColumnSet } = require('../utils/common.utils');

class AlumnoModel {
    find = async (params = {}) => {
        let sql = ``;
        if(!Object.keys(params).length){
            sql += `CALL get_all_alumnos()`;
            return await query(sql);
        }
        if(params.curso_id !== undefined){
            sql += `CALL find_all_alumnos(?)`;
        }
        if(params.id != undefined){
            sql += `CALL find_alumno(?)`;
        }
        const {values}  = multipleColumnSet(params);

        return await query(sql, [parseInt(values)]);
    }

    create = async (params) => {
        const {values}      = multipleColumnSet(params);
        const sql           = `CALL add_alumno(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result        = await query(sql, [...values]);
        const affectedRows  = result ? result.affectedRows : 0;

        return affectedRows;
    }

    createAlumnoTutor = async (params) => {
        const {values}     = multipleColumnSet(params);
        const sql          = `CALL add_alumno_tutor(?, ?, ?)`;
        const result       = await query(sql, [...values]);
        const affectedRows = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    createAlumnoMateria = async (params) => {
        const {values}     = multipleColumnSet(params);
        const sql          = `CALL add_alumno_materia(?, ?, ?)`;
        const result       = query(sql, [...values]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }

    update = async (id, params) => {
        const {values}  = multipleColumnSet(params);
        const sql       = `CALL edit_alumno(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        const result    = await query(sql, [id, ...values]);

        return result;
    }

    delete = async (id) => {
        const sql           = `CALL remove_alumno(?)`;
        const result        = await query(sql, [id]);
        const affectedRows  = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    deleteAlumnoTutor = async (id) => {
        const sql          = `CALL remove_alumno_tutor(?)`;
        const result       = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;
        
        return affectedRows;
    }

    deleteAlumnoMateria = async (id) => {
        const sql = `CALL remove_alumno_materia(?)`;
        const result = await query(sql, [id]);
        const affectedRows = result ? result.affectedRows : 0;

        return affectedRows;
    }
}

module.exports = new AlumnoModel;

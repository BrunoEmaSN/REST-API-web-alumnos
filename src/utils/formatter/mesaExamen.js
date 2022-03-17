const moment = require("moment");

const maestroFormatter = ( maestro ) => {
    return {
        periodoId: maestro.periodo_id,
        descripcion: maestro.descripcion
    };
}

const novedadFormatter = ( novedad ) => {
    return {
        materiaId: novedad.materia_id,
        fecha: moment(novedad).format('yyyy-MM-DD'),
        llamado: novedad.llamado,
        examinador1: novedad.examinador1,
        examinador2: novedad.examinador2,
        examinador3: novedad.examinador3
    };
}

module.exports = { maestroFormatter, novedadFormatter }
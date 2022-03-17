const moment = require("moment");

const periodoFormatter = (periodo) => {
    return {
        fechaInicio: moment(periodo.fechaInicio).format('yyyy-MM-DD'),
        fechaFin: moment(periodo.fechaFin).format('yyyy-MM-DD'),
        descripcion: periodo.descripcionPeriodo,
        tipo: periodo.tipoPeriodo
    };
}

module.exports = periodoFormatter;
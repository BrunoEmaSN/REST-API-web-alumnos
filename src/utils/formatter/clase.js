const claseFormatter = ( clase ) => {
    return {
        docente: clase.docente,
        materia: clase.materia,
        periodo: clase.periodo,
        curso: clase.curso,
        dias: clase.dias,
        horarioInicio: clase.horarioInicio,
        horarioFin: clase.horarioFin
    }
}

module.exports = claseFormatter;
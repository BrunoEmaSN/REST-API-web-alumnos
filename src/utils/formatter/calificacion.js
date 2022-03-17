const calificacionFormatter = ( calificacion ) => {
    return {
        id: calificacion.id,
        alumno_id: calificacion.alumno_id,
        docente_id: calificacion.docente_id,
        materia_id: calificacion.materia_id,
        regimen: calificacion.regimen,
        etapa: calificacion.etapa,
        nota: calificacion.nota,
        descripcion: calificacion.descripcion
    };
}

module.exports = calificacionFormatter;
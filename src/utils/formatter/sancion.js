const sancionFormatter = (sancion) => {
    return {
        id: sancion.id,
        alumno: sancion.alumno,
        docente: sancion.docente,
        tipoSancion: sancion.tipoSancion,
        descripcion: sancion.descripcion,
        fecha: sancion.fecha
    }
}

module.exports = sancionFormatter;
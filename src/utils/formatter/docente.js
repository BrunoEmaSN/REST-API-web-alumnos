const docenteFormatter = ( docente ) => {
    return {
        documento: docente.documento,
        tipoDocumento: docente.tipoDocumento,
        nombre: docente.nombre,
        apellido: docente.apellido,
        fechaNacimiento: docente.fechaNacimiento,
        sexo: docente.sexo,
        lugarNacimiento: docente.lugarNacimiento,
        telefonoFijo: docente.telefonoFijo,
        telefonoMovil: docente.telefonoMovil,
        domicilio: docente.domicilio,
        numero: docente.numero,
        departamento: docente.departamento,
        piso: docente.piso,

        fechaAgregado: docente.fechaAgregado,
        sede: docente.sede,
        titulo: docente.titulo,
        cuit: docente.cuit,
        subencionado: docente.subencionado,
        contratado: docente.contratado,
        monotributista: docente.monotributista,
        observaciones: docente.observaciones
    };
}

module.exports = docenteFormatter;
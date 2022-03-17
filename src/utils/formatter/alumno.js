const alumnoFormatter = ( alumno ) => {
    return {
        nombre: alumno.nombre,
        apellido: alumno.apellido,
        tipoDocumento: alumno.tipoDocumento,
        documento: parseInt(alumno.documento),
        fechaNacimiento: alumno.fechaNacimiento,
        sexo: alumno.sexo,
        lugarNacimiento: alumno.lugarNacimiento,
        
        telefonoFijo: parseInt(alumno.telefonoFijo),
        telefonoMovil: parseInt(alumno.telefonoMovil),
        domicilio: alumno.domicilio,
        numero: parseInt(alumno.numero),
        departamento: alumno.departamento,
        piso: parseInt(alumno.piso),

        fechaAgregado: alumno.fechaAgregado,
        partidaNacimiento: alumno.partidaNacimiento,
        fotocopiaDNI: alumno.fotocopiaDNI,
        fotocopiaCUIL: alumno.fotocopiaCUIL,
        foto4x4: alumno.foto4x4,
        contrato: alumno.contrato,
        observaciones: alumno.observaciones,
        condicion: alumno.condicion,
        cursoId: alumno.cursoId,
    };
}

module.exports = alumnoFormatter;
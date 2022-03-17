const tutorFormatter = ( tutor ) => {
    return {
        documento: tutor.documento,
        tipoDocumento: tutor.tipoDocumento,
        nombre: tutor.nombre,
        apellido: tutor.apellido,
        fechaNacimiento: tutor.fechaNacimiento,
        sexo: tutor.sexo,
        lugarNacimiento: tutor.lugarNacimiento,
        telefonoFijo: tutor.telefonoFijo,
        telefonoMovil: tutor.telefonoMovil,
        domicilio: tutor.domicilio,
        numero: tutor.numero,
        departamento: tutor.departamento,
        piso: tutor.piso,
        nivelAcademico: tutor.nivelAcademico,
        situacionAcademica: tutor.situacionAcademica,
        profesion: tutor.profesion,
        ocupacion: tutor.ocupacion,
        tienePareja: tutor.tienePareja,
        telefonoLaboral: tutor.telefonoLaboral
    };
}

const parejaFormatter = ( tutor ) => {
    return {
        id: tutor.documento,
        nombre: tutor.pareja.nombrePareja,
        apellido: tutor.pareja.apellidoPareja,
        dni: tutor.pareja.dniPareja,
        telefonoFijo: tutor.pareja.telefonoFijoPareja,
        telefonoMovil: tutor.pareja.telefonoMovilPareja
    }
}

module.exports = { tutorFormatter, parejaFormatter };
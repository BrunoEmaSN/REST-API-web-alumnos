const materiaFormatter = (materia) => {
    return {
        id: materia.id,
        descripcion: materia.descripcion,
        regimen: materia.regimen,
        planEstudio: materia.planEstudio
    };
}

module.exports = materiaFormatter;
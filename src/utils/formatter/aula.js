const aulaFormatter = ( aula ) => {
    return {
        id: aula.id,
        descripcion: aula.descripcion,
        capacidad: aula.capacidad
    };
}

module.exports = aulaFormatter;
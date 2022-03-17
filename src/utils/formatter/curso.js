const cursoFormatter = ( curso ) => {
    return {
        id: curso.id,
        aulaId: curso.aula,
        nivel: curso.nivel,
        turno: curso.turno,
        gradoAno: curso.gradoAno,
        division: curso.division 
    };
}

module.exports = cursoFormatter;
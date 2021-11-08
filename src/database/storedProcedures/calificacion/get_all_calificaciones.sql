CREATE PROCEDURE `get_all_calificaciones` ()
BEGIN
	SELECT
		*
	FROM
		calificaciones AS c
	INNER JOIN
		alumnos AS a ON a.id = c.alumno_id
	INNER JOIN
		docentes AS d ON d.id = c.docente_id
	INNER JOIN
		materias AS m ON m.id = c.materia_id;
END

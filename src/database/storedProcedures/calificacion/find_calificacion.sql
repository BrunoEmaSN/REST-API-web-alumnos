CREATE DEFINER=`root`@`localhost` PROCEDURE `find_calificacion`(
	id INT UNSIGNED
)
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
		materias AS m ON m.id = c.materia_id
	WHERE c.id = id;
END
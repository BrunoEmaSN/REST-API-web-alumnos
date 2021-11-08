CREATE PROCEDURE `get_all_sanciones` ()
BEGIN
	SELECT
		*
	FROM
		sanciones AS s
	INNER JOIN
		alumnos AS a ON a.id = s.alumno_id
	INNER JOIN
		docentes AS d ON d.id = s.docente_id;
END

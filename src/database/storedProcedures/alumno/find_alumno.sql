CREATE PROCEDURE `find_alumno` (
	id INT(11) UNSIGNED
)
BEGIN
	SELECT
		*
	FROM
		alumnos AS a
	INNER JOIN
		datos_personales AS dp ON dp.documento = a.id
	WHERE a.id = id;
END

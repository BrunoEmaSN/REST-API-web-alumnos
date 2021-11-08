CREATE PROCEDURE `get_all_alumnos` ()
BEGIN
	SELECT
		*
	FROM
		alumnos AS a
	INNER JOIN
		datos_personales AS dp ON dp.documento = a.id;
END

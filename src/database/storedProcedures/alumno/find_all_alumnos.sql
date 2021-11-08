CREATE DEFINER=`root`@`localhost` PROCEDURE `find_all_alumnos`(
	curso_id INT UNSIGNED
)
BEGIN
	SELECT
		*
	FROM
		alumnos AS a
	INNER JOIN
		datos_personales AS dp ON dp.documento = a.id
	WHERE a.curso_id = curso_id;
END
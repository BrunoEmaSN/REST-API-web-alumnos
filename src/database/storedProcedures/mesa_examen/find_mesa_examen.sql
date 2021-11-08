CREATE DEFINER=`root`@`localhost` PROCEDURE `find_mesa_examen_novedad`(
	id INT UNSIGNED
)
BEGIN
	SELECT
		*
	FROM
		mesa_examen_novedad AS mn
	INNER JOIN
		materias AS m ON m.id = mn.materia_id
	WHERE
		maestro_id = id;
END
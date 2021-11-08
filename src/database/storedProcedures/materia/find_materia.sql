CREATE PROCEDURE `find_materia` (
	id INT UNSIGNED
)
BEGIN
	SELECT
		*
	FROM
		materias
	WHERE
		id = id;
END

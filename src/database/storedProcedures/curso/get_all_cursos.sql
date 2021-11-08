CREATE PROCEDURE `get_all_cursos` ()
BEGIN
	SELECT
		*
	FROM
		cursos AS c
	INNER JOIN
		aulas AS a ON a.id = c.aula_id;
END

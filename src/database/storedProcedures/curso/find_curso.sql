CREATE DEFINER=`root`@`localhost` PROCEDURE `find_curso`(
	id INT(2) UNSIGNED
)
BEGIN
	SELECT
		*
	FROM
		cursos AS c
	INNER JOIN
		aulas AS a ON a.id = c.aula_id
	WHERE c.id = id;
END
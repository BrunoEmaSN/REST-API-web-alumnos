CREATE PROCEDURE `find_clase` (
	id INT UNSIGNED
)
BEGIN
	SELECT
		*
	FROM
		clases AS c
	INNER JOIN
		docentes AS d ON d.id = c.docente_id
	INNER JOIN
		materias AS m ON m.id = c.materia_id
	INNER JOIN
		periodos AS p ON p.id = c.periodo_id
	INNER JOIN
		cursos AS cu ON cu.id = c.curso_id
	WHERE c.id = id;
END

CREATE PROCEDURE `find_tutor_pareja` (
	id INT(11)
)
BEGIN
	SELECT
		*
	FROM
		tutores AS t
	INNER JOIN
		datos_personales AS dp ON dp.documento = t.id
	INNER JOIN
		pareja AS p ON p.id = t.id
	WHERE
		t.id = id;
END

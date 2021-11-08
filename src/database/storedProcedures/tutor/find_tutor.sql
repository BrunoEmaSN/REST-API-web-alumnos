CREATE PROCEDURE `find_tutor` (
	id INT(11)
)
BEGIN
	SELECT
		*
	FROM
		tutores AS t
	INNER JOIN
		datos_personales AS dp ON dp.documento = t.id
	WHERE
		t.id = id;
END

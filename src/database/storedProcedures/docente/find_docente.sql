CREATE PROCEDURE `find_docente` (
	id INT(11) UNSIGNED
)
BEGIN
	SELECT
		*
	FROM
		docentes AS d
	INNER JOIN
		datos_personales AS dp ON dp.documento = d.id
	WHERE
		d.id = id;
END

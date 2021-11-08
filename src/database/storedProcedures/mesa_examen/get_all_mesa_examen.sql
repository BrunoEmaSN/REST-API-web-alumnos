CREATE PROCEDURE `get_all_mesas_examen_maestro` ()
BEGIN
	SELECT
		*
	FROM
		mesa_examen_maestro AS mm
	INNER JOIN
		periodos AS p ON p.id = mm.periodo_id;
END

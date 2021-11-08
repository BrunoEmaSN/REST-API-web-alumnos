CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_tutores_parejas`()
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
		t.tiene_pareja = TRUE;
END
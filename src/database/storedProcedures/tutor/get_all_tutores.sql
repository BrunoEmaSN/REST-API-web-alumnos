CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_tutores`()
BEGIN
	SELECT 
		*
	FROM
		tutores AS t
	INNER JOIN
		datos_personales AS dp ON dp.documento = t.id;
END
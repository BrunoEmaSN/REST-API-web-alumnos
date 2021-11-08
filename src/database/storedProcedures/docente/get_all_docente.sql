CREATE PROCEDURE `get_all_docentes` ()
BEGIN
	SELECT
		*
    FROM 
		docentes AS d
	INNER JOIN
		datos_personales AS dp ON dp.documento = d.id;
END

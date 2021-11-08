CREATE PROCEDURE `get_all_periodos` (
	tipo VARCHAR(13)
)
BEGIN
	SELECT * FROM periodos WHERE tipo = tipo;
END

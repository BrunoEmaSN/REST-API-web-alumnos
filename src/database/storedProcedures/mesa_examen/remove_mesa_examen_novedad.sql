CREATE PROCEDURE `remove_mesa_examen_novedad` (
	id	INT UNSIGNED
)
BEGIN
	DELETE FROM mesa_examen_novedad WHERE id = id;
END

CREATE PROCEDURE `edit_mesa_examen_maestro` (
	id 			INT UNSIGNED,
    periodo_id 	INT UNSIGNED,
    descripcion	VARCHAR(100)
)
BEGIN
	UPDATE mesa_examen_maestro SET
		periodo_id 	= periodo_id, 
        descripcion = descripcion
	WHERE
		id = id;
END

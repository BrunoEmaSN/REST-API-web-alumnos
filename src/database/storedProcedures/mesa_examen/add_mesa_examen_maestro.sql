CREATE DEFINER=`root`@`localhost` PROCEDURE `add_mesa_examen_maestro`(
	periodo_id 	INT UNSIGNED,
    descripcion VARCHAR(100)
)
BEGIN
	INSERT INTO mesa_examen_maestro
		(periodo_id, descripcion, estado)
	VALUES
		(periodo_id, descripcion, TRUE);
END
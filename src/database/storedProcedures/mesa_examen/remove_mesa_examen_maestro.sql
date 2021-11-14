CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_mesa_examen_maestro`(
	id INT UNSIGNED
)
BEGIN
	SET SQL_SAFE_UPDATES=0;
	UPDATE mesa_examen_maestro SET
		estado = FALSE
	WHERE
		id = id;
	SET SQL_SAFE_UPDATES=1;
END
CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_mesa_examen_novedad`(
	maestro_id	INT UNSIGNED
)
BEGIN
	DELETE FROM mesa_examen_novedad WHERE maestro_id = maestro_id;
END
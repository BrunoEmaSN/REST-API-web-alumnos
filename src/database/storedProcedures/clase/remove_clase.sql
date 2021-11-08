CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_clase`(
	id INT UNSIGNED
)
BEGIN
	UPDATE clases SET estado = FALSE WHERE id = id;
END
CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_aula`(
	id INT(2)
)
BEGIN
	UPDATE aulas SET estado = FALSE WHERE id = id;
END
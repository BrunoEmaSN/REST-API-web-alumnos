CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_curso`(
	id INT(2) UNSIGNED
)
BEGIN
	UPDATE cursos SET estado = FALSE WHERE id = id;
END
CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_alumno`(
	id INT(11) UNSIGNED
)
BEGIN
	UPDATE alumnos
    SET
		estado = FALSE
	WHERE id = id;
END
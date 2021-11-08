CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_docente`(
	id INT(11) UNSIGNED
)
BEGIN
	UPDATE docentes SET
		estado = FALSE
	WHERE
		id = id;
END
CREATE DEFINER=`root`@`localhost` PROCEDURE `remove_tutor`(
	id INT UNSIGNED
)
BEGIN
	UPDATE tutores SET
		estado = false
	WHERE
		id = id;
END
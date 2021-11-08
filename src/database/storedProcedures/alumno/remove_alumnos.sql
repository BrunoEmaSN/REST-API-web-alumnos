CREATE PROCEDURE `remove_alumnos` (
	id INT(11) UNSIGNED
)
BEGIN
	UPDATE alumnos
    SET
		estado = FALSE
	WHERE id = id;
END

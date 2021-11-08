CREATE PROCEDURE `remove_materia` (
	id INT UNSIGNED
)
BEGIN
	UPDATE materias SET
		estado = false
	WHERE
		id = id;
END

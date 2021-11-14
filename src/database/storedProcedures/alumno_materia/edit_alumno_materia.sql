CREATE PROCEDURE `edit_alumno_materia` (
	id          INT UNSIGNED,
	estado 		VARCHAR(11)
)
BEGIN
	UPDATE alumno_materia SET
		estado = estado
	WHERE
		id = id;
END

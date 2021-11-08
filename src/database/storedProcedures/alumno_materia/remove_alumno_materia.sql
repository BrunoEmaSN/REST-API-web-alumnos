CREATE PROCEDURE `remove_alumno_materia` (
	id INT UNSIGNED
)
BEGIN
	DELETE FROM alumno_materia WHERE id = id;
END

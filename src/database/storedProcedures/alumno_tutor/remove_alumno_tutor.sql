CREATE PROCEDURE `remove_alumno_tutor` (
	id INT UNSIGNED
)
BEGIN
	DELETE FROM alumno_tutor WHERE id = id;
END

CREATE PROCEDURE `find_alumno_materia` (
	id BIGINT UNSIGNED
)
BEGIN
	SELECT * FROM alumno_materia WHERE id = id;
END

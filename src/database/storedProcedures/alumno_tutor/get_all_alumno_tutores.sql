CREATE PROCEDURE `get_all_alumno_tutores` (
	alumno_id BIGINT UNSIGNED
)
BEGIN
	SELECT * FROM alumno_tutor WHERE alumno_id = alumno_id;
END

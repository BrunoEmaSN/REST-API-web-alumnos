CREATE PROCEDURE `add_alumno_materia` (
	alumno_id 	INT UNSIGNED,
    materia_id 	INT UNSIGNED,
    estado 		VARCHAR(11)
)
BEGIN
	INSERT INTO alumno_materia
		(alumno_id, materia_id, estado)
	VALUES
		(alumno_id, materia_id, estado);
END

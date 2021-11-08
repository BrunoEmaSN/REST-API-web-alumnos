CREATE PROCEDURE `add_docente_materia` (
	docente_id 	INT UNSIGNED,
    materia_id 	INT UNSIGNED
)
BEGIN
	INSERT INTO docente_materia
		(docente_id, materia_id)
	VALUES
		(docente_id, materia_id);
END

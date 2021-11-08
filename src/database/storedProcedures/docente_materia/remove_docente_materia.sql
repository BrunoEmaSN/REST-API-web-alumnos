CREATE PROCEDURE `remove_docente_materia` (
	id INT UNSIGNED
)
BEGIN
	DELETE FROM docente_materia WHERE id = id;
END

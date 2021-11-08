CREATE PROCEDURE `add_clase` (
	docente_id      INT UNSIGNED,
    materia_id      INT UNSIGNED,
    periodo_id      INT UNSIGNED,
    curso_id        INT UNSIGNED,
    dias    	    VARCHAR(9),
    horario_inicio 	TIME,
    horario_fin     TIME
)
BEGIN
	INSERT INTO clases
		(docente_id, materia_id, periodo_id, curso_id, dias, horario_inicio, horario_fin)
	VALUES
		(docente_id, materia_id, periodo_id, curso_id, dias, horario_inicio, horario_fin);
END

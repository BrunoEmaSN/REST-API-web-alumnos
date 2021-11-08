CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_clase`(
	id 			    INT UNSIGNED,
    docente_id      INT UNSIGNED,
    materia_id      INT UNSIGNED,
    periodo_id      INT UNSIGNED,
    curso_id        INT UNSIGNED,
    dias    	    VARCHAR(9),
    horario_inicio  TIME,
    horario_fin     TIME
)
BEGIN
	UPDATE clases SET
		docente_id 	   = docente_id,
        materia_id 	   = materia_id,
        periodo_id 	   = periodo_id,
        curso_id 	   = curso_id,
        dias 		   = dias,
        horario_inicio = horario_inicio,
        horario_fin    = horario_fin
	WHERE
		id = id;
END
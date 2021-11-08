CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_curso`(
	id 			INT(2) UNSIGNED,
    aula_id 	INT(2) UNSIGNED,
    nivel		CHAR(2),
    turno 		CHAR(6),
    grado_ano 	INT(1) UNSIGNED,
    division 	CHAR(1)
)
BEGIN
	UPDATE cursos
    SET
		aula_id 	= aula_id,
        nivel       = nivel,
        turno 		= turno,
        grado_ano 	= grado_ano,
        division 	= division
	WHERE 
		id = id;
END
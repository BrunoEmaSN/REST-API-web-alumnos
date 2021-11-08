CREATE DEFINER=`root`@`localhost` PROCEDURE `add_curso`(
	aula_id 	INT(2) UNSIGNED,
    nivel 		CHAR(1),
    turno 		CHAR(6),
    grado_ano 	INT(1) UNSIGNED,
    division 	CHAR(1)
)
BEGIN
	INSERT INTO cursos
		(
			aula_id,
            nivel,
            turno,
            grado_ano,
            division,
            estado
		)
	VALUES
		(aula_id, nivel, turno, grado_ano, division, TRUE);
END
CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_mesa_examen_novedad`(
	id				INT UNSIGNED,
	maestro_id 		INT UNSIGNED,
    materia_id 		INT UNSIGNED,
    fecha 			DATE,
    llamado 		VARCHAR(7),
    examinador1 	VARCHAR(100),
    examinador2 	VARCHAR(100),
    examinador3 	VARCHAR(100)
)
BEGIN
	SET SQL_SAFE_UPDATES=0;
	UPDATE mesa_examen_novedad SET
        materia_id 	= materia_id,
        fecha		= fecha,
        llamado 	= llamado,
        examinador1 = examinador1,
        examinador2 = examinador2,
        examinador3 = examinador3
	WHERE
		maestro_id = maestro_id;
	SET SQL_SAFE_UPDATES=1;
END
CREATE DEFINER=`root`@`localhost` PROCEDURE `add_calificacion`(
	alumno_id 	INT(11) UNSIGNED,
	docente_id 	INT(11) UNSIGNED,
	materia_id 	INT UNSIGNED,
	regimen 	VARCHAR(13),
	etapa 		CHAR(1),
	nota 		CHAR(2),
	descripcion VARCHAR(100)
)
BEGIN
	INSERT INTO calificaciones
	(
		alumno_id,
        docente_id,
        materia_id,
        regimen,
        etapa,
        nota,
        descripcion
	)
    VALUES
    (
		alumno_id,
        docente_id,
        materia_id,
        regimen,
        etapa,
        nota,
        descripcion
    );
END
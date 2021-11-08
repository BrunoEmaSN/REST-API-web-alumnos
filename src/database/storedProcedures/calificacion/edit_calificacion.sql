CREATE PROCEDURE `edit_calificacion` (
	id			INT UNSIGNED,
	alumno_id 	INT(11) UNSIGNED,
	docente_id 	INT(11) UNSIGNED,
	materia_id 	INT UNSIGNED,
	regimen 	VARCHAR(13),
	etapa 		CHAR(1),
	nota 		CHAR(2),
	descripcion VARCHAR(100)
)
BEGIN
	UPDATE calificaciones SET
		alumno_id 	= alumno_id,
        docente_id 	= docente_id,
        materia_id 	= materia_id,
        regimen 	= regimen,
        etapa 		= etapa,
        nota 		= nota,
        descripcion = descripcion
	WHERE
		id = id;
END

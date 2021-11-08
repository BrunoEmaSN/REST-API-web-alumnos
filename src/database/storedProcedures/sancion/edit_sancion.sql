CREATE PROCEDURE `edit_sancion` (
	id 				INT UNSIGNED,
    alumno_id 		INT UNSIGNED,
    docente_id 		INT UNSIGNED,
    tipo_sancion 	VARCHAR(8),
    descripcion 	VARCHAR(100),
    fecha 			DATE
)
BEGIN
	UPDATE sanciones SET
		alumno_id 		= alumno_id,
        docente_id 		= docente_id,
        tipo_sancion 	= tipo_sancion,
        descripcion 	= descripcion,
        fecha 			= fecha
	WHERE
		id = id;
END

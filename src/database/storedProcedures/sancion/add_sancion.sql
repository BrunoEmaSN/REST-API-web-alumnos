CREATE PROCEDURE `add_sancion` (
    alumno_id 		INT UNSIGNED,
    docente_id 		INT UNSIGNED,
    tipo_sancion 	VARCHAR(8),
    descripcion 	VARCHAR(100),
    fecha 			DATE
)
BEGIN
	INSERT INTO sanciones
    (
		alumno_id,
        docente_id,
        tipo_sancion,
        descripcion,
        fecha
	)
    VALUES
    (
		alumno_id,
        docente_id,
        tipo_sancion,
        descripcion,
        fecha
	);
END

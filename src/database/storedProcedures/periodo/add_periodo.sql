CREATE PROCEDURE `add_periodo` (
	fecha_inicio 	DATE,
    fecha_fin 		DATE,
    descripcion 	VARCHAR(100),
    tipo			VARCHAR(13)
)
BEGIN
	INSERT INTO periodos
		(fecha_inicio, fecha_fin, descripcion, tipo)
	VALUES
		(fecha_inicio, fecha_fin, descripcion, tipo);
END

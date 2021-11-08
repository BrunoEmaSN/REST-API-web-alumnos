CREATE PROCEDURE `add_mesa_examen_novedad` (
	maestro_id 		INT UNSIGNED,
    materia_id 		INT UNSIGNED,
    fecha 			DATE,
    llamado 		VARCHAR(7),
    examinador1 	VARCHAR(100),
    examinador2 	VARCHAR(100),
    examinador3 	VARCHAR(100)
)
BEGIN
	INSERT INTO mesa_examen_novedad
		(
			maestro_id,
            materia_id,
            fecha,
            llamado,
            examinador1,
            examinador2,
            examinador3
        )
	VALUES
		(maestro_id,
            materia_id,
            fecha,
            llamado,
            examinador1,
            examinador2,
            examinador3
        );
END

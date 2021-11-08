CREATE PROCEDURE `add_alumno` (
	documento			INT(11) UNSIGNED,
    tipo_documento 		VARCHAR(4),
    nombre 				VARCHAR(50),
    apellido 			VARCHAR(50),
    fecha_nacimiento 	DATE,
    sexo 				VARCHAR(9),
    lugar_nacimiento 	VARCHAR(75),
    telefono_fijo 		VARCHAR(15),
    telefono_movil 		VARCHAR(15),
    domicilio 			VARCHAR(100),
    numero 				INT UNSIGNED,
    departamento 		VARCHAR(75),
    piso 				INT UNSIGNED,
    
    curso_id			INT(2) UNSIGNED,
    fecha_agregado 		DATE,
    partida_nacimiento 	BOOLEAN,
    fotocopia_dni 		BOOLEAN,
    fotocopia_cuil 		BOOLEAN,
    foto_4x4 			BOOLEAN,
    contrato 			BOOLEAN,
    observaciones 		VARCHAR(100),
    condicion 			VARCHAR(11)
)
BEGIN
	CALL add_datos_personales(
			documento,
            tipo_documento,
            nombre,
            apellido,
            fecha_nacimiento,
            sexo,
            lugar_nacimiento,
            telefono_fijo,
            telefono_movil,
            domicilio,
            numero,
            departamento,
            piso
	);
	INSERT INTO alumnos
		(
			id,
			curso_id,
			fecha_agregado,
			partida_nacimiento ,
			fotocopia_dni,
			fotocopia_cuil,
			foto_4x4,
			contrato,
			observaciones,
			condicion,
            estado
        )
	VALUES
		(
			documento,
			curso_id,
			fecha_agregado,
			partida_nacimiento ,
			fotocopia_dni,
			fotocopia_cuil,
			foto_4x4,
			contrato,
			observaciones,
			condicion,
            TRUE
        );
END

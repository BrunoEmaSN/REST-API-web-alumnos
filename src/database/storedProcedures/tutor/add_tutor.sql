CREATE PROCEDURE `add_tutor` (
	documento				INT(11) UNSIGNED,
    tipo_documento 			VARCHAR(4),
    nombre 					VARCHAR(50),
    apellido 				VARCHAR(50),
    fecha_nacimiento 		DATE,
    sexo 					VARCHAR(9),
    lugar_nacimiento 		VARCHAR(75),
    telefono_fijo 			VARCHAR(15),
    telefono_movil 			VARCHAR(15),
    domicilio 				VARCHAR(100),
    numero 					INT UNSIGNED,
    departamento 			VARCHAR(75),
    piso 					INT UNSIGNED,
    
    nivel_academico 		VARCHAR(13),
    situacion_academica 	VARCHAR(10),
    profesion 				VARCHAR(50),
    ocupacion 				VARCHAR(50),
    tiene_pareja 			BOOLEAN,
    telefono_laboral 		VARCHAR(15)
)
BEGIN
	CALL add_datos_personales
		(
			documento,
            tipo_documento,
            nombre,
            apellido,
            fecha_nacimiento,
            sexo,
            lugar_nacimienot,
            telefono_fijo,
            telefono_movil,
            domicilio,
            numero,
            departamento,
            piso
        );

	INSERT INTO tutores
		(
			id,
			nivel_academico,
			situacion_academica,
			profesion,
			ocupacion,
			tiene_pareja,
			telefono_laboral
        )
	VALUES
		(
			documento,
			nivel_academico,
			situacion_academica,
			profesion,
			ocupacion,
			tiene_pareja,
			telefono_laboral
        );
END

CREATE DEFINER=`root`@`localhost` PROCEDURE `add_docente`(
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
    
    fecha_agregado 		DATE,
    sede 				VARCHAR(50),
    titulo 				VARCHAR(50),
    cuit 				INT(11),
    subencionado 		BOOLEAN,
    contratado 			BOOLEAN,
    monotributista 		BOOLEAN,
    observaciones 		VARCHAR(100)
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
			lugar_nacimiento,
			telefono_fijo,
			telefono_movil,
			domicilio,
			numero,
			departamento,
			piso
        );
	INSERT INTO docente
		(
			id,
            fecha_agregado,
			sede,
			titulo,
			cuit,
			subencionado,
			contratado,
			monotributista,
			observaciones,
            estado
        )
	VALUES
		(
			documento,
            fecha_agregado,
			sede,
			titulo,
			cuit,
			subencionado,
			contratado,
			monotributista,
			observaciones,
            TRUE
		);
END
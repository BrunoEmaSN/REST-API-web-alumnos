CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_datos_personales`(
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
    piso 				INT UNSIGNED
)
BEGIN
	SET FOREIGN_KEY_CHECKS = 0;
	UPDATE datos_personales
    SET
		tipo_documento 		= tipo_documento,
		nombre 				= nombre,
		apellido 			= apellido,
		fecha_nacimiento 	= fecha_nacimiento,
		sexo 				= sexo,
		lugar_nacimiento 	= lugar_nacimiento,
		telefono_fijo 		= telefono_fijo,
		telefono_movil 		= telefono_movil,
		domicilio 			= domicilio,
		numero 				= numero,
		departamento 		= departamento,
		piso 				= piso
	WHERE documento = documento;
    SET FOREIGN_KEY_CHECKS = 1;
END
CREATE PROCEDURE `new_procedure` (
	id 					INT(11) UNSIGNED,
    nombre 				VARCHAR(50),
    apellido 			VARCHAR(50),
    dni 				INT(8) UNSIGNED,
    telefono_fijo 		INT(15),
    telefono_movil 		INT(15)
)
BEGIN
	INSERT INTO pareja
		(id, nombre, apellido, dni, telefono_fijo, telefono_movil)
	VALUES
		(id, nombre, apellido, dni, telefono_fijo, telefono_movil);
END

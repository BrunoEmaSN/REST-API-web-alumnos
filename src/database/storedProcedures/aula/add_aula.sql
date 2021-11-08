CREATE DEFINER=`root`@`localhost` PROCEDURE `add_aula`(
	descripcion VARCHAR(50),
    capacidad 	INT(2)
)
BEGIN
	INSERT INTO aulas
		(descripcion, capacidad, estado)
	VALUES
		(descripcion, capacidad, TRUE);
END
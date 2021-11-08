CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_aula`(
	id 			INT(2) UNSIGNED,
    descripcion VARCHAR(50),
    capacidad 	INT(2)
)
BEGIN
UPDATE aulas 
SET
	descripcion = descripcion,
    capacidad 	= capacidad
WHERE id = id;
END
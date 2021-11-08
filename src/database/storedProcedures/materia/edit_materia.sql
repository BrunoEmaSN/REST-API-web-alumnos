CREATE DEFINER=`root`@`localhost` PROCEDURE `edit_materia`(
	id 				INT UNSIGNED,
    descripcion 	VARCHAR(50),
    regimen 		VARCHAR(13), 
    plan_estudio 	VARCHAR(75)
)
BEGIN
	UPDATE materias SET
        descripcion 	= descripcion,
        regimen 		= regimen,
        plan_estudio 	= plan_estudio
	WHERE
		id = id;
END

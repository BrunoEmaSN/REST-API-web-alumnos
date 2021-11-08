CREATE DEFINER=`root`@`localhost` PROCEDURE `add_materia`(
    descripcion VARCHAR(50),
    regimen VARCHAR(13), 
    plan_estudio VARCHAR(75)
)
BEGIN
	INSERT INTO materias
		(descripcion, regimen, plan_estudio, estado)
	VALUES
		(descripcion, regimen, plan_estudio, TRUE);
END
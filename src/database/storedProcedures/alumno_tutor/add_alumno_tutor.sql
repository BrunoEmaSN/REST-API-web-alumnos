CREATE PROCEDURE `add_alumno_tutor` (
	alumno_id 	INT(11) UNSIGNED,
    tutor_id 	INT(11) UNSIGNED,
    parentesco 	VARCHAR(20)
)
BEGIN
	INSERT INTO alumno_tutor
		(alumno_id, tutor_id, parentesco)
	VALUES
		(alumno_id, tutro_id, parentesco);
END

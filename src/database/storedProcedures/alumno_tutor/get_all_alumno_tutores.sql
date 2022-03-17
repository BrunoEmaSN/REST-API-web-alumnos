CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_alumno_tutores`(
	alumno_id BIGINT UNSIGNED
)
BEGIN
	SELECT
		a_t.parentesco,
        d_p_t.documento,
        d_p_t.tipo_documento,
        d_p_t.nombre,
        d_p_t.apellido
	FROM
		alumno_tutor AS a_t
	INNER JOIN
		datos_personales AS d_p_t ON d_p_t.documento = a_t.tutor_id
	WHERE a_t.alumno_id = alumno_id;
END
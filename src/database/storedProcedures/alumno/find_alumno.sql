CREATE DEFINER=`root`@`localhost` PROCEDURE `find_alumno`(
	id INT(11) UNSIGNED
)
BEGIN
	SELECT
		d_p_a.documento AS documento,
		d_p_a.tipo_documento AS tipo_documento,
		d_p_a.nombre AS nombre,
		d_p_a.apellido AS apellido,
		d_p_a.fecha_nacimiento AS fecha_nacimiento,
		d_p_a.sexo AS sexo,
		d_p_a.lugar_nacimiento AS lugar_nacimiento,
		d_p_a.telefono_fijo AS telefono_fijo,
		d_p_a.telefono_movil AS telefono_movil,
		d_p_a.domicilio AS domicilio,
		d_p_a.numero AS numero,
		d_p_a.departamento AS departamento,
		d_p_a.piso AS piso,
		a.curso_id AS curso_id,
		a.fecha_agregado AS fecha_agregado,
		a.partida_nacimiento AS partida_nacimiento,
		a.fotocopia_dni AS fotocopia_dni,
		a.fotocopia_cuil AS fotocopia_cuil,
		a.foto_4x4 AS foto_4x4,
		a.contrato AS contrato,
		a.observaciones AS observaciones,
		a.condicion AS condicion,
		a.estado AS estado
	FROM
		alumnos AS a
	INNER JOIN
		datos_personales AS d_p_a ON d_p_a.documento = a.id
	WHERE a.id = id;
END
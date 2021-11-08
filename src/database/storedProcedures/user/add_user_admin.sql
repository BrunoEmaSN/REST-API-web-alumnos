CREATE DEFINER=`root`@`localhost` PROCEDURE `add_user_admin`()
BEGIN
	CALL add_datos_personales
		(
			1,
			'DNI',
			'Jonathan',
			'Joestar',
			'1868/01/01',
			'Masculino',
			'Inglaterra',
			'123456789012345',
			'123456789012345',
			'Mansion Joestar',
			1,
			NULL,
			NULL
		);
    CALL add_user
		(
			1,
            'jojo1',
            '$2a$08$z2c6CQooVo0Z.BfHUmRMpOBEbLq.Iu8HfNMW6h.tmh1AwAJhDyovq',
			'Admin'
		);
END
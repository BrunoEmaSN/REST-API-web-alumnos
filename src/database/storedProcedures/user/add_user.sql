CREATE PROCEDURE `add_user` (
	id         	INT(11) UNSIGNED, 
	username   	VARCHAR(25), 
	password   	CHAR(60),
	rol			VARCHAR(7)
)
BEGIN
	INSERT INTO users
		(id, username, password, rol)
	VALUES
		(id, username, password, rol);
END

CREATE PROCEDURE `find_user` (
	id INT(11) UNSIGNED,
    rol VARCHAR(8)
)
BEGIN
	SELECT
		*
	FROM
		users
	WHERE
		id = id AND rol = rol;
END

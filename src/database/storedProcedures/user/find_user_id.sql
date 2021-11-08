CREATE PROCEDURE `find_user_id` (
	id INT(11)
)
BEGIN
	SELECT
		*
	FROM
		users
	WHERE
		id = id;
END

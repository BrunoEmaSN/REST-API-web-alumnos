CREATE PROCEDURE `get_all_users` (
	id INT(11) UNSIGNED,
    rol VARCHAR(8)
)
BEGIN
	SELECT
		*
	FROM
		users;
END

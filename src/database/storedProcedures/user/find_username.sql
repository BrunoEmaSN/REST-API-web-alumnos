CREATE DEFINER=`root`@`localhost` PROCEDURE `find_username`(
	username VARCHAR(25)
)
BEGIN
	SELECT
		*
	FROM
		users
	WHERE
		username = username;
END
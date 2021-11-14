CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_users`()
BEGIN
	SELECT
		*
	FROM
		users;
END
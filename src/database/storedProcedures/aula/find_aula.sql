CREATE DEFINER=`root`@`localhost` PROCEDURE `find_aula`(
	id INT(2) UNSIGNED
)
BEGIN
	SELECT * FROM aulas WHERE id = id;
END
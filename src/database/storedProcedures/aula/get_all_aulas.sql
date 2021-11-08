CREATE DEFINER=`root`@`localhost` PROCEDURE `get_all_aulas`()
BEGIN
	SELECT * FROM aulas;
END
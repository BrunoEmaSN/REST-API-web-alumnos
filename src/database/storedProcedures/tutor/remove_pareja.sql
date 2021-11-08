CREATE PROCEDURE `remove_pareja` (
	id INT UNSIGNED
)
BEGIN
	DELETE FROM pareja WHERE id = id;
END

----CREATE/INSERT/POST----
CREATE TABLE todolist (
	id SERIAL PRIMARY KEY NOT NULL
	task VARCHAR(30),
	status VARCHAR(30));

	INSERT INTO todolist
	( task, status, complete)
	VALUES ( $1 , $2, $3),
	[ req.body.task, req.body.status , req.body.complete ]

----READ/SELECT/GET----
	SELECT * FROM todolist;

----UPDATE/PUT----
	UPDATE todolist
	SET complete=TRUE,
	status='complete'
	WHERE complete=FALSE AND id= + [req.body.id];

----DELETE----
	DELETE FROM todolist
	WHERE id= + [req.body.id];

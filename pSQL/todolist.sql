CREATE TABLE todolist (
	 id SERIAL PRIMARY KEY NOT NULL,
	 task VARCHAR(30),
	 status VARCHAR(30)
);

UPDATE todolist
SET complete=TRUE,
status='complete'
WHERE complete=FALSE AND id= + [req.body.id];

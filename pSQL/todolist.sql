CREATE TABLE todolist (
	 id SERIAL PRIMARY KEY NOT NULL,
	 task VARCHAR(30),
	 status VARCHAR(30)
);


UPDATE todolist 
SET status='complete'
WHERE complete ='TRUE';

Weekend Challenge 4: The To Do List
Hello Primers!

Welcome to your 4th weekend challenge! Full stack is pretty awesome huh? The idea in such a short time, you are able to spin up a full application architecture is pretty incredible. Also worth noting, there are only two weekend challenges left!

This weekend is all about showing us that you have a handle on each of the different parts of the full stack. For this weekends challenge, you are going to create a 'TO DO' application. This is the type of application that is very common to tackle when learning a new language, which makes it extremely valuable to work through for the first time, since chances are good that at some point in your career you will tackle this type of application, but in another language.

Here are the specific components for the challenge:

Create a front end experience that allows a user to create a task.
When the task is created, it should be stored inside of a database (SQL)
Whenever a task is created the front end should refresh to show all tasks that need to be completed.
Each task should have an option to 'Complete' or 'Delete'.
When a task is complete, its visual representation should change on the front end (for example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
Whether or not a task is complete should also be stored in the database.
Deleting a task should remove it both from the Front End as well as the Database.
Make sure that you also show us your best styling chops. We encourage you to try and write pure CSS rather than use Bootstrap.

We would recommend you spend some time thinking about how to approach this problem. Think through all the logic that will be needed prior to writing any code. Take your time, relax, remember that impostor syndrome is real, and that you are capable of knocking this out of the park!

Additionally, please include some way to recreate your initial database schema. This can be a .sql file with CREATE TABLE statements or you can create your schema automatically when your app loads.

HARD MODE
=========

In whatever fashion you would like, create an 'are you sure: yes / no' option when deleting a task. Once again, you can interrupt this however you would like.

PRO MODE
========

Adjust the logic so that completed tasks are brought to the bottom of the page, where the remaining tasks left to complete are brought to the top of the list.



Project Setup
=============

Required Technologies
=====================
[x]HTML
[x]CSS
[x]JavaScript
[]jQuery
[x]Node
[x]Express
[x]body-parser
[x]pSQL

Source and connect required files and technologies
==================================================
[x] Create project folder
[x] Connect public/style/style/style.css
[x] Connect scripts/client.js
[x] Connect scripts/vendors/jquery
[x] Create gitignore, git init, git add ., git commit, git push,
[x] npm init, npm install express,  body-parser, pg, jquery,

=================================================================================================


Project Tasks
=============

index.html
=========
[] Create a front end experience that allows a user to create a task
    [x] Create  public/views/index.html
    [x] Text input and Create Task button
    [x] display/outputDIV
    [] In output, need to reflect status of task and option to complete task or delete task

client.js
=========
    [x] Create scripts/client.js
    [] Connect userinput from index.html to client.js
    [] On button click trigger AJAX post call to send data from HTML input from client.js to app.js
    [] On button click trigger AJAX get call to retrieve data from app.js to client
    [] Output display data from client.js to DOM,

app.js
======
    [] Create server/app.js with requirements express, body-parser, pg, jquery,
    connectionString
    [] Connect client.js to app.js
    [] Create connection string to connect DB to app.js,
    [] Retrieve data from DB to app.js
    [] Retrieve data from app.js to client.js

postico
=======
[] When the task is created, it should be stored inside of a database (SQL)
    [] Create Table in postico (use pSql)
[] Whether or not a task is complete should also be stored in the database.
    [] In table include task complete column set to boolean
    [] Deleting a task should remove it both from the Front End as well as the Database.
       (connect delete button from index to client to app to db to perform Delete option of CRUD)

style.css
=========
[] Whenever a task is created the front end should refresh to show all tasks that need to be     
   completed.(on Create Task button click .hide, .show maybe?)
[] When a task is complete, its visual representation should change on the front end (for
   example, the background of the task container could change from gray to green, as well as the complete option 'checked off'. Each of these are accomplished in CSS, but will need to hook into logic to know whether or not the task is complete)
[] Make sure that you also show us your best styling chops. We encourage you to try and write    
   pure CSS rather than use Bootstrap.
=================================================================================================

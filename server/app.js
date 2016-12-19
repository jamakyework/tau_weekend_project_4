var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;
// create connection string to our database
var connectionString = 'postgres://localhost:5432/toDoListDB';

app.listen( port, function( req, res ){
  console.log( 'server listening on', port );
}); // end spin up server

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// static folder
app.use( express.static( 'public') );
app.use( express.static( 'style' ) );

// start createTask post
app.post( '/postTask', urlEncodedParser, function( req, res ){
  console.log( 'createTask url hit. req.body:', req.body );
  // do work here
  // connect to db
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    }
    else{
      console.log( 'connected to db' );
      // use wildcards to insert record
      client.query( 'INSERT INTO todolist ( task, status) values ( $1 , $2)', [ req.body.task, req.body.status ] );
      done();
      res.send( 'post sent' );
    }
  }); // end db connection
  }); // end createTask Post

  // start createTaskComplete post
  app.post( '/postTaskComplete', urlEncodedParser, function( req, res ){
    console.log( 'createTask url hit. req.body:', req.body );
    // do work here
    // connect to db
    pg.connect( connectionString, function( err, client, done ){
      if( err ){
        console.log( err );
      }
      else{
        console.log( 'connected to db' );
        // use wildcards to insert record
        client.query("UPDATE todolist SET status='complete' WHERE status='pending'");
        done();
        res.send( 'post sent' );
      }
    }); // end db connection
  }); // end createTaskComplete Post

  //start getTasks
  app.get( '/getTask', function( req, res ){
    console.log( 'getTask url hit' );
    // connect to db
    pg.connect( connectionString, function( err, client, done ){
      if( err ){
        console.log( err );
      } // end error
      else{
        console.log( 'connected to db' );
        var query = client.query( 'SELECT * FROM todolist') ;
        // array for tasks
        var allTasks = [];
        query.on( 'row', function( row ){
          // push task into new array
          allTasks.push( row );
        });
        query.on( 'end', function(){
          // finish the operation
          done();
          // send back data
          console.log( "in allTasks: ", allTasks );
          res.send( allTasks );
        });
      } // end no error
    }); // end db connect
  }); // end getTasks


// //completeTask button
//   app.put('/completeTask', urlEncodedParser, function(req, res) {
//       console.log('completing task', req.body);
//       //connecting to the database
//       pg.connect(connectionString, function(err, client, done) {
//           if (err) {
//               console.log('error in connecting to database');
//           } else {
//               client.query("UPDATE todolist SET status='complete' WHERE status='pending'");
//           } //end else statment
//       }); //end pg connect to database
//   }); //end complete task

// // need something that says UPDATE pending to complete or delete on button click

// // need something that says DELETE pending to delete or delete on button click
// DELETE FROM todolist WHERE

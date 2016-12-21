var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );
var urlEncodedParser = bodyParser.urlencoded( { extended: false } );
var port = process.env.PORT || 8080;
var connectionString = 'postgres://localhost:5432/toDoListDB'; // create connection string to our database

//start spin up
app.listen( port, function( req, res ){
  console.log( 'server listening on', port );
}); // end spin up

// base url
app.get( '/', function( req, res ){
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'views/index.html' ) );
}); // end base url

// static folders
app.use( express.static( 'public') );
app.use( express.static( 'style' ) );

// start postTask
app.post( '/postTask', urlEncodedParser, function( req, res ){
  console.log( 'postTask url hit. req.body:', req.body );
  // connect to db
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    }
    else{
      console.log( 'post connected to db' );
      // use wildcards to insert record
      client.query( 'INSERT INTO todolist ( task, status, complete) VALUES ( $1 , $2, $3)', [ req.body.task, req.body.status , req.body.complete ] );
      done();
      res.send( 'postTask sent' );
    }
  }); // end db connection
}); // end postTask

//start getTasks
app.get( '/getTask', function( req, res ){
  console.log( 'getTask url hit' );
  // connect to db
  pg.connect( connectionString, function( err, client, done ){
    if( err ){
      console.log( err );
    } // end error
    else{
      console.log( 'GET connected to db' );
      var query = client.query( 'SELECT * FROM todolist');
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

//start completeTask PUT request
app.put('/putTask', urlEncodedParser, function(req, res) {
  console.log('completing task:', req.body);
  console.log('whats in here?:', req.body.id);
  //connecting to the database
  pg.connect(connectionString, function(err, client, done) {
    if (err) {
      console.log('error in connecting to database');
    } else {
      console.log('PUT connected to db');
      var query= client.query("UPDATE todolist SET complete=TRUE, status='finished' WHERE complete=FALSE AND id=" + [req.body.id]);
      done();
      res.send(query);
    } //end else statment
  }); //end pg connect to database
}); //end completeTask PUT request

var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );
var urlEncodedParser = bodyParser.urlencoded( { extended: true } );
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
app.post( '/createTask', urlEncodedParser, function( req, res ){
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
      client.query( 'INSERT INTO todolist( task) values ( $1)', [ req.body.task] );
      done();
      res.send( 'woof' );
    }
  }); // end db connection

}); // end createTask Post

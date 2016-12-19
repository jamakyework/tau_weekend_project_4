//start $
$(document).ready(function() {
  console.log("$");

  $("#createTaskBtn").on('click', function(){
    console.log("createTask button clicked");

    //postTask function
    var postTask = function(){
      console.log( 'in postTask' );
      //assemble userInput
      var taskInputObj={
        task: $("#taskInput").val(),
      };//end taskInputObj
      //start ajax
      $.ajax({
        type: 'POST',
        url: '/createTask',
        data: taskInputObj,
        success: function( response ){
          console.log( 'back from post call:', response );
        }, // end success
        error: function(){
          console.log( 'error with ajax call...');
        } // end error
      }); // end ajax
    }; // end postTask
    postTask();
    getTask();
    //clear Input
    $("#taskInput").val("");
  });//end button click

  // getTask function
  var getTask = function(){
    console.log( 'in getTask' );
    $.ajax({
      type: 'GET',
      url: '/getTasks',
      success: function( response ){
        console.log( 'back from get call:', response );
        displayTask( response );
      }, // end success
      error: function(){
        console.log( 'error with ajax call...');
      } // end error
    }); // end ajax
  }; // end getTask

  var displayTask = function(tasks){
    // console.log( 'in displayGarage:', garage );
    // loop through the garage and display each car
    var outputText = '';
    for (var i = 0; i < tasks.length; i++) {
      outputText += '<p>' + tasks[i].task + '</p>';
    } // end for
    $( '#outputDiv' ).html( outputText );
};//end displayOnDom
});// end $

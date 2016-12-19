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
        status: "pending",
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
    console.log( 'in displayTask:', tasks );
    // loop through the todolist and display each task
    var outputText = '';
    for (var i = 0; i < tasks.length; i++) {
      outputText += '<p> Task:' + tasks[i].task + " " + "Status: " + tasks[i].status + '</p>';
    } // end for
    $( '#outputDiv' ).html( outputText );
};//end displayOnDom
});// end $

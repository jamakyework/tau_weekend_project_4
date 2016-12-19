//start $
$(document).ready(function() {
  console.log("$");

  $("#createTaskBtn").on('click', function(){
    console.log("createTaskBtn clicked");
    //run post
    postTask();
    // run get
    getTask();
    //clear Input
    $("#taskInput").val("");
  });//end button click

  $("#completeTaskBtn").on('click', function(){
    console.log("completeTaskBtn clicked");
    //run post
    postCompleteTask();
    // // run get
    // getCompleteTask();
  });//end button click

  $("#deleteTaskBtn").on('click', function(){
    console.log("deleteTaskBtn clicked");
    //run post
    postdeleteTaskBtn();
    // run get
    getdeleteTaskBtn();
  });//end button click

  //postTask function
  var postTask = function(){
    console.log('in postTask');
    //assemble userInput
    var taskInputObj={
      task: $("#taskInput").val(),
      status: "pending",
    };//end taskInputObj
    //start ajax
    $.ajax({
      type: 'POST',
      url: '/postTask',
      data: taskInputObj,
      success: function( response ){
        console.log( 'back from post call:', response );
      }, // end success
      error: function(){
        console.log( 'error with ajax call...');
      } // end error
    }); // end ajax
  }; // end postTask

  // getTask function
  var getTask = function(){
    console.log( 'in getTask' );
    $.ajax({
      type: 'GET',
      url: '/getTask',
      success: function( response ){
        console.log( 'back from get call:', response );
        console.log("in status: ", response[0].status);
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
      console.log("status loop: ", tasks[i].status);
      outputText += '<ul> Task:' + tasks[i].task + " " + "</ul><ul>Status: " + tasks[i].status + '</ul>'+'<button id="completeTaskBtn" type="button" name="completetask">Complete Task</button>' + '<button id="deleteTaskBtn" type="button" name="deleteTask">Delete Task</button>';

    } // end for
    $( '#outputDiv' ).html( outputText );
  };//end displayOnDom

  var postCompleteTask = function(){
    console.log('in postComplete');
    //assemble userInput
    var taskInputObj={
      status: "complete",
    };//end taskInputObj
    //start ajax
    $.ajax({
      type: 'POST',
      url: '/postTaskComplete',
      data: taskInputObj,
      success: function( response ){
        console.log( 'back from post call:', response );
      }, // end success
      error: function(){
        console.log( 'error with ajax call...');
      } // end error
    }); // end ajax
  }; // end postComplete

});// end $

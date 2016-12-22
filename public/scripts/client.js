//start $
$(document).ready(function(){
  console.log("$");

  //-----------Buttons------------------ //
  //start createTaskBtn click
  $("#createTaskBtn").on('click', function(){
    console.log("createTaskBtn clicked");
    //run post
    postTask();
    //run get
    getTask();
    //clear Input
    $("#taskInput").val("");
  });//end createTaskBtn click

  //start displayTaskBtn
  $("#displayTasksBtn").on('click',function() {
    console.log("displayTasksBtn clicked");
    getTask();
  });//end displayTaskBtn

  //start completeTaskBtn
  $('#outputDiv').on('click', '.complete-task-btn',function(){
    var id= $(this).attr('data');
    console.log("completeTaskBtn clicked", id);
    var objectToSend = {
      id: id
    };
    $.ajax({
      type:'PUT',
      url:'/putTask',
      data: objectToSend,
      success:function(response){
        console.log(response);
      }
    });//end ajax
    getTask();
  });//end completeTaskBtn

  //start deleteTaskBtn
  $('#outputDiv').on('click', '.delete-task-btn',function(){
    var id= $(this).attr('data');
    console.log("deleteTaskBtn clicked", id);
    var objectToSend = {
          id: id
        };
        $.ajax({
          type:'DELETE',
          url:'/deleteTask',
          data: objectToSend,
          success:function(response){
            console.log(response);
          }
        }); //end ajax
         getTask();
  }); //end deleteTaskBtn

  //start if
  if (response.length === 0) {
    $( '#outputDiv' ).html( "<p>No tasks in to do list</p>" );
  }
  else {
  displayTask( response );
}//end if
},// end success


  //--------------AJAX Calls-------------//
  //postTask (send user input)
  var postTask = function(){
    console.log('in postTask');
    //assemble userInput
    var taskInputObj={
      task: $("#taskInput").val(),
      status: $(".status-drop-down").val(),
      complete: false,
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

  //getTask (get back info from server/DB)
  var getTask = function(){
    console.log( 'in getTask' );
    $.ajax({
      type: 'GET',
      url: '/getTask',
      success: function( response ){
        console.log( 'back from get call:', response );
        console.log('response.length', response.length);
        console.log("in status: ", response[0].status);
        //start if
        if (response.length === 0) {
          $( '#outputDiv' ).html( "<p>YNo tasks in to do list</p>" );
        }
        else {
        displayTask( response );
      }//end if
      },// end success

      error: function(){
        console.log( 'error with ajax call...');
      } // end error
    }); // end ajax
  }; // end getTask

//   //start putTask (UPDATE server/db)
//   var putTask = function(){
//     console.log( 'in putTask' );
//     var objectToSend = {
//           id: id
//         };
//     $.ajax({
//       type: 'PUT',
//       url: '/putTask',
//       data: id,
//       success: function( response ){
//         console.log( 'back from get call:', response );
//         displayTask( response );
//       }, // end success
//       error: function(){
//         console.log( 'error with ajax call...');
//       } //end error
//     }); //end ajax
//   };//end putTask
//
// var deleteTask = function(){
//   console.log('in deleteTask');
//   var objectToSend = {
//         id: id
//       };
//       $.ajax({
//         type:'DELETE',
//         url:'/deleteTask',
//         data: objectToSend,
//         success:function(response){
//           console.log(response);
//         }
//       }); //end ajax
//     };//end deleteTask

  //------------Display Function----------//
  //displayTask
  var displayTask = function(tasks){
    console.log( 'in displayTask:', tasks );
    // loop through the todolist and display each task
    var outputText = '';
    for (var i = 0; i < tasks.length; i++) {
      console.log("status for loop: ", tasks[i].status);
      console.log("tasks[i].id:", tasks[i].id);
      outputText += "<ul>Task: " + tasks[i].task + "</ul><ul>Status: " + tasks[i].status + "</ul><ul>" + "<button class='complete-task-btn'  type='button' name='completetask' data=" + tasks[i].id + "> Complete Task </button>" + " " + "<button class='delete-task-btn' type='button' name='deleteTask' data=" + tasks[i].id + ">Delete Task</button></ul>";
    } // end for
    $( '#outputDiv' ).html( outputText );
  };//end displayOnDom

});// end $

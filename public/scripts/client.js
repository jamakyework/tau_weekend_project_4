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
    //clear Input
    $("#taskInput").val("");
  });//end button click
  
});// end $



// var displayOnDom = function(){
//   // console.log( 'in displayGarage:', garage );
//   // loop through the garage and display each car
//   var outputText = '';
//   for (var i = 0; i < garage.length; i++) {
//     outputText += '<p>' + garage[i].year + ' ' +garage[i].make + ' <strong>' + garage[i].model + '</strong></p>';
//     outputText += '<p>' + garage[i].description + '</p>';
//     outputText += '<img src="' + garage[i].imageUrl + '" />';
//   } // end for
//   $( '#outputDiv' ).html( outputText );

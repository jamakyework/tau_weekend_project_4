//start $
$(document).ready(function() {
  console.log("$");

var taskInputArray = [];

  $("#createTaskBtn").on('click', function(){
       console.log("createTask button clicked");
       //start userInput object
       var taskInput={
         task: $("#taskInput").val(),
       };// end get userInput object
       console.log("in taskInputIn:", taskInput);
       //clear Input
       $("#taskInput").val("");
       //push user input into global
       taskInputArray .push(taskInput);
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

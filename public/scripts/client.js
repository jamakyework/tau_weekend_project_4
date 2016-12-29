//start $
$(document).ready(function() {
    console.log("$");
    //-----------Buttons------------------ //
    //start createTaskBtn click
    $("#createTaskBtn").on('click', function() {
        console.log("createTaskBtn clicked");
        //run post
        postTask();
        //run get
        getTask();
        //clear Input
        $("#taskInput").val("");
    }); //end createTaskBtn click

    //start displayTaskBtn
    $("#displayTasksBtn").on('click', function() {
        console.log("displayTasksBtn clicked");
        getTask();
    }); //end displayTaskBtn

    //start completeTaskBtn
    $('#outputDiv').on('click', '.complete-task-btn', function() {
        var id = $(this).attr('data');
        console.log("completeTaskBtn clicked", id);
        var objectToSend = {
            id: id
        };
        $.ajax({
            type: 'PUT',
            url: '/putTask',
            data: objectToSend,
            success: function(response) {
                    console.log("in complete task click:", response);
                } //end success
        }); //end ajax
        //add delay
        getTask();
    }); //end completeTaskBtn

    //start deleteTaskBtn
    $('#outputDiv').on('click', '.delete-task-btn', function() {
        var id = $(this).attr('data');
        console.log("deleteTaskBtn clicked", id);
        var objectToSend = { id: id };
    if (confirm("Are you sure you want to delete this task?") === true) {
           $.ajax({
               type: 'DELETE',
               url: '/deleteTask',
               data: objectToSend,
               success: function(response) {
                   console.log("delete response: ", response);
               }, //end success
           }); //end ajax
         } else {
           return false;}
           getTask();
       }); //end deleteTaskBtn

    //------------AJAX Calls-------------//
    //postTask (send user input)
    var postTask = function() {
        console.log('in postTask');
        //assemble userInput
        var taskInputObj = {
            task: $("#taskInput").val(),
            status: $(".status-drop-down").val(),
            complete: false,
        }; //end taskInputObj
        //start ajax
        $.ajax({
            type: 'POST',
            url: '/postTask',
            data: taskInputObj,
            success: function(response) {
                console.log('back from post call:', response);
            }, // end success
            error: function() {
                    console.log('error with ajax call...');
                } // end error
        }); // end ajax
    }; // end postTask

    //getTask (get back info from server/DB)
    var getTask = function() {
        console.log('in getTask');
        $.ajax({
            type: 'GET',
            url: '/getTask',
            success: function(response) {
                console.log('back from GET call:', response);
                console.log('GET response.length', response.length);
                //start if
                if (response.length === 0) {
                    $('#outputDiv').html("<p> No tasks in to do list </p>");
                } //end if
                else {
                    displayTask(response);
                } //end else
            }, // end success
            error: function() {
                    console.log('error with ajax call...');
                } // end error
        }); // end ajax
    }; // end getTask

    //------------Functions----------//
    //displayTask
    var displayTask = function(tasks) {
        console.log('in displayTask:', tasks);
        // loop through the todolist and display each task
        var outputText = '';
        for (var i = 0; i < tasks.length; i++) {
            outputText += "<h2><div class='"+ tasks[i].status + "'>Task:"+ tasks[i].task + "</br>Status:"+ tasks[i].status +"  "+ "<button class='complete-task-btn'type='button' name='completetask' data=" + tasks[i].id + "> Complete Task </button>" + " " + "<button class='delete-task-btn' type='button' name='deleteTask' data=" + tasks[i].id + '>Delete Task</button></div></h2>';
        } // end for
        $('#outputDiv').html(outputText);
    }; //end displayOnDom

}); // end $

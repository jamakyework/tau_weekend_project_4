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
        //changecolor();
    }); //end completeTaskBtn

    //start deleteTaskBtn
    $('#outputDiv').on('click', '.delete-task-btn', function() {
        var id = $(this).attr('data');
        console.log("deleteTaskBtn clicked", id);
        var objectToSend = {
            id: id
        };
        $.ajax({
            type: 'DELETE',
            url: '/deleteTask',
            data: objectToSend,
            success: function(response) {
                console.log("delete response: ", response);
            }, //end success
        }); //end ajax
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
            // console.log("status for loop: ", tasks[i].status);
            // console.log("tasks[i].id:", tasks[i].id);
            outputText += "<p><div class='task-display " + tasks[i].status + "'>Task:"+ tasks[i].task + "</br>Status:"+ tasks[i].status +"  "+ "<button class='complete-task-btn'type='button' name='completetask' data=" + tasks[i].id + "> Complete Task </button>" + " " + "<button class='delete-task-btn' type='button' name='deleteTask' data=" + tasks[i].id + '>Delete Task</button></div></p>';
        } // end for
        $('#outputDiv').html(outputText);
    }; //end displayOnDom

    var changeColor = function() {
        $(".task-display").css("background-color", "green");
    };

}); // end $



// outputText += "<div class='task-display " + tasks[i].status + "'><ul>Task: " + tasks[i].task + "</ul><ul>Status: " + tasks[i].status + "</ul></div>";
// outputText += "<div><ul><button class='complete-task-btn " + tasks[i].status + "'type='button' name='completetask' data=" + tasks[i].id + "> Complete Task </button>" + " " + "<button class='delete-task-btn' type='button' name='deleteTask' data=" + tasks[i].id + ">Delete Task</button></ul></div>";

// //displayTask
// var displayTask = function(tasks) {
//     console.log('in displayTask:', tasks);
//     // loop through the todolist and display each task
//     var outputText = '';
//     for (var i = 0; i < tasks.length; i++) {
//         console.log("status for loop: ", tasks[i].status);
//         console.log("tasks[i].id:", tasks[i].id);
//         if (task[i].status === "complete") {
//
//
//         } else {
//
//         }
//
//     } // end for
//     $('#outputDiv').html(outputText);
// }; //end displayOnDom

// if (confirm("do you want to delete this task?")==="true") {
//   } else { getTask();}

//confirm("do you want to delete this task?");
//on complete-task-btn click i want to change the color of the output to Green


// (if status = complete then color should be green)
// (if status = work in progress then color should be red)

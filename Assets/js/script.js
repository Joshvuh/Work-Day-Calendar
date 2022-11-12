var currentHour = dayjs().format("HH")

// $(window).on('load', function() prevents the function below from running before everything on the page has loaded.
$(window).on("load", function() {

// Grabs key and values from local storage to display correct todo with correct time after a refresh, or the page has been closed and opened again.
  $("#hour-09 #todo").val(localStorage.getItem("09"));
  $("#hour-10 #todo").val(localStorage.getItem("10"));
  $("#hour-11 #todo").val(localStorage.getItem("11"));
  $("#hour-12 #todo").val(localStorage.getItem("12"));
  $("#hour-13 #todo").val(localStorage.getItem("13"));
  $("#hour-14 #todo").val(localStorage.getItem("14"));
  $("#hour-14 #todo").val(localStorage.getItem("15"));
  $("#hour-15 #todo").val(localStorage.getItem("16"));
  $("#hour-16 #todo").val(localStorage.getItem("17"));

// Uses dayjs to display the current hour and date at the top of the page.
  setInterval(function () {
    $("#currentDay").text(dayjs().format("h:mma - MM/DD/YYYY"));
  });

// Loop through each element with the class "time-block" and compare to currentHour, adds class based on what time it currently is.
  $(".time-block").each(function () {
    var timeSlot = $(this).attr("id").split("-")[1];

    if (currentHour == timeSlot) {
      $(this).addClass("present");
    } else if (currentHour < timeSlot) {
      $(this).addClass("future");
    } else if (currentHour > timeSlot) {
      $(this).addClass("past");
    };
  });

// When the save button is clicked, look for siblings of the save button with the class "todo", grab the text that is in that field and store it under the variable todo.
// the time variable is looking for a parent element with an ID, it's grabbing the ID, using .split to remove "hour-" and then storing it under the variable time
// after we have both the todo and time, we store those in local storage.
  $(".saveBtn").click(function (e) { 
    e.preventDefault(); 
    var todo = $(this).siblings("#todo").val();
    var time = $(this).parent().attr("id").split("-")[1];
    if(todo == " ") {
      return;
    } else {
      localStorage.setItem(time, todo);
    };
  });

// "Clear Calendar" button at the bottom of the header, clears out all text areas and local storage.
  $(".clearBtn").click(function (e) {
    e.preventDefault(); 
    $("textarea").val(" ");
    localStorage.clear();
  });
});

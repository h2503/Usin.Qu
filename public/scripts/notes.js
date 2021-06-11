var listItemID = 1;
$("#addTodo").on("click", function () {
  var newTodo = $("#newTodo").val();
  if (newTodo === "") {
    alert("List of things I want to buy");
  } else {
    $("#todoList").append(
      '<li id="li' +
        listItemID +
        '"><p class="todotext">' +
        newTodo +
        "</p> " +
        '<button data-id="li' +
        listItemID +
        '" class="removeTodo" href="#/"><i class="fa fa-minus"></i></button> ' +
        '<button data-id="li' +
        listItemID +
        '" class="doneTodo" href="#/"><i class="fa fa-check"></i></button>' +
        "</li>"
    );
    listItemID++;

    //clear input after adding todo
    $("#newTodo").val("").focus();
  }
  //save todos to local storage
  var todos = $("#todoList").html();
  localStorage.setItem("todos", todos);
  return false;
});

//local storage
if (localStorage.getItem("todos")) {
  $("#todoList").html(localStorage.getItem("todos"));
}

//remove todo
$(document).on("click", ".removeTodo", function () {
  var checkstr = confirm("Are you sure you want to delete this?");
  if (checkstr == true) {
    var removeItemId = "#" + $(this).attr("data-id");
    $(removeItemId).remove();
  } else {
    return false;
  }
  //update local storage
  var todos = $("#todoList").html();
  localStorage.setItem("todos", todos);
  return false;
});

//todo complete
$(document).on("click", ".doneTodo", function () {
  var completeItemId = "#" + $(this).attr("data-id") + " .todotext";
  $(completeItemId).toggleClass("lineThrough");
  $(this).toggleClass("doneTodoGrey");

  //update local storage
  var todos = $("#todoList").html();
  localStorage.setItem("todos", todos);
  //return false;
});

$(function() {

    // Send the POST request.
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var value=$("#newBurger").val().trim();
    console.log("Value: "+value);
    if(value!=""){
    var newEntry = {
      name: value
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newEntry
    }).then(
      function() {
        console.log("created new Entry");
        location.reload();
      }
    );
  }
  });

  $(".deleteBurger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
    }).then(
      function() {
        location.reload(); 
      }
    );
  });

  $(".archiveBurger").on("click", function(event) {
    event.preventDefault();
    console.log("deleting");
    var id = $(this).data("id");
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(
      function() {
        location.reload();
      }
    );
  });


});


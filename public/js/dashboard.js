// add a Want

$(document).ready(function() {
    if (!isAuthenticated()) {
        location.href = "/signup";
        return;
    }

    $.ajax({
        url: "/api/user/" + getAuthentication().id,
        method: "GET",
        beforeSend: function(header) {
            header.setRequestHeader("x-access-token", getAuthToken());
        }
    }).then(function(response) {
        if (!response) {
            console.log("Error finding user");
            return;
        }
        $("#userName").html(`${response.firstName} ${response.lastName}`)

        console.log(response);
    });
})

$("#newItem").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    //  console.log("hello");

    var newItem = {
        itemName: $("#itemName").val().trim(),
        itemDescription: $("#itemDescription").val().trim(),
        itemCategory: $("#itemCategory").val().trim(),
        itemPhoto: $("#itemPhoto").val().trim()
    };
    console.log(newItem);
    var type = $("input[name = 'havewant']:checked").val();
    $.ajax({
        url: (`/api/${type}`),
        method: "POST",
        data: newItem
    });

})
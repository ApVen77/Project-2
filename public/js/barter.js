// Make a get request to our api route that will return every item
$.get("/api/have", function(data) {
    // For each book that our server sends us back
    for (var i = 0; i < data.length; i++) {
      // Create a parent div to hold book data
      var itemData = $("<div>");
      // Add a class to this div: 'well'
      itemData.addClass("product");
      // Add an id to the well to mark which well it is
      itemData.attr("id", "book--" + i);
      // Append the well to the well section
      $("#itemData").append(wellSection);
  
      // Now  we add our book data to the well we just placed on the page
      $("#book-well-" + i).append("<h2>" + (i + 1) + ". " + data[i].title + "</h2>");
      $("#book-well-" + i).append("<h3>Author: " + data[i].author + "</h4>");
      $("#book-well-" + i).append("<h3>Genre: " + data[i].genre + "</h4>");
      $("#book-well-" + i).append("<h3>Pages: " + data[i].pages + "</h4>");
    }
  });
  id 
  itemname
  itemdescription
  itemCategory
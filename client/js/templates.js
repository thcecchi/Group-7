var template = {};

template.homeItem = [
  '<div class="col-md-3">',
  '<h3><%= artist %></h3>',
  '<img src="<%= image %>">',
  '<h3><%= title %></h3>',
  '<p><%= description %></p>',
  '</div>',
  '<div class="col-md-3 col-md-offset-3">',
  '<h3><%= title %></h3>',
  '<img src="<%= image %>">',
  '</div>',
  '<div class="col-md-3">',
  '<h3><%= artist %></h3>',
  '<p><%= description %></p>',
  '<p><%= dimensions %></p>',
  '<h3><button>Bid</button></h3>',
  '<h4><button class="delete-item">Delete Item</button></h4>',
  '</div>'
].join("");

template.editItem = [
  '<div class="col-md-6 col-md-offset-3">',
  "<form id='update-form'>",
  "<h3>Edit Item</h3>",
  "<input id='updateID' type='hidden' value='<%= idx %>'>",
  "<p><label for='item'> Item Name </label>",
  "<input id='updateTitle' type='text' value='<%= item %>'></p>",
  "<p><label for='image'> Image </label>",
  "<input id='updateImage' type='text' value='<%= image%>'</p>",
  "<p><label for='details'>Details </label>",
  "<textarea id='updateDetails' name=''><%= details%></textarea></p>",
  "<p><label for='price'>Price </label>",
  "<input id='updatePrice' type='text' value='<%= price %>'></p>",
  "<p><button type='submit' class='save-edit-button'>Update Product</button></p>",
  "</form>",
  "<article>"

].join("");

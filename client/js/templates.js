var template = {};

template.homeItem = [
  '<div class="col-md-3">',
  '<h3><%= artist %></h3>',
  '<img src="<%= image %>">',
  '<h3><%= title %></h3>',
  '<p><%= description %></p>',
  '</div>',
  '<div class="bidView col-md-3">',
  '<h3><%= title %></h3>',
  '<img src="<%= image %>">',
  '<h3><%= artist %></h3>',
  '<p><%= description %></p>',
  '<p><%= dimensions %></p>',
  '<h3><button>Bid</button></h3>',
  '<h4><button class="deleteItem">Delete Item</button></h4>',
  '</div>'
].join("");

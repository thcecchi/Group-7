var template = {};

template.homeItem = [
  '<article class="tinyView col-md-3">',
  '<div class="backimg" style="background-image: url(<%= image %>)">',
  '<h3><%= artist %></h3>',
  '<h3 class="title" ref="<%= title %>"><%= title %></h3>',
  // '<h3><%= startingbid %></h3>',
  '</div>',
  '</article>',
  '<article class="bidView col-md-3 col-md-offset-3">',
  '<h3><%= title %></h3>',
  '<img src="<%= image %>">',
  '<h3><%= artist %></h3>',
  // '<h3><%= startingbid %></h3>',
  '<h3 class="bidAmount" ref="<%= bidAmount %>"><%= bidAmount %></h3>',
  '<p><%= description %></p>',
  '<p><%= dimensions %></p>',
  '<h3><button class="bidItem">Bid</button></h3>',
  '<h4><button class="deleteItem">Delete Item</button></h4>',
  '</article>'
].join("");

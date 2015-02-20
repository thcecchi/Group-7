var template = {};

template.homeItem = [
  '<article class="tinyView col-md-3">',
  '<div class="backimg" style="background-image: url(<%= image %>)">',
  '</div>',
  '<h3 class="INFO line1"><%= artist %></h3>',
  '<h3 class="INFO line2 "><%= title %></h3>',
  '<h3 class="INFO line3"><%= startingbid %></h3>',
  '</article>',
  '<article class="bidView col-md-8 col-md-offset-2">',
  '<h2><%= title %></h2>',
  '<img src="<%= image %>">',
  '<div class="bid-info">',
  '<div class="your-clock"></div>',
  '<button class="btn btn-default"><i class="fa fa-hand-o-up"></i> Bid</button>',
  '<h3><%= artist %></h3>',
  '<p><%= description %></p>',
  '<p><%= dimensions %></p>',
  '<button class="deleteItem btn btn-default btn-xs">Delete Item</button>',
  '</div>',
  '</article>'
].join("");

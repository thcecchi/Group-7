var template = {};

template.homeItem = [
  '<article class="tinyView col-md-3" data-artid="<%= _id %>">',
  '<div class="backimg" style="background-image: url(<%= image %>)">',
  '<h3 class="INFO"><%= artist %></h3>',
  '<h3 class="title INFO" ref="<%= title %>"><%= title %></h3>',
  //'<h3 class="INFO"><%= startingbid %></h3>',
  '</div>',
  '</article>',
  '<article class="bidView col-md-8 col-md-offset-2">',
  '<h2><%= title %></h2>',
  '<img src="<%= image %>">',
  '<div class="bid-info">',
  '<div class="your-clock"></div>',
  '<button class="bidItem btn btn-default"><i class="fa fa-hand-o-up"></i> Bid</button>',
  '<h3><%= artist %></h3>',
  // '<h3><%= startingbid %></h3>',
  '<h3 class="bidAmount" ref="<%= bidAmount %>"><%= bidAmount %></h3>',
  '<p><%= description %></p>',
  '<p><%= dimensions %></p>',
  '<button class="deleteItem btn btn-default btn-xs">Delete Item</button>',
  '</div>',
  '</article>'
].join("");

var template = {};

template.homeItem = [
  '<article class="tinyView col-md-3" data-artid="<%= ArtModel._id %>">',
  '<a href="#art/<%= ArtModel.title %>"><div class="backimg" style="background-image: url(<%= ArtModel.image_url %>)">',
  '<h3 class="INFO"><%= ArtModel.artist %></h3>',
  '<h3 class="title INFO" ref="<%= ArtModel.title %>"><%= ArtModel.title %></h3>',
  '<h3 class="INFO">$<%= ArtModel.total_amount %></h3>',
  '</div></a>',
  '</article>',
  '<article class="bidView col-md-8 col-md-offset-2">',
  '<h2><%= ArtModel.title %></h2>',
  '<img class="fullbackimg" src="<%= ArtModel.image_url %>">',
  '<div class="bid-info">',
  '<div class="your-clock"></div>',
  '<button class="bidItem btn btn-default"><i class="fa fa-hand-o-up"></i> Bid</button>',
  '<h3><%= ArtModel.artist %></h3>',
  // '<h3><%= startingbid %></h3>',
  '<h3 class="bidder" ref="<%= ArtModel.bidder %>"><%= ArtModel.bidder %></h3>',
  '<h3 class="total_amount" ref="<%= ArtModel.total_amount %>">$<%= ArtModel.total_amount %></h3>',

  '<h3 class="bidAmount" ref="<%= ArtModel.bid_amount %>">$<%= ArtModel.bid_amount %></h3>',

  // '<h3>$<%= startingbid %></h3>',
  '<p><%= ArtModel.description %></p>',
  '<p><%= ArtModel.dimensions %></p>',
  '<button class="deleteItem btn btn-default btn-sm">Delete Item</button>',
  '</div>',
  '</article>'
].join("");

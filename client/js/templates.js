var template = {};

template.homeItem = [
  '<article class="col-md-3">',
  '<div class="backimg" style="background-image: url("<%= image %>")">',
  '<h3><%= artist %></h3>',
  '<h3><%= title %></h3>',
  '<h3><%= bid %></h3>',
  '</div>',
  '</article>',
  '<article class="col-md-3">',
  '<h3><%= artist %></h3>',
  '<p><%= description %></p>',
  '<p><%= dimensions %></p>',
  '<h3><button>Bid</button></h3>',
  '<h4><button class="delete-item">Delete Item</button></h4>',
  '</article>'
].join("");

// Art View

var ArtView = Backbone.View.extend({
  template: _.template(template.homeItem),
  tagName: 'div class="col-md-3"',
  initialize: function () {
    console.log(this.el)
  },
  events: {
    'mouseover .col-md-3': 'showInfo',
    'click .col-md-3': 'showBidView',
    'click .deleteItem': 'removeListing'
  },
  showInfo: function () {
    // this.$el.find('.INFO').show();
  },
  showBidView: function ()  {
    this.$el.find('.bidView').toggleClass('show')
    this.$el.find('.col-md-3').toggleClass('hide')
  },
  render: function () {
    console.log(this.el);
    var markup = this.template(this.model.toJSON())
    this.$el.html(markup)

    return this;
  },
  removeListing: function () {
    this.model.destroy();
    this.$el.remove()
  },
  bidOnListing: function (e) {
    e.preventDefault()
    this.model.set({
      amount: $('#newProduct').find('input[name="bidAmount"]').val(),
      title: this.title,
      bidder: localHost.localUser,
      time: moment()
    })
    this.model.save();
  }
});

//Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized')
    this.addAllListings();
  },
  events: {
    'click .createListing': 'createListing',
    'click #addButton': 'toggleForm'
  },
  toggleForm: function (event) {
    this.$el.find('#newProduct').toggleClass('show'); //This works in the console, but for some reason I cannot get the click above in events to bind to the toggleForm function. We also may not want to use jQuery here, it can be swapped back to the original way, that is all I could get to work in the console though.
    console.log('shown')
  },
  createListing: function (e) {
    e.preventDefault();
    var newListing = {
      title: $('#newProduct').find('input[name="newTitle"]').val(),
      description: $('#newProduct').find('input[name="newDescription"]').val(),
      artist: $('#newProduct').find('textarea[name="newArtist"]').val(),
      image: $('#newProduct').find('input[name="newImage"]').val(),
      dimensions: $('#newProduct').find('input[name="newDimensions"]').val(),
      startingbid: $('#newProduct').find('input[name="newStartingBid"]').val(),
      endx: moment().hours($('#newProduct').find('input[name="newEndx"]').val()),
    };

    var newAuction = {
      startx: moment(),
      endx: moment().hours($('#newProduct').find('input[name="newEndx"]').val()),
      amount: $('#newProduct').find('input[name="newAmount"]').val(),
      startingbid: $('#newProduct').find('input[name="newStartingBid"]').val()
    };

    // create art object
    var newModelArt = new ArtModel(newListing)
    newModelArt.save();
    this.collection.add(newModelArt)

    // create auction object
    var newModelAuction = new AuctionModel(newAuction)
    newModelAuction.save();
    //
    this.$el.find('div class="col-md-3"').remove();
    this.addAllListings();
    // this.addOnePost(newModelPost); // alternative method
    this.$el.find('#newProduct').find('input', 'textarea').val('');
    this.showCreate();
  },
  addOneListing: function (listing, idx, arr) {
    var artView = new ArtView({model: listing})
    this.$el.append(artView.render().el)
  },
  addAllListings: function () {
    _.each(this.collection.models, this.addOneListing, this)
  }
});

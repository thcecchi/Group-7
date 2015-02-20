// Art View

var ArtView = Backbone.View.extend({
  template: _.template(template.homeItem),
  tagName: 'article',
  initialize: function () {
    console.log(this.el)
  },
  events: {
    'mouseover .backimg': 'showInfo',
    'mouseout article': 'hideInfo',
    'click .backimg': 'showBidView',
    'click .deleteItem': 'removeListing',
    'click .bidView img': 'showTinyView',
    'click .bidItem': 'bidOnListing'
  },
  showInfo: function () {
    this.$el.find('.INFO').show();
  },
  hideInfo: function () {
    this.$el.find('.INFO').hide();
  },
  showBidView: function ()  {
    this.$el.find('.bidView').toggleClass('show')
    $('.tinyView').toggleClass('hide')
  },
  showTinyView: function () {
    this.$el.find('.bidView').toggleClass('show')
    $('.tinyView').toggleClass('hide')
  },
  render: function () {
    console.log(this.el);
    var markup = this.template(this.model.toJSON())
    this.$el.html(markup)

    return this;
  },
  removeListing: function () {
    this.model.destroy();
    this.$el.remove();
    $('.tinyView').toggleClass('hide')
    // setInterval(this.countdown, 200);
    // if this.timeLeft == 0 {
    //   this.$el.remove();
    // }

  },
  bidOnListing: function (e) {
    e.preventDefault()
    var newBid = {
      bidAmount: this.$el.find('.bidAmount').attr('ref'),
      title: this.$el.find('.title').attr('ref'),
      bidder: localStorage.name,
      time: moment(),
      art: this.$el.find('article').eq(0).data('artid')
    }
    console.log(this.el)
    var newModelBid = new BidModel(newBid)
    newModelBid.save();
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
    this.$el.find('#newProduct').toggleClass('show');
    console.log('shown')

  },
  createListing: function (e) {
    e.preventDefault();
    var newAuction = {
      art: newModelArt,
      title: $('#newProduct').find('input[name="newTitle"]').val(),
      startx: moment(),
      endx: moment().hours($('#newProduct').find('input[name="newEndx"]').val()),
      bidAmount: $('#newProduct').find('input[name="bidAmount"]').val(),
      startingbid: $('#newProduct').find('input[name="newStartingBid"]').val()
    };

    var newModelAuction = new AuctionModel(newAuction);

    var newListing = {
      auction: newModelAuction,
      title: $('#newProduct').find('input[name="newTitle"]').val(),
      description: $('#newProduct').find('input[name="newDescription"]').val(),
      artist: $('#newProduct').find('input[name="newArtist"]').val(),
      image: $('#newProduct').find('input[name="newImage"]').val(),
      dimensions: $('#newProduct').find('input[name="newDimensions"]').val(),
      startingbid: $('#newProduct').find('input[name="newStartingBid"]').val(),
      bidAmount: $('#newProduct').find('input[name="bidAmount"]').val(),
      endx: moment().hours($('#newProduct').find('input[name="newEndx"]').val()),
    };

    // create art object
    var newModelArt = new ArtModel(newListing)
    newModelArt.save();
    var artid = newModelArt.get("_id");
    newModelArt.attributes._id = artid;
    this.collection.add(newModelArt)

    this.addOneListing(newModelArt); // alternative method
    this.$el.find('#newProduct').find('input', 'textarea').val('');
    this.toggleForm();
  },
  addOneListing: function (listing, idx, arr) {
    var artView = new ArtView({model: listing})
      this.$el.append(artView.render().el)
  },
  addAllListings: function (listing) {
    _.each(this.collection.models, this.addOneListing, this)
  }
});

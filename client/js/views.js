// Art View

var ArtView = Backbone.View.extend({
  template: _.template(template.homeItem),
  tagName: 'article',
  initialize: function () {
    console.log(this.el)
  },
  events: {
    'mouseover article': 'showInfo',
    'mouseout article': 'hideInfo',
    'click article': 'showBidView',
    'click .deleteItem': 'removeListing'
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
    this.$el.find('#newProduct').toggleClass('show');
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
      endx: moment().hours($('#newProduct').find('select[name="newEndx"]').val()),
    };

    var newAuction = {
      startx: moment(),
      endx: moment().hours($('#newProduct').find('select[name="newEndx"]').val()),
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

    this.addOneListing(newModelArt); // alternative method
    this.$el.find('#newProduct').find('input', 'textarea').val('');
    this.toggleForm();
  },
  addOneListing: function (listing, idx, arr) {
    var artView = new ArtView({model: listing})
    this.$el.append(artView.render().el)
  },
  addAllListings: function () {
    _.each(this.collection.models, this.addOneListing, this)
  }
});

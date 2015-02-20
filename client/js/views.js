// Art View

var ArtView = Backbone.View.extend({
  template: _.template(template.homeItem),
  tagName: 'article',
  initialize: function () {
    console.log(this.el)
  },
  events: {
    'mouseover article': 'showInfo',
    'click article': 'showBidView',
    'click .deleteItem': 'removeListing',
    'click .bidItem': 'bidOnListing'
  },
  showInfo: function () {
    this.$el.find('.backImg').hide();
  },
  showBidView: function ()  {
    this.$el.find('.bidView').toggleClass('show')
    this.$el.find('.tinyView').toggleClass('hide')
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

    // // create art object
    var newModelArt = new ArtModel(newListing)
    newModelArt.save();
    var artid = newModelArt.get("_id");
    newModelArt.attributes._id = artid;
    this.collection.add(newModelArt)


    // var newListing = {
    //   title: $('#newProduct').find('input[name="newTitle"]').val(),
    //   description: $('#newProduct').find('input[name="newDescription"]').val(),
    //   artist: $('#newProduct').find('input[name="newArtist"]').val(),
    //   image: $('#newProduct').find('input[name="newImage"]').val(),
    //   dimensions: $('#newProduct').find('input[name="newDimensions"]').val(),
    //   startingbid: $('#newProduct').find('input[name="newStartingBid"]').val(),
    //   bidAmount: $('#newProduct').find('input[name="bidAmount"]').val(),
    //   endx: moment().hours($('#newProduct').find('input[name="newEndx"]').val()),
    // };
    //
    // var newModelArt = new ArtModel(newListing);
    //
    // var newAuction = {
    //   art: newModelArt,
    //   title: $('#newProduct').find('input[name="newTitle"]').val(),
    //   startx: moment(),
    //   endx: moment().hours($('#newProduct').find('input[name="newEndx"]').val()),
    //   bidAmount: $('#newProduct').find('input[name="bidAmount"]').val(),
    //   startingbid: $('#newProduct').find('input[name="newStartingBid"]').val()
    // };
    //
    // // create art object
    // newModelArt.save();
    // var artid = newModelArt.get("_id");
    // newModelArt.attributes._id = artid;
    // this.collection.add(newModelArt)
    //
    // // create auction object
    // var newModelAuction = new AuctionModel(newAuction)
    // newModelAuction.save();

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

//Clock view

var clock = new FlipClock($('.your-clock'), {

  // clock.setCountdown(true);
  // clock.setTime(3600);
});

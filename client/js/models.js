//Art model

var ArtModel = Backbone.Model.extend({

  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/group7',
  // url: 'http://localhost:9000/arts',
  idAttribute: '_id',
  defaults: function () {
    return {
      title: "generic title",
      description: "generic description",
      artist: "random artist",
      image_url: "http://www.fillmurray.com/200/200",
      dimensions: "generic dimensions",
      amount: "generic amount",
      auction: "",
      bids: [],
      bidder: 'No one Yet!',
      total_amount: 'Nothing!'
    };
  },
  initialize: function () {
    console.log('ArtModel was created');
  },
  toJSON: function() {
    return {ArtModel: this.attributes};
  }
})

//Auction model

var AuctionModel = Backbone.Model.extend({

  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/group7',
  idAttribute: '_id',
  defaults: function () {
    return {
      startx: "generic time",
      endx: "generic time",
      amount: "generic amount"
    };
  },
  initialize: function () {
    console.log('AuctionModel was created');
  }
})

//Bid model

var BidModel = Backbone.Model.extend({

  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/group7',
  idAttribute: '_id',
  defaults: function () {
    return {
      amount: "generic amount",
      title: "generic title",
      bidder: "generic name",
      time: moment(),
      auction_id: "generic id"
    };
  },
  initialize: function () {
    console.log('BidModel was created');
  }
})

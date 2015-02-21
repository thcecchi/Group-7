//Art model

var ArtModel = Backbone.Model.extend({

  urlRoot: 'http://localhost:9000/arts',
  url: 'http://localhost:9000/arts',
  idAttribute: 'id',
  defaults: function () {
    return {
      title: "generic title",
      description: "generic description",
      artist: "random artist",
      image_url: "http://www.fillmurray.com/200/200",
      dimensions: "generic dimensions",
      startingbid: "generic amount",
      bidAmount: "generic amount",
      auction: ""
    };
  },
  initialize: function () {
    console.log('ArtModel was created');
  }
})

//Auction model

var AuctionModel = Backbone.Model.extend({

  urlRoot: 'http://localhost:9000/auctions',
  idAttribute: 'id',
  defaults: function () {
    return {
      startx: "generic time",
      endx: "generic time",
      startingbid: "generic amount",
      bidAmount: "generic amount"
    };
  },
  initialize: function () {
    console.log('AuctionModel was created');
  }
})

//Bid model

var BidModel = Backbone.Model.extend({

  urlRoot: 'http://localhost:9000/bids',
  idAttribute: 'id',
  defaults: function () {
    return {
      bidAmount: "generic amount",
      title: "generic title",
      bidder: "generic name",
      time: moment(),
      artId: "generic id"
    };
  },
  initialize: function () {
    console.log('BidModel was created');
  }
})

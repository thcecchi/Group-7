//Art model

var ArtModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/tylerbb7',
  idAttribute: '_id',
  defaults: function () {
    return {
      title: "generic title",
      description: "generic description",
      artist: "random artist",
      image: "http://www.fillmurray.com/200/200",
      dimensions: "generic dimensions",
      bidAmount: "generic amount"
    };
  },
  initialize: function () {
    console.log('ArtModel was created');
  }
})

//Auction model

var AuctionModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/tylerbb7',
  idAttribute: '_id',
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
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/tylerbb7',
  idAttribute: '_id',
  defaults: function () {
    return {
      bidAmount: "generic amount",
      title: "generic title",
      bidder: "generic name",
      time: moment()
    };
  },
  initialize: function () {
    console.log('BidModel was created');
  }
})

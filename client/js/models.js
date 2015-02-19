//Art model

var ArtModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/tylerbb4',
  idAttribute: '_id',
  defaults: function () {
    return {
      title: "generic title",
      description: "generic description",
      artist: "random artist",
      image: "http://www.fillmurray.com/200/200",
      dimensions: "generic dimensions"
    };
  },
  initialize: function () {
    console.log('ArtModel was created');
  }
})

//Auction model

var AuctionModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/tylerbb4',
  idAttribute: '_id',
  defaults: function () {
    return {
      startx: "generic time",
      endx: "generic time",
      startingbid: "generic amount",
      amount: "generic amount"
    };
  },
  initialize: function () {
    console.log('AuctionModel was created');
  }
})

//Bid model

var BidModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/tylerbb4',
  idAttribute: '_id',
  defaults: function () {
    return {
      amount: "generic amount",
      title: "generic title",
      bidder: "generic name",
      time: moment()
    };
  },
  initialize: function () {
    console.log('BidModel was created');
  }
})

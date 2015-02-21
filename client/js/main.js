$(function () {
  var artCollection = new ArtCollection();

  artCollection.fetch().then(function() {

    var appView = new AppView({collection: artCollection})

  });


});

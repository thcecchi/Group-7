$(function () {
  var artCollection = new ArtCollection();


  artCollection.fetch().then(function() {

    var appView = new AppView({collection: artCollection})

    // Clock view
    // var bidTime = 10;
    //
    // var clock = $('.your-clock').FlipClock({
    //   countdown: true,
    //   clockFace: 'MinuteCounter'
    // });
    // clock.setTime(bidTime);
    // clock.start();


  });


});

$(function () {

  //if userName exists proceed to main art screen
  if (localStorage.name) {
    $('.loginContainer').addClass('hide')
    $('.header').addClass('show')
    $('section').addClass('show')
  }

  else {
    // enter user name and hide login screen, then proceed to art screen
    $('.container-fluid').on('click', '.userNameSubmit', function () {
      localStorage.name = $('.loginContainer').find('input[name="userName"]').val()
      $('.loginContainer').addClass('hide')
      $('.header').addClass('show')
      $('section').addClass('show')
    });
  }

  var artCollection = new ArtCollection();

  artCollection.fetch().then(function() {

    var appView = new AppView({collection: artCollection})
    setInterval(ArtView.getBids, 100);

  });


});

var AppRouter = Backbone.Router.extend({
  initialize: function() {
    console.log("routes have started");
  },
  routes: {
    '': 'home',
    'gallery': 'gallery',
    'art/:id': 'artbid'
  },
  home: function() {
    var self = this;
    var people = new StudentCollection();
    people.fetch().then(function() {
     self.loadView(new StudentsView({collection: people}));
    });
  },
  testRoute: function() {
    this.loadView(new testView());
    this.view.render();

  },
  spooner: function() {
    var self = this;
    var people = new StudentCollection();

    people.fetch({data: $.param({limit: 2})}).then(function() {
     self.loadView(new StudentsView({collection: people}));
    });
  },
  addStudent: function() {
    this.loadView(new AddStudentView());
  },
  loadView: function(view) {
    this.view && this.view.remove();
    this.view = view;
  }
});

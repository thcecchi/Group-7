// Art View

var ArtView = Backbone.View.extend({
  template: _.template(templates.homeItem),
  tagName: 'div class="col-md-3"',
  initialize: function () {
    console.log(this.el)
  },
  events: {
    'mouseover .col-md-3': 'showInfo'
  },
  showInfo: function () {
    this.$el.find('.INFO').show();
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
      title: this.$el.find('input[name="editTitle"]').val(),
    })
    this.model.save();
    //
    // $('.editPost').show();
    //
    // $('.sendEdit').hide();
    // $('#updatePost').hide();
  // }
});

//Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized')
    this.addAllPost();
  },
  events: {
    'click .createPost': 'createPost',
    'click .showCreate': 'showCreate',
    'click .sendEdit': 'editPostCollection'
  },
  showCreate: function () {
    this.$el.find('#createPost').toggleClass('show')
  },
  createListing: function (e) {
    e.preventDefault();
    var newPost = {
      title: $('#createPost').find('input[name="newTitle"]').val(),
      description: $('#createPost').find('input[name="newImg"]').val(),
      artist: $('#createPost').find('textarea[name="newContent"]').val(),
      image: $('#createPost').find('input[name="newDirector"]').val(),
      dimensions: ,
      currentBid: ,
      startx: ,
      endx: ,
      bidder: ,
      amount: ,
      startingbid
    };

    var newModelPost = new PostModel(newPost)
    newModelPost.save();
    this.collection.add(newModelPost)
    this.$el.find('article').remove();
    this.addAllPost();
    // this.addOnePost(newModelPost); // alternative method
    this.$el.find('#createPost').find('input', 'textarea').val('');
    this.showCreate();
  },
  editPostCollection: function() {
    this.$el.find('article').remove();
    this.addAllPost();
    console.log('reset')

  },
  addOnePost: function (post, idx, arr) {
    var postView = new PostView({model: post})
    this.$el.append(postView.render().el)
  },
  addAllPost: function () {
    _.each(this.collection.models, this.addOnePost, this)
  }
});

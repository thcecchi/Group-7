var ArtCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/nocommtest',
  model: ArtModel
})

var ArtCollection = Backbone.Collection.extend({
  url: 'http://localhost:9000/arts',
  model: ArtModel
})

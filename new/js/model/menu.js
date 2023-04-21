  
var Menu = Backbone.Collection.extend({
  modelId: function(attrs){
    return attrs.href;      
  }
});







var PageView = Backbone.View.extend({
    
  el: "#page-content",

  initialize:function(){

    _.bindAll(this, 'render');
    this.loader = new Loader({el: this.el});
    this.model.on("change:content", this.update, this);
    this.model.on("fetch", this.loader.show, this.loader);
    this.model.on("fetched", this.loader.hideWhenReady, this.loader);
  },
  
  render:function(){
    this.loader.render();
    //this.$el.append("<div id='content-container'></div>");
  },

  update:function(){
    this.$el.find("#content-container").html(this.model.get("content"));  
    document.title = this.model.get("title");
  },

  load: function(opt){
    this.model.load(opt);
  },

  bindRouter: function(router){
    router = this.model.bindRouter(router);
  }
    
});



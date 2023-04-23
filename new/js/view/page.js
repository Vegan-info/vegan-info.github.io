

var PageView = Backbone.View.extend({
    
  el: "#page-content",

  initialize:function(){

    _.bindAll(this, 'render');
    this.loader = new Loader({el: this.el});
    this.model.on("change:content", this.update, this);
    this.model.on("fetch", this.loader.show, this.loader);
  },
  
  render:function(){
    this.loader.render();
    //this.$el.append("<div id='content-container'></div>");
  },

  update:function(){
    //this.$el.find("#content-container").html(this.model.get("content"));  

    var container = this.$el.find("#content-container");
    var overlay = this.$el.find("#overlay");
    var model = this.model;
    loader = this.loader;

    overlay.fadeIn(200, function(){
      container.html(model.get("content"));
      loader.hideWhenReady(function(){
        overlay.fadeOut(100);
      });
    })

    document.title = this.model.get("title");
  },

  load: function(opt){
    this.model.load(opt);
  },

  bindRouter: function(router){
    router = this.model.bindRouter(router);
  }
    
});



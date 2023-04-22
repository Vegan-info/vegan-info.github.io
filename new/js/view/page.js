

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
  },

  update:function(){
    this.$el.find(".container").html(this.model.get("content"));  
    document.title = this.model.get("title");
    this.loader.hide();
  },

  load: function(opt){
    //this.loader.show();
    this.model.load(opt);
  }
    
});



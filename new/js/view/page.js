

var PageView = Backbone.View.extend({
    
  el: "#page_content",

  initialize:function(){
    this.model.on("change:content", this.render, this);
    this.model.on("fetch", this.showLoader, this);
  },
  
  render:function(){
    this.$el.html(this.model.get("content"));
    document.title = this.model.get("title");
    this.hideLoader();
  },

  showLoader: function(){
    alert("showing loader...");
  },

  hideLoader: function(){
    alert("hidding loader");
  }
    
});



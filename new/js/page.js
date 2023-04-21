
var StaticPage = Backbone.Model.extend({

  initialize: function(data){
    this.updateUrl();
    this.on("change:href", this.updateUrl, this);
  },

  parse:function(data){
    this.set("content", data);
  },

  updateUrl: function(){
      this.url = window.location.href + "/content/"+this.get("href")+".html";     
  },

  fetch: function(options){
    this.trigger("fetch");
    return Backbone.Model.prototype.fetch.call(this, options);
  }

});


var StaticPageView = Backbone.View.extend({
    
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



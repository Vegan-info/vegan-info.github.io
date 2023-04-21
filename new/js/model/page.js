
var Page = Backbone.Model.extend({

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





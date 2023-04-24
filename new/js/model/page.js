
var Page = Backbone.Model.extend({

  initialize: function(data){
    this.updateUrl();
    this.on("change:href", this.updateUrl, this);
  },

  parse:function(data){
    return {content: data};
  },

  updateUrl: function(){
    
    this.url = window.location.protocol+ "//" + window.location.host+
      (window.location.pathname.split('/').slice(0, -1).join('/'))+
      "/content/"+this.get("href")+".html";

  },

  sync: function(method, model, options){
    options = options || {};
    options.dataType = 'text';
    return Backbone.sync.call(this, method, model, options);
  },

  getHref: function(callback){
    var href = this.get("href");
    if(href){
      callback(href);
    }else {
      this.once("change:href",function(model, value){
        callback(value);
      });
    }
  },
  
  fetch: function(options){
    this.trigger("fetch");
    
    options = options || {};
    
    options.success = function(model, content){
      model.trigger("fetched");      
    };
    
    return Backbone.Model.prototype.fetch.call(this, options);
  },

  load: function(data){

    if(typeof data !== 'object'){
      data = {href: data};
    }

    if(data.href != this.get("href")){  
      this.set(data);
      this.fetch();
    }
  }


});





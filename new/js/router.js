

var PageRouter = Backbone.Router.extend({

  routes: {
    '*path': "load"
  },
  
  initialize:function(opt){
    
    this.page = opt.page;
    this.defaultPage = opt.defaultPage;
  },

  load: function(path){
    path = path ? path.split("|")[0] : this.defaultPage;
    this.page.load(path);
  },

  execute: function(callback, args, name){

    if(callback) callback.apply(this, args);
  }
  
});

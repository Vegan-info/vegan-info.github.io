

var PageRouter = Backbone.Router.extend({

  routes: {
    '*path': "load"
  },
  
  initialize:function(opt){
    
    this.menu = opt.menu;
    this.page = opt.page;
    this.defaultPage = opt.defaultPage;
  },

  load: function(path){
    path = path.split("|")[0];
    if(this.menu) this.menu.execute(path||this.defaultPage);
    else this.page.load(path);
  },
  
  execute: function(callback, args, name){

    if(callback) callback.apply(this, args);
  }
  
});

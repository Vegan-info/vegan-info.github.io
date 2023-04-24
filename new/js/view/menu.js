  


  // Menu View
var MenuView = Backbone.View.extend({

  el: "#main-menu",
  template: _.template($("#main-menu-tpl").html()),
  itemTemplate: _.template($("#main-menu-item-tpl").html()),

  initialize: function(opt){
    this.router = opt.router;
    this.collection = opt.items;
  },
    
  render: function() {
    var self = this;
    this.$el.html(this.template());
    var container = this.$el.find("#main-menu-container");
    var template = this.itemTemplate;
    var router = this.router;
    
    $(this.collection.models).each(function(i, item){
      var el = $(template(item.toJSON()));
      el.find("a").attr("id", item.get("href")).click(function(){
        container.find(".current-menu-item").removeClass("current-menu-item");
        el.addClass("current-menu-item");
        router.navigate(item.get("href"), {trigger:true});
        document.title = item.get("title");
      });
      container.append(el);
    });

    this.router.page.getHref(function(href){
      container.find("#"+href).parent().addClass("current-menu-item");
    })
    
  },

  execute: function(href){
    this.$el.find("#"+href).click();
  },

  
});




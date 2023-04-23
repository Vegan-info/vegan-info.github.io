  


  // Menu View
var MenuView = Backbone.View.extend({

  el: "#main-menu",
  template: _.template($("#main-menu-tpl").html()),
  itemTemplate: _.template($("#main-menu-item-tpl").html()),

  initialize: function(opt){
    this.page = opt.page;
    this.collection = opt.items;
  },
    
  render: function() {
    this.$el.html(this.template());
    var container = this.$el.find("#main-menu-container");
    var template = this.itemTemplate;
    var page = this.page;
    $(this.collection.models).each(function(i, item){
      var el = $(template(item.toJSON()));
      el.find("a").attr("id", item.get("href")).click(function(){
        container.find(".current-menu-item").removeClass("current-menu-item");
        el.addClass("current-menu-item");
        page.load(item.attributes);
      });
      container.append(el);
    });
    //container.children().first().find("a").click();
  },

  execute: function(href){

    this.$el.find("#"+href).click();
  }
  
});




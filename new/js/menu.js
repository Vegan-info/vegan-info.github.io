  
var MenuItems = Backbone.Collection.extend({
  modelId: function(attrs){
    return attrs.href;      
  }
});


  // Menu View
var MenuView = Backbone.View.extend({

  el: "#main-menu",
  template: _.template($("#main-menu-tpl").html()),
  itemTemplate: _.template($("#main-menu-item-tpl").html()),

  initialize: function(opt){
    this.page = opt.page;
  },
    
  render: function() {
    this.$el.html(this.template());
    var container = this.$el.find("#main-menu-container");
    var template = this.itemTemplate;
    var page  = this.page;
    $(this.collection.models).each(function(i, item){
      var el = $(template(item.toJSON()));
      el.find("a").click(function(){
        page.set(item);
        page.fetch();
      });
      container.append(el);
    });
    container.children().first().find("a").click();
  }
});




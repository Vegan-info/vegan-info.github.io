

var Loader = Backbone.View.extend({


  initialize: function(){

    _.bindAll(this, 'hide', 'show');

    var spinOpt = {

      lines: 13,
      length: 38,
      width: 17,
      radius: 45,
      scale: 1,
      corners: 1,
      speed: 1,
      rotate: 0,
      animation: 'spinner-line-fade-more',
      direction: 1,
      color: '#000',
      fadeColor: 'transparent',
      zIndex: 2e9,
      className: 'spinner',
      top: '50%',
      left: '50%',
      shadow: '0 0 1px transparent',
      position: 'absolute'
      
    };

    this.spinner = new Spinner(spinOpt);
  },

  render:function(){
    this.$el.append(this.spinner.el);
  },
  
  show:function(){
    this.spinner.spin(this.el);
    
  },

  hide:function(){
    this.spinner.stop();
  },

  hideWhenReady:function(){

    var self = this;
    $(document).ready(function(){
      //check if images are loaded

      var imgs = $('img');
      var totalImages = imgs.length;
      var loadedImages = 0;

      imgs.on('load', function(){
        loadedImages++;
        if(loadedImages == totalImages){
          setTimeout(function(){
            self.hide();
          },500);
        }
        
      }).each(function(){
        if(this.complete||this.error){
          $(this).trigger("load");
        }
      });
      
    });   
  }

  
});

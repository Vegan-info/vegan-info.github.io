jQuery(document).ready(function($){
// document start
 
  var page = new Page();

  var router = new PageRouter({page: page, defaultPage: "why-vegan"});
    
  // Render menu
  var menu = new MenuView({
//    page: page,
    router: router,
    items: new Menu([
        { title: "Why Go Vegan?", href: "why-vegan" },
        { title: "Arguments Against Veganism", href: "arguments" },
        { title: "Nutrition & Fitness", href: "nutrition-fitness" },
        { title: "Vegan Shopping", href: "shopping"},
        { title: "Eating Out & Restaurants", href: "restaurants"}
        // Add more menu items as needed
    ])
  });

  var view = new PageView({model: page});
  
  //var router = new PageRouter({menu: menu, page: page});

  view.render();
  menu.render();


  Backbone.history.stop();
  Backbone.history.start({pushState: true, root:"/new/"});
  /*setTimeout(function(){
      alert(Backbone.history.getFragment());
      //menu.change((Backbone.history.getFragment()||"why-vegan"), true);
  },1000)*/
//  page.render();
  

 // Navbar
/*
  $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
   
     var $this = $(this);
     if ($this.next().hasClass('show'))
        {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
        } 
        else 
        {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
        }
 });
*/

  /*$(window).on('resize', function(){
     if ($(this).width() < 1025) {
         $('html').click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $(document).click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $('.navbar-nav').click(function(e){
            e.stopPropagation();
         });
     }
 });
 // Navbar end
*/

 
/* ===== For menu animation === */
/*
  $(".navbar-toggler").click(function(){
    $(".navbar-toggler").toggleClass("open");
    $(".navbar-toggler .stick").toggleClass("open");
    $('body,html' ).toggleClass("open-nav");
});

*/
// Navbar end


/*
// fixed nav bar
$(window).scroll(function() {     
    var scroll = $(window).scrollTop();     
    if (scroll > 200) { 
        $(".main-head").addClass("fixed"); 
    } 
    else {
      $(".main-head").removeClass("fixed"); 
    }
}) 

*/



/*testimonial*/
/*
  $('.fitness-slider').slick({
  dots: false,
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  adaptiveHeight: true,
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        centerPadding: '0px',
        slidesToShow: 3,
        arrows: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1,
        arrows: true,
      }
    },
  ]
  
});

$('.eating-slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          centerPadding: '0px',
          slidesToShow: 5
        }
      },
      {
        breakpoint: 991,
        settings: {
          centerPadding: '0px',
          slidesToShow: 4
        }
      },
      {
        breakpoint:767,
        settings: {
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
    ]
    
  });

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  dots: false,
  autoplay:true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        centerPadding: '0px',
        slidesToShow: 1,
        arrows: true,
      }
    },
    
  ]
});

/*testimonial end*/
  
/*

$('#parentVerticalTab').easyResponsiveTabs({
  type: 'vertical', //Types: default, vertical, accordion
  width: 'auto', //auto or any width like 600px
  fit: true, // 100% fit in a container
  closed: 'accordion', // Start closed if in accordion view
  tabidentify: 'hor_1', // The tab groups identifier
  activate: function(event) { // Callback function if tab is switched
      var $tab = $(this);
      var $info = $('#nested-tabInfo2');
      var $name = $('span', $info);
      $name.text($tab.text());
      $info.show();
  }
});

*/


// document end

})



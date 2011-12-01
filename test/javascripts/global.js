$(function(){
  //$('.slider').flexslider();
  /*$('.iphone').flexslider({
    animation: 'slide',
    after: function (){
      
    }
  });*/
  
  $('.slider ul').carouFredSel({
    synchronise: '.iphone ul',
    pagination: {
      container: '.pagination'
    }
  });
  $('.iphone ul').carouFredSel();
  
});
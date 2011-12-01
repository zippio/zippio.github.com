$(function(){
  $('.modal').colorbox({
    inline: true,
    scrolling: false,
    onComplete: function (){
      $('.slider ul').trigger("pause", 1);
      $('.iphone ul').trigger("pause", 1);
      setTimeout(function (){
        $.colorbox.resize();
      }, 500);
    }
  });
  
  $('.slider ul').carouFredSel({
    synchronise: '.iphone ul',
    pagination: {
      container: '.pagination'
    }
  });
  $('.iphone ul').carouFredSel();
  
});
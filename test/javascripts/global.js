$(function(){
  $('#contact-form .btn-green').click(function (){
    $('.notice').show();
    var dataString = $('#contact-form').serialize();
    $.ajax({
      type: "POST",
      url: 'http://zippiosite.appspot.com/contact',
      data: dataString,
      success: function(data) {
        $('.notice').show();
      }
    });
  });
  
  $('.modal').colorbox({
    inline: true,
    scrolling: false,
    onComplete: function (){
      $('.slider ul').trigger("pause", 1);
      $('.iphone ul').trigger("pause", 1);
      setTimeout(function (){
        $.colorbox.resize();
      }, 500);
    },
    onClosed: function (){
      $('.slider ul').trigger("play", 1);
      $('.iphone ul').trigger("play", 1);
    }
  });
  
  $('.slider ul').carouFredSel({
    synchronise: '.iphone ul',
    pagination: {
      container: '.pagination'
    },
    auto: 6000
  });
  $('.iphone ul').carouFredSel({
    auto: 6000
  });
  
  
  
});
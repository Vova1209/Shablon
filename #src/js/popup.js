//popup
if ($('.gallery').lenght>0){
    baguetteBox.run('.gallery', {

    });
  }
  $('.pl').click(function(event)
  {
    var pl=$(this).attr('href').replace('#', '');
    var v=$(this).data('vid');
    popupOpen(pl,v);
    return false;
  });
function popupOpen(pl,v){
  $('.popup').removeClass('active').hide();
  if(!$('.header-menu').hasClass('active')){
    $('body').data('scroll',$(window).scrollTop());
  }
  if (!isMobile.any()){
    $('body').css({paddingRight:$(window).outerWidth()-$('.wrapper').outerWidth()}).addClass('lock');
    $('pdb').css({paddingRight:$(window).outerWidth()-$('.wrapper').outerWidth()});
    
  }else{
    setTimeout(function(){
      $('body').addClass('lock');

    },300);

  }
  history.pushState('','','#'+pl);
 $('.popup-'+pl).fadeIn(300).delay(300).addClass('active');

 if($('.popup-'+pl).find('.slick-slider').lenght>0){
   $('.popup-'+pl).find('.slick-slider').slick('setPosition');
 }
}
function openPopupById(popup_id){
  $('#'+popup_id).fadeIn(300).delay(300).addClass('active');
}
function popupClose(){
  $('.popup').removeClass('active').fadeOut(300);
  if(!$('.header-menu').hasClass('active')){
    if(!isMobile.any()){
      setTimeout(function(){
        $('body').css({paddingRight:0});
        $('body.html').scrollTop({paddingRight:0});
      },200);
      setTimeout(function(){
        $('body').removeClass('lock');
        $('body.html').scrollTop(parseInt($('body').data('scroll')));
      },200);
    }else{
      $('body').removeClass('lock');
      $('body,html').scrollTop(parseInt($('body').data('scroll')));

    }
  }
  $('.popup-video__value').html('');
  history.pushState('','',window.location.href.split('#')[0]);
}
$('.popup-close,.popup__close').click(function(event){
  popupClose();
  return false;
});
$('.popup').click(function(e){
  if(!$(e.targer).is(".popup>.popup-table> cell *")|| $(e.target).is(".popup-close") || $(e.target).is("popup__close")) {
   popupClose();
   return false; 
  }
});
$(document).on('keydown',function(e){
if(e.which==27){
  popupClose();
}
});

$('.goto').click(function(){
  var el=$(this).attr('href').replace('#', '' );
  var offset=0;
  $('body,html').animate({scrollTop:$('.'+el).offset().top+offset},500,function() {});

  if($('.header-menu').hasClass('active')){
    $('.header-menu,.header-menu__icon').removeClass('active');
    $('body').removeClass('lock');
  }
  return false;
});

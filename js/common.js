$(document).ready(function(){ // 실행틀 시작

  AOS.init();



  $(".depth2, .depth2-bg").hide();




  $(".gnb > li").mouseenter(function(){
    if($(this).children(".depth2").length){
      $(".depth2-bg").stop().fadeIn();
      $(this).children(".depth2").stop().fadeIn();
    }    
  });

  $(".gnb > li").mouseleave(function(){
    $(".depth2-bg").stop().fadeOut();
    $(this).children(".depth2").stop().fadeOut();
  });









}); // 실행틀
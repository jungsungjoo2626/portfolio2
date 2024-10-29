$(document).ready(function(){ // 실행틀 시작

  AOS.init();

  $(".page2, .page3").hide();

  $(".bt1").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page2, .page3").hide();
    $(".page1").show();
  });

  $(".bt2").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page1, .page3").hide();
    $(".page2").show();
  });

  $(".bt3").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page1, .page2").hide();
    $(".page3").show();
  });

  $(".home").click(function(){
    $(".page1, .page2").hide();
    $(".page3").show();
  });

  $(".bt1").click(function(){
    $(".sub-gnb li").removeClass("on");
    $(this).addClass("on");
  });


}); // 실행틀
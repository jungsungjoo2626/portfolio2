$(document).ready(function(){ // 실행틀 시작

  AOS.init();

  $(".page2, .page3, .page4, .page5, .page6").hide();

  $(".bt1").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page2, .page3, .page4, .page5, .page6").hide();
    $(".page1").show();
  });

  $(".bt2").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page1, .page3, .page4, .page5, .page6").hide();
    $(".page2").show();
  });

  $(".bt3").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page1, .page2, .page4, .page5, .page6").hide();
    $(".page3").show();
  });

  $(".bt4").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page2, .page3, .page1, .page5, .page6").hide();
    $(".page4").show();
  });

  $(".bt5").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page2, .page3, .page4, .page1, .page6").hide();
    $(".page5").show();
  });

  $(".bt6").click(function(){
    $(".page li").removeClass("on");
    $(this).addClass("on");
    $(".page2, .page3, .page4, .page5, .page1").hide();
    $(".page6").show();
  });







}); // 실행틀
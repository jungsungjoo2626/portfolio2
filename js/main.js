$(document).ready(function(){ // 실행틀 시작

  AOS.init();



  var deg = new Swiper(".deg", {
    autoHeight : true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    
  });

  var fin = new Swiper(".fin", {
    autoHeight : true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var des = new Swiper(".des", {
    autoHeight : true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var nft = new Swiper(".nft", {
    autoHeight : true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });

  var web = new Swiper(".web", {
    autoHeight : true,
    effect: "fade",
    fadeEffect: { crossFade: true },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
  });



}); // 실행틀
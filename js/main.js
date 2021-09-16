const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    pagination: {
      el: '.swiper-pagination',
      clickable :true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
   
  });
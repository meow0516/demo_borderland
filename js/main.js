const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    autoplay: true,
    effect : 'fade',

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

  $(document).ready(function () {
    function headerImage() {
      let scrollValue = $(window).scrollTop(); 
      if (scrollValue > 40 ){
        $('.header').find('img').height('60px');
        // console.log(scrollValue);
      }
      else{
        $('.header').find('img').height('80px');
      }
    }
  
    function progressBar(){
      let scrollValue = $(window).scrollTop();
      if (scrollValue > 550){
        $('.item-progress li:nth-child(1)').find('.progress-bar').width('35%');
        $('.item-progress li:nth-child(2)').find('.progress-bar').width('55%');
        $('.item-progress li:nth-child(3)').find('.progress-bar').width('75%');
      } 
    }

    $(window).scroll(function(){
      headerImage();
      progressBar()
    });

    
  });


  

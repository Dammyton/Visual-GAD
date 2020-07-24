//RECENT WORK CAROUSEL
new Glider(document.querySelector('.glider'), {
    slidesToShow: 6,
    slidesToScroll: 6,
    draggable: true,
    dots: '.dot',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })
  
  //FOR BURGER NAVIGATION
$(document).ready(function(){
  $('.burger').on('click', function(){
      $('body').toggleClass("open")
  })
})
$(document).ready(function(){
  $('.burger').on('click', function(){
      $('.links').toggleClass("open")
  })
})
$(document).ready(function(){
  $('.burger').on('click', function(){
      $(this).toggleClass("open")
  })
})


  // Initialize AOS
  AOS.init({
    duration: 1200,
  });

    // Welcome Text Typewriting
    var i = 0;
    var txt = 'I’m a beauty, lifestyle portrait photographer based in Queens, New York.';
    var speed = 150;
    
    function typeWriter() {
      if (i < txt.length) {
        document.getElementById("first-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
      }
    }

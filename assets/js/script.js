//RECENT WORK CAROUSEL
new Glider(document.querySelector('.glider'), {
    slidesToShow: 6,
    slidesToScroll: 6,
    draggable: true,
    dots: '.dot',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
  })

  const glider = new Glider(document.getElementById('glider'));

function sliderAuto(slider, miliseconds) {
 const slidesCount = slider.track.childElementCount;
 let slideTimeout = null;
 let nextIndex = 1;

 function slide () {
   slideTimeout = setTimeout(
     function () {
       if (nextIndex >= slidesCount ) {
         nextIndex = 0;
       }
       slider.scrollItem(nextIndex++);
     },
     miliseconds
   );
 }

 slider.ele.addEventListener('glider-animated', function() {
   window.clearInterval(slideTimeout);
   slide();
 });

 slide();
}

sliderAuto(glider, 1000)


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

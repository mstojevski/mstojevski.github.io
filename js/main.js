var menu = document.querySelector('#menu');
var main = document.querySelector('#hero');
var drawer = document.querySelector('.nav');

menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });

      main.addEventListener('click', function() {
        drawer.classList.remove('open');
});
$(function() {
     $('a[href*=#]:not([href=#])').click(function() {
       if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
         var target = $(this.hash);
         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
         if (target.length) {
           $('html,body').animate({
             scrollTop: target.offset().top
           }, 800);
           return false;
         }
       }
     });
   });

   $(document).ready(function() {
     $('.galleryItem').magnificPopup(
       {
       type:'image',

       gallery:{
         enabled:true
       },

     }

     );
   });
   $('.ui.accordion')
     .accordion()
   ;
   $('.i-social')
     .popup()
   ;

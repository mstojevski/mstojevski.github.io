//Navigation
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
// scrollTop
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

   //accordion

   $('.ui.accordion')
     .accordion()
   ;
//scrollreveal.js
window.sr = ScrollReveal({ reset: true });
sr.reveal('.rev', {
  duration: 1500,
  origin:'top',

});

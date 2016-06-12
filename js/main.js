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
window.sr = ScrollReveal({ reset: false});
sr.reveal('.rev', {
  duration: 1500,
  origin:'top',
  distance:'50px',

});
sr.reveal('.rev1', {
  duration: 1500,
  origin:'top',
  distance:'50px',
  mobile : false,

});
sr.reveal('.rev2', {
  duration: 1500,
  origin:'bottom',
  distance:'150px',

});

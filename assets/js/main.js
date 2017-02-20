//Navigation
var menu = document.querySelector('#js-menu');
var main = document.querySelector('#js-hero');
var drawer = document.querySelector('.js-primary-menu');

menu.addEventListener('click', function(e) {
        drawer.classList.toggle('open');
        e.stopPropagation();
      });

      main.addEventListener('click', function() {
        drawer.classList.remove('open');
});

// Smooth Scroll

smoothScroll.init({
  selector: '[data-scroll]', // Selector for links (must be a class, ID, data attribute, or element tag)
  selectorHeader: null, // Selector for fixed headers (must be a valid CSS selector) [optional]
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  easing: 'easeInOutCubic', // Easing pattern to use
  offset: 0, // Integer. How far to offset the scrolling anchor location in pixels
  callback: function ( anchor, toggle ) {} // Function to run after scrolling

});

   //accordion

   $('.ui.accordion')
     .accordion()
   ;
//scrollreveal.js
window.sr = ScrollReveal({ reset: false});
sr.reveal('.js-animate', {
  duration: 1500,
  origin:'top',
  distance:'50px',


});

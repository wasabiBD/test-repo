/* Activación del slider */ /*
$(document).ready(function() {
  $('.slider').slick();
}); */

/* Activación del slider CON AUTOPLAY */
$(document).ready(function() {
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
  });
});

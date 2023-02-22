$(document).ready(function () {
  $('#carousel-imagens').slick({
    autoplay: true,
    arrows: false,
  });
});

$('.menu-hamburguer').on('click', function () {
  $('nav').slideToggle();
});

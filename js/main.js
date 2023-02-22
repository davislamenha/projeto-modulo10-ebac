$(document).ready(function () {
  $('#carousel-imagens').slick({
    autoplay: true,
    arrows: false,
  });
});

$('.menu-hamburguer').on('click', function () {
  $('nav').slideToggle();
});

$('#telefone').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' });

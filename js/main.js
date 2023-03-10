// CAROUSEL IMAGENS
$(document).ready(function () {
  $('#carousel-imagens').slick({
    autoplay: true,
    arrows: false,
  });
});

// MENU HAMBURGUER TOGGLE
$('.menu-hamburguer').on('click', function () {
  $('nav').slideToggle();
});

// MASCARA
$('#telefone').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' });

// VALIDACAO
$('form').validate({
  rules: {
    nome: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    telefone: {
      required: true,
    },
    veiculoInteresse: {
      required: true,
    },
    mensagem: {
      required: true,
    },
  },
  messages: {
    nome: 'Por favor, insira seu nome',
    email: 'Este campo é obrigatório',
    telefone: 'Este campo é obrigatório',
    veiculoInteresse: 'Este campo é obrigatório',
    mensagem: 'Este campo é obrigatório',
  },
  submitHandler: function (form) {
    alert('Enviado com sucesso!');
  },
  invalidHandler: function (evento, validador) {
    let camposIncorretos = validador.numberOfInvalids();
    if (camposIncorretos)
      alert(`Quantidade de campos incorretos: ${camposIncorretos}`);
  },
});

// SCROLL LISTA PARA FORMULARIO
$('.lista-veiculos button').on('click', function () {
  const destino = $('#contato');
  const veiculo = $(this).parent().find('h3').text();

  $('#veiculo-interesse').val(veiculo);
  $('html').animate(
    {
      scrollTop: destino.offset().top,
    },
    1000,
  );
});

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

"use strict";

var form = document.getElementById('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var data = {
    nome: nome,
    email: email
  };
  var convertData = JSON.stringify(data);
  localStorage.setItem('lead', convertData);
  var content = document.getElementById('content');
  var carregando = "<p>carregando...</p>";
  var pronto = "<p>pronto</p>";
  content.innerHTML = carregando;
  setTimeout(function () {
    content.innerHTML = pronto;
  }, 1000);
});
//# sourceMappingURL=script.dev.js.map

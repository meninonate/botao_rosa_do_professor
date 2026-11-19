const botao = document.querySelector("#botao");
const titulo = document.querySelector("#titulo");
const mensagem = document.querySelector("#mensagem");
const cartao = document.querySelector("#cartao");

botao.addEventListener("click", function () {
  titulo.textContent = "JavaScript funcionando!";
  mensagem.textContent = "O clique alterou o conteúdo da página.";
  cartao.classList.toggle("destaque");
});

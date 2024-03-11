const sobreForm = document.getElementById("form");
const dadosSobre = document.getElementById("dadosSobre");
const sobre = [];

class Sobre {
  constructor(nome, musica, livro, sonho) {
    this.nome = nome;
    this.musica = musica;
    this.livro = livro;
    this.sonho = sonho;
  }
}


sobreForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const musica = document.getElementById("musica").value;
  const livro = document.getElementById("livro").value;
  const sonho = document.getElementById("sonho").value;
  const novoSobre = new Sobre(nome, musica, livro, sonho);
  sobre.push(novoSobre);

  renderizarDados();
  sobreForm.reset();
});

function renderizarDados() {
  dadosSobre.innerHTML = "";
  sobre.forEach((sobre, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${sobre.nome} <br> ${sobre.musica} <br> ${sobre.livro} <br> ${sobre.sonho} <br>`;
    const buttonEditar = document.createElement("button");
    buttonEditar.textContent = "Editar";
    buttonEditar.className = "button";
    buttonEditar.addEventListener("click", () => editarSobre(index));
    const buttonExcluir = document.createElement("button");
    buttonExcluir.textContent = "Excluir";
    buttonExcluir.className = "button";
    buttonExcluir.addEventListener("click", () => excluirSobre(index));
    li.appendChild(buttonEditar);
    li.appendChild(buttonExcluir);
    dadosSobre.appendChild(li);
  });
}

function editarSobre(index) {
  const minhoca = sobre[index];
  document.getElementById("nome").value = minhoca.nome;
  document.getElementById("musica").value = minhoca.musica;
  document.getElementById("livro").value = minhoca.livro;
  document.getElementById("sonho").value = minhoca.sonho;
  sobre.splice(index, 1);
  renderizarDados();
}

function excluirSobre(index) {
  sobre.splice(index, 1);
  renderizarDados();
}



renderizarDados();

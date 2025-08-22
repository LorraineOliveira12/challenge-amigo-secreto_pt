let amigos = [];

function adicionarAmigo() {
  const nome = document.getElementById("nome").value;
  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }
  amigos.push(nome);
  document.getElementById("nome").value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach(amigo => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortear() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos 2 amigos para sortear!");
    return;
  }
  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];
  document.getElementById("resultado").textContent = `O amigo secreto é: ${sorteado}`;
}

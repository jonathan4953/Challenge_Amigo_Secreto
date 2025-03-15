// Array para armazenar os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nomeAmigo = inputAmigo.value.trim();

    // Verifica se o nome não está vazio e não é repetido
    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
    } else if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado.");
    } else {
        alert("Por favor, digite um nome válido.");
    }

    // Limpa o campo de input
    inputAmigo.value = '';
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("É necessário inserir no mínimo dois nomes.");
        return;
    }

    // Embaralha o array de amigos
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado
    exibirResultado(amigoSorteado);
}

// Função para exibir o resultado
function exibirResultado(amigoSorteado) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ''; // Limpa o resultado anterior

    const li = document.createElement("li");
    li.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
    resultadoDiv.appendChild(li);
}

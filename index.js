// Função para alternar entre as abas Comprar e Alugar
function setAba(tipo) {
    const btnComprar = document.getElementById('btn-comprar');
    const btnAlugar = document.getElementById('btn-alugar');

    if (tipo === 'comprar') {
        btnComprar.classList.add('active');
        btnAlugar.classList.remove('active');
    } else {
        btnAlugar.classList.add('active');
        btnComprar.classList.remove('active');
    }
    
    console.log("Mudou para: " + tipo);
}

// Função para o botão de busca
function buscar() {
    const local = document.getElementById('select-local').value;
    if (local === "") {
        alert("Por favor, selecione uma localização!");
    } else {
        alert("Buscando imóveis em: " + local);
    }
}
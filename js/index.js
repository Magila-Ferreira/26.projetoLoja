// Salvar dados no LocalStorage 
function salvarProdutos() {
    if (window.localStorage) {
        let ListaProdutos = produtosIniciais();
        if (window.localStorage.getItem("produto") === null) {
            // Guardar um vetor no localStorage
            gravaDados("produto", ListaProdutos);
            mostrarProdutos();
        } else {
            mostrarProdutos();
        }
    } else {
        alert("Local Storage indisponível");
    }
}
function mostrarProdutos() {
    //  Ler do localStorage
    const produtos = localStorage.getItem("produto");
    if (produtos) {
        // Leitura dos dados do localStorage
        let lista_Produtos = lerDados("produto");
        const tabela = document.querySelector("#tabela_loja");

        for (var itemListaProdutos of lista_Produtos) {
            var tr = document.createElement("tr");

            var img = document.createElement("img");
            img.src = itemListaProdutos.url;
            img.classList.add("produto__storage__img");
            var td = document.createElement("td");
            td.appendChild(img);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var h3 = document.createElement("h3");
            h3.textContent = itemListaProdutos.id;
            var td = document.createElement("td");
            td.appendChild(h3);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var p = document.createElement("p");
            p.textContent = itemListaProdutos.descricao;
            var td = document.createElement("td");
            td.appendChild(p);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var h3 = document.createElement("h3");
            h3.textContent = valor(itemListaProdutos.valor);
            var td = document.createElement("td");
            td.appendChild(h3);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var botao = document.createElement("button");
            botao.textContent = "COMPRAR";
            botao.classList.add("add__compra");
            var td = document.createElement("td");
            td.appendChild(botao);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            tabela.appendChild(tr);
        }
    }
}
function adicionaProduto() {
    var botaoComprar = document.querySelectorAll(".add__compra");
    for (var i = 0; i < botaoComprar.length; i++) {
        botaoComprar[i].value = i;
        botaoComprar[i].addEventListener("click", addItem);
    }
    comprar(botaoComprar);
    var itensCarrinho = document.querySelector("#itens");
    var itens = lerDados("compra").length;
    function addItem() {
        itens++;
        itensCarrinho.textContent = itens;
    }
}
function comprar(botaoComprar) {
    for (var i = 0; i < botaoComprar.length; i++) {
        botaoComprar[i].addEventListener("click", function () { salvarCompras(this.value) }); 
    }
}
salvarProdutos();
adicionaProduto();
var itensCarrinho = document.querySelector("#itens");
var itens = lerDados("compra").length;
itensCarrinho.textContent = itens;

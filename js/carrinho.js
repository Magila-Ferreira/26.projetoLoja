let lista_Compras;
let itensComprados = [0, 0, 0, 0];

window.onload = function () {
    lista_Compras = lerDados("compra")
    itensComprados = quantItensComprados(lista_Compras);
    lista_ComprasOrganizadas = organizarCompras(lista_Compras);
    mostrarCompras(lista_ComprasOrganizadas, itensComprados);
    editarNumItens();
}
function quantItensComprados(lista_Compras) {
    for (const itemLista_Compras of lista_Compras) {
        switch (itemLista_Compras.id) {
            case "CPU gamer": itensComprados[0]++;
                break;
            case "Monitor gamer": itensComprados[1]++;
                break;
            case "Teclado": itensComprados[2]++;
                break;
            case "Mouse": itensComprados[3]++;
                break;
        }
    }
    return itensComprados;
}
function salvarCompras(numBotao) {
    let lista_Produtos = lerDados("produto");
    lista_Compras.push(lista_Produtos[numBotao]);

    // Guardar um vetor no localStorage
    gravaDados("compra", lista_Compras);
}
function diminuirCompra(numBotao) {
    let lista_Produtos = lerDados("produto");

    for (let i = 0; i < lista_Compras.length; i++) {
        if (lista_Produtos[numBotao].id === lista_Compras[i].id) {
            lista_Compras.splice(i, 1);
            gravaDados("compra", lista_Compras);
            break;
        }
    }
}
function deletarCompra(numBotao, qtdItensCarrinho) {
    let lista_Produtos = lerDados("produto");
    for (let i = 0; i < lista_Compras.length; i++) {
        while (lista_Produtos[numBotao].id === lista_Compras[i].id) {
            lista_Compras.splice(i, 1);
            lista_Compras = lista_Compras;
            gravaDados("compra", lista_Compras);
        }
    }
}
function organizarCompras(lista_Compras) {
    let aux = [];

    let cont = 0;
    for (const itemLista_Compras of lista_Compras) {
        let salvar = false;
        if (aux.length === 0) {
            aux[cont] = itemLista_Compras;
            cont++;
        }
        for (let i = 0; i < aux.length; i++) {
            if (itemLista_Compras.id !== aux[i].id) {
                salvar = true;
            } else {
                salvar = false;
                break;
            }
        }
        if (salvar === true) { aux[aux.length] = itemLista_Compras; }
    }
    return aux;
}
function mostrarCompras(lista_ComprasOrganizadas, itensComprados) {
    let tbCompra = document.querySelector("#tabela__carrinho");
    if (tbCompra === null) {
        return
    }
    if (lista_ComprasOrganizadas) {
        let qtdCompra = 0;

        for (const itemCompra of lista_ComprasOrganizadas) {
            if (itemCompra.id === "CPU gamer") { qtdCompra = itensComprados[0]; }
            else if (itemCompra.id === "Monitor gamer") { qtdCompra = itensComprados[1]; }
            else if (itemCompra.id === "Teclado") { qtdCompra = itensComprados[2]; }
            else if (itemCompra.id === "Mouse") { qtdCompra = itensComprados[3]; }

            let valorUnit = itemCompra.valor;
            let valorTotal = qtdCompra * valorUnit;

            var tr = document.createElement("tr");
            tr.classList.add("linha");

            var h3 = document.createElement("h3");
            h3.textContent = itemCompra.id;
            h3.classList.add("idProduto");
            var td = document.createElement("td");
            td.appendChild(h3);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var h3 = document.createElement("h3");
            h3.textContent = valor(valorUnit);
            h3.classList.add("valorUnitario");
            var td = document.createElement("td");
            td.appendChild(h3);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var h3 = document.createElement("h3");
            h3.classList.add("qtd");
            h3.textContent = qtdCompra;
            var td = document.createElement("td");
            td.appendChild(h3);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var h3 = document.createElement("h3");
            h3.textContent = valor(valorTotal);
            h3.classList.add("valorTotal");
            var td = document.createElement("td");
            td.appendChild(h3);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var btAdd = document.createElement("button");
            var btSub = document.createElement("button");
            var btDel = document.createElement("button");
            btAdd.classList.add("add");
            btSub.classList.add("sub");
            btDel.classList.add("del");
            var iAdd = document.createElement("i");
            var iSub = document.createElement("i");
            var iDel = document.createElement("i");
            iAdd.classList.add("material-icons");
            iSub.classList.add("material-icons");
            iDel.classList.add("material-symbols-outlined");
            iAdd.textContent = "add_circle";
            iSub.textContent = "do_not_disturb_on";
            iDel.textContent = "delete";
            btAdd.appendChild(iAdd);
            btSub.appendChild(iSub);
            btDel.appendChild(iDel);

            var td = document.createElement("td");

            td.appendChild(btAdd);
            td.classList.add("compra__storage");
            tr.appendChild(td);

            td.appendChild(btSub);
            td.classList.add("compra__storage");
            tr.appendChild(td);

            td.appendChild(btDel);
            td.classList.add("compra__storage");
            tr.appendChild(td);

            tbCompra.appendChild(tr);
        }
    }
}
function editarNumItens() {
    var produto = document.querySelectorAll(".linha");
    var idProduto = document.querySelectorAll(".idProduto");
    var qtdItensCarrinho = document.querySelectorAll(".qtd");

    var botaoAdd = document.querySelectorAll(".add");
    var botaoSub = document.querySelectorAll(".sub");
    var botaoDel = document.querySelectorAll(".del");

    if (botaoAdd === null || botaoSub === null || botaoDel === null) {
        return
    }
    for (var i = 0; i < botaoAdd.length; i++) {
        var id = idProduto[i].textContent;
        switch (id) {
            case "CPU gamer":
                botaoAdd[i].value = 0;
                botaoSub[i].value = 0;
                botaoDel[i].value = 0;
                break;
            case "Monitor gamer":
                botaoAdd[i].value = 1;
                botaoSub[i].value = 1;
                botaoDel[i].value = 1;
                break;
            case "Teclado":
                botaoAdd[i].value = 2;
                botaoSub[i].value = 2;
                botaoDel[i].value = 2;
                break;
            case "Mouse":
                botaoAdd[i].value = 3;
                botaoSub[i].value = 3;
                botaoDel[i].value = 3;
                break;
        }
        adicionarItens(botaoAdd[i], qtdItensCarrinho, i);
        subtrairItens(botaoSub[i], qtdItensCarrinho, i);
        excluirItens(botaoDel[i], qtdItensCarrinho, i);
    }
}
function excluirItens(item, qtdItensCarrinho, i) {
    let valorTotal = document.querySelectorAll(".valorTotal");
    item.addEventListener("click", function () {
        qtdItensCarrinho[i].textContent = 0;
        valorTotal[i].textContent = valor(0);
        deletarCompra(item.value, qtdItensCarrinho);
    })
}
function subtrairItens(item, qtdItensCarrinho, i) {
    item.addEventListener("click", function () {
        if (qtdItensCarrinho[i].textContent > 0) {
            qtdItensCarrinho[i].textContent--;
        }
        diminuirCompra(item.value);
        editarValor(qtdItensCarrinho, i);
    })
}
function adicionarItens(item, qtdItensCarrinho, i) {
    item.addEventListener("click", function () {
        qtdItensCarrinho[i].textContent++;
        salvarCompras(item.value);
        quantItensComprados(lista_Compras);
        editarValor(qtdItensCarrinho, i);
    });
}
function editarValor(qtdItensCarrinho, i) {
    let valorUnidades = document.querySelectorAll(".valorUnitario");
    let valorTotal = document.querySelectorAll(".valorTotal");

    let qtd = qtdItensCarrinho[i].textContent;
    let valorUnidade = valorUnidades[i].textContent;
    valorUnidade = formatarNumero(valorUnidade);
    let valorTotalProd = qtd * valorUnidade;
    valorTotal[i].textContent = valor(valorTotalProd);
}


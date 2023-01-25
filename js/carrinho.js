let lista_Compras;
let itensComprados = [0, 0, 0, 0];

window.onload = function () {
    lista_Compras = lerDados("compra")
    itensComprados = quantItensComprados(lista_Compras);
    lista_ComprasOrganizadas = organizarCompras(lista_Compras);
    mostrarCompras(lista_ComprasOrganizadas, itensComprados);
    editarNumItens(itensComprados);
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

// Função organizarCompras
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

            var h3 = document.createElement("h3");
            h3.textContent = itemCompra.id;
            var td = document.createElement("td");
            td.appendChild(h3);
            td.classList.add("produto__storage");
            tr.appendChild(td);

            var h3 = document.createElement("h3");
            h3.textContent = valor(valorUnit);
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
            btAdd.value = 0;
            btSub.value = 1;
            btDel.value = 2;
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
function editarNumItens(itensComprados) {
    var botaoAdd = document.querySelectorAll(".add");
    var botaoSub = document.querySelectorAll(".sub");
    var botaoDel = document.querySelectorAll(".del");
    if (botaoAdd === null || botaoSub === null || botaoDel === null) {
        return
    }

    /* ADD funcções aos botãos */
    console.log(botaoAdd);
    for (var i = 0; i < botaoAdd.length; i++) {
        botaoAdd[i].value = i;
        //botaoAdd[i].addEventListener("click", addItem(i));
    }
    console.log(botaoAdd);
    /* comprar(botaoAdd);
    var qtdItensCarrinho = document.querySelectorAll(".qtd");

    function addItem() {
        if (botao)
        itensCarrinho.textContent = itens;
    } */
}


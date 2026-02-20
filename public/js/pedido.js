const inputsPedido = document.querySelectorAll("#cadastro input");
const btFinalizarCompra = document.querySelector("#finalizar");
// CRIAR MÁSCARA CPF

window.onload = function () {
    let lista_cliente = cliente();
    salvarCliente(lista_cliente);
}
function cliente() {
    let lista_Cliente = [];

    let cliente = {
        cpf: "353.938.568-14",
        nome: "Andréa Cristina da Silva",
        email: "andera.c.s5@gmail.com",
        cep: "13.902-402",
        logradouro: "Rua Ângelo Bastos",
        numero: "26",
        bairro: "Jd. Santa Júlia",
        cidade: "Amparo",
        estado: "São Paulo"
    };
    lista_Cliente.push(cliente);
    gravaDados("clientes", lista_Cliente);
    return lista_Cliente;
}
function completaDadosCliente(dadosCliente) {
    inputsPedido[1].value = dadosCliente.nome;
    inputsPedido[2].value = dadosCliente.email;
    inputsPedido[3].value = dadosCliente.cep;
    inputsPedido[4].value = dadosCliente.logradouro;
    inputsPedido[5].value = dadosCliente.numero;
    inputsPedido[6].value = dadosCliente.bairro;
    inputsPedido[7].value = dadosCliente.cidade;
    inputsPedido[8].value = dadosCliente.estado;
}
function cadastrarCliente(lista_cliente) {
    let novoCliente = {
        cpf: cpf.value,
        nome: nome.value,
        email: email.value,
        cep: cep.value,
        logradouro: logradouro.value,
        numero: numero.value,
        bairro: bairro.value,
        cidade: cidade.value,
        estado: estado.value
    }
    console.log(novoCliente);

    //lista_cliente.push(novoCliente);
    //gravaDados("clientes", lista_cliente);
}
function salvarCliente(lista_cliente) {
    if (window.localStorage) {
        cpf.addEventListener("blur", function verificaCPF() {
            // CPF input (digitado)
            let inputCPF = cpf.value;

            if (lista_cliente.length > 0) {
                for (let item of lista_cliente) {
                    if (item.cpf === inputCPF) {
                        completaDadosCliente(item);
                        return;
                    }
                }
                // Guardar um vetor no localStorage

                // ATRIBUIR FUNÇÃO A UM BOTÃO
                cadastrarCliente(lista_cliente);
            }
        });
    } else {
        alert("Local Storage indisponível");
    }
}

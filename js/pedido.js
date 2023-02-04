var pedido = document.querySelector("#cadastro");
var cpf = pedido.querySelector("input");

window.onload = function () {
    let lista_cliente = cliente();
    salvarClientes(lista_cliente);
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
    console.log(cliente.cpf);
    return lista_Cliente;
}
function salvarClientes(lista_cliente) {
    if (window.localStorage) {
        if (window.localStorage.getItem("cpf") !== cpf.value) {
            // Guardar um vetor no localStorage
            gravaDados("clientes", lista_cliente);
        }
    } else {
        alert("Local Storage indisponível");
    }
}


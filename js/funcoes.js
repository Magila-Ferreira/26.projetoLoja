/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Intl, tabelaElement */
function lerDados(nomeChave) {
    //localStorage.clear();
    if (window.localStorage) {
        let aux = JSON.parse(
            localStorage.getItem(nomeChave));
        let dados;
        if (aux !== null) {
            dados = aux;
        } else {
            dados = [];
        }
        return dados;
    } else {
        alert("operacao não disponível");
    }
    return false;
}
function gravaDados(nomeChave, conteudo) {
    if (window.localStorage) {
        let dados = JSON.stringify(conteudo);
        localStorage.setItem(nomeChave, dados);
        //alert(dados);
    } else {
        alert("Operação não disponível.");
    }
}
function relogio() {
    let tempo = new Date;
    let h = (tempo.getHours() < 10 ? "0" : "")
        + tempo.getHours();
    let m = (tempo.getMinutes() < 10 ? "0" : "")
        + tempo.getMinutes();
    let s = (tempo.getSeconds() < 10 ? "0" : "")
        + tempo.getSeconds();
    return h + ":" + m + ":" + s;
}
function produtosIniciais() {
    let listaprodutos = [];
    let produto = {
        id: "CPU gamer",
        descricao: "CPU i5 E5-2650, gtx 1050, ram 16gb, SSD 1tb",
        valor: 5688.19,
        qtde: 2,
        //url: "https://http2.mlstatic.com/D_NQ_NP_2X_764577-MLB50160301963_062022-F.webp"
        url: "https://ae01.alicdn.com/kf/S7bb354c1ccdd47bdad688778f80d8ae31/28-ips-144hz-monitor-gamer-lcd-4k-monitores-pc-para-desktop-hd-gaming-monitores-2k-tela.jpg_Q90.jpg_.webp"
    };
    listaprodutos.push(produto);
    produto = {
        id: "Monitor gamer",
        descricao: "Monitor 28, lcd 4K 144HZ para Desktop",
        valor: 1601.79,
        qtde: 20,
        url: "https://ae01.alicdn.com/kf/S7bb354c1ccdd47bdad688778f80d8ae31/28-ips-144hz-monitor-gamer-lcd-4k-monitores-pc-para-desktop-hd-gaming-monitores-2k-tela.jpg_Q90.jpg_.webp"
    };
    listaprodutos.push(produto);
    produto = {
        id: "Teclado",
        descricao: "Teclado gamer Warrior Zuberi, com led",
        valor: 212.70,
        qtde: 10,
        url: "https://grupomassa.vtexassets.com/arquivos/ids/169920-800-auto?v=637619527037530000&width=800&height=auto&aspect=true"
    };
    listaprodutos.push(produto);
    produto = {
        id: "Mouse",
        descricao: "Mouse gamer ergonômico RGB",
        valor: 71.02,
        qtde: 5,
        url: "https://global.cdn.magazord.com.br/faciniinformatica/img/2022/08/produto/1736/01-1.png?ims=fit-in/800x800/filters:fill(white)"
    };
    listaprodutos.push(produto);
    return listaprodutos;
}
function valor(numero) {
    // formata um valor no padrão da moeda do Brasil
    return new Intl.NumberFormat("pt-BR",
        {
            style: "currency",
            currency: "BRL"
        })
        .format(numero);
    // R$
}
/* declaração 
 * valor => conteudo que será armazenado
 * nome => nome do cookie
 * duracao => tempo em milessegundos
 * obs 1 segundo é igual a 1000
 *     1 minuto é igual a 1000*60
 *     1 hora é igual a 1000*60*60
 *     1 dia é igual a 1000*60*60*24
 */
function formatarNumero(valor) {
    valor = valor?.replace(/[^\d|,]+/g, '');
    valor = valor?.replace(/,/, '.');
    return valor;
}
function criarCookie(valor, nome, duracao) {
    const d = new Date();
    d.setTime(d.getTime() + duracao);
    let expira = "expires=" + d.toUTCString();
    document.cookie = nome + "=" + JSON.stringify(valor) + ";" + expira + ";path=/";

}
function lerCookie(nome) {
    let identificacao = nome + "=";
    let cookieDecodificado = decodeURIComponent(document.cookie);
    let vetorCookies = cookieDecodificado.split(';');
    for (let i = 0; i < vetorCookies.length; i++) {
        let umcookie = vetorCookies[i];
        while (umcookie.charAt(0) === ' ') {
            umcookie = umcookie.substring(1);
        }
        if (umcookie.indexOf(identificacao) === 0) {
            return JSON.parse(umcookie.substring(identificacao.length, umcookie.length));
        }
    }
    return "";
}

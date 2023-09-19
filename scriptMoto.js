
let filter = document.querySelector(".filter");
let imgSeta = document.querySelector("#imgSeta");


function mostrarFilter() {
    if(filter.style.display == "none"){
        filter.style.display = "block";
        imgSeta.style.rotate = "180deg";
    }else {
        filter.style.display = "none";
        imgSeta.style.rotate = "360deg";
    }
    
}

let filterDucati = document.querySelector(".filterDucati");
let imgSetaDucati = document.querySelector("#imgSetaDucati");

function mostrarFilterDucati() {
    if(filterDucati.style.display == "none"){
        filterDucati.style.display = "block";
        imgSetaDucati.style.rotate = "180deg";
    }else {
        filterDucati.style.display = "none";
        imgSetaDucati.style.rotate = "360deg";
    }
    
}

let filterAdiventure = document.querySelector(".filterAdiventure");
let imgSetaAdiventure = document.querySelector("#imgSetaAdiventure");

function mostrarFilterAdiventure() {
    if(filterAdiventure.style.display == "none"){
        filterAdiventure.style.display = "block";
        imgSetaAdiventure.style.rotate = "180deg";
    }else {
        filterAdiventure.style.display = "none";
        imgSetaAdiventure.style.rotate = "360deg";
    }
    
}

// Função para passsar pagina

function ProximaPagina() {
    window.scroll({left: 1365})
}

function PaginaAnterior() {
    window.scroll({left: -1400})
}

function PaginaAnteriordaMercedes() {
    window.scroll({left: -1400})
}

function ProximaPaginadaMercedes() {
    window.scroll({left: 2750})
}

function PaginaAnteriordaAudi() {
    window.scroll({left: 1365})
}

function ProximaPaginadaAudi() {
    window.scroll({left: 2750})
}

let img = document.querySelector('#imagem img');
let Bolinha1 = document.querySelector("#Bolinha1");
let Bolinha2 = document.querySelector("#Bolinha2");

//Parte da Kawassaki

function imgFrente() {
    img.src = "../images/Motos/kawasaki.svg";
    Bolinha1.classList.add("active");
    Bolinha2.classList.remove("active");
}

function imgLado() {
    img.src = "../images/Motos/kawasaki-lado.svg";
    Bolinha1.classList.remove("active");
    Bolinha2.classList.add("active");
}

// Parte Ducati

let imgDucati = document.querySelector('#imagem-ducati');
let Bolinha1Ducati = document.querySelector("#ducati-Bolinha1");
let Bolinha2Ducati = document.querySelector("#ducati-Bolinha2");

function imgFrenteDucati() {
    imgDucati.src = "../images/Motos/ducati.svg";
    Bolinha1Ducati.classList.add("active");
    Bolinha2Ducati.classList.remove("active");
}

function imgLadoDucati() {
    imgDucati.src = "../images/Motos/ducatiLado.svg";
    Bolinha1Ducati.classList.remove("active");
    Bolinha2Ducati.classList.add("active");
}

//Parte Adivventure

let imgAdiventure = document.querySelector('#imagem-adventure');
let Bolinha1Adiventure = document.querySelector("#Adiventure-Bolinha1");
let Bolinha2Adiventure = document.querySelector("#Adiventure-Bolinha2");

function imgFrenteAdiventure() {
    imgAdiventure.src = "../images/Motos/Adiventure.svg";
    Bolinha1Adiventure.classList.add("active");
    Bolinha2Adiventure.classList.remove("active");
}

function imgLadoAdiventure() {
    imgAdiventure.src = "../images/Motos/AdiventureLado.svg";
    Bolinha1Adiventure.classList.remove("active");
    Bolinha2Adiventure.classList.add("active");
}


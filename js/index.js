// Parte da BMW

let img = document.querySelector('#imagem img');
let Bolinha1 = document.querySelector("#Bolinha1");
let Bolinha2 = document.querySelector("#Bolinha2");
let Bolinha3 = document.querySelector("#Bolinha3");

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

function imgFrente() {
    img.src = "../images/bmw.svg";
    Bolinha1.classList.add("active");
    Bolinha2.classList.remove("active");
    Bolinha3.classList.remove("active");
}

function imgLado() {
    img.src = "../images/bmw-lado.svg";
    Bolinha1.classList.remove("active");
    Bolinha2.classList.add("active");
    Bolinha3.classList.remove("active");
}

function imgTras() {
    img.src = "../images/bmw-tras.svg";
    Bolinha1.classList.remove("active");
    Bolinha2.classList.remove("active");
    Bolinha3.classList.add("active");
}

//Parte da Mercedes

let imagemMercedes = document.querySelector("#imagem-mercedes");
let MercedesBolinha1 = document.querySelector("#Mercedes-Bolinha1");
let MercedesBolinha2 = document.querySelector("#Mercedes-Bolinha2");
let MercedesBolinha3 = document.querySelector("#Mercedes-Bolinha3");

function MercedesFrente() {
    imagemMercedes.src = "../images/Mercedes.svg";
    MercedesBolinha1.classList.add("active");
    MercedesBolinha2.classList.remove("active");
    MercedesBolinha3.classList.remove("active");
}

function MercedesLado() {
    imagemMercedes.src = "../images/Mercedes-lado.svg";
    MercedesBolinha1.classList.remove("active");
    MercedesBolinha2.classList.add("active");
    MercedesBolinha3.classList.remove("active");
}

function MercedesTras() {
    imagemMercedes.src = "../images/Mercedes-tras.svg";
    MercedesBolinha1.classList.remove("active");
    MercedesBolinha2.classList.remove("active");
    MercedesBolinha3.classList.add("active");
}

//Parte da Audi

let imgAudi = document.querySelector("#imagem-audi");
let audiBolinha1 = document.querySelector("#Audi-Bolinha1");
let audiBolinha2 = document.querySelector("#Audi-Bolinha2");
let audiBolinha3 = document.querySelector("#Audi-Bolinha3");

function AudiFrente() {
    imgAudi.src = "../images/Audi.svg";
    audiBolinha1.classList.add("active");
    audiBolinha2.classList.remove("active");
    audiBolinha3.classList.remove("active");
}

function AudiLado() {
    imgAudi.src = "../images/Audi-Lado.svg";
    audiBolinha1.classList.remove("active");
    audiBolinha2.classList.add("active");
    audiBolinha3.classList.remove("active");
}

function AudiTras() {
    imgAudi.src = "../images/Audi-Tras.svg";
    audiBolinha1.classList.remove("active");
    audiBolinha2.classList.remove("active");
    audiBolinha3.classList.add("active");
}


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

let filterMercedes = document.querySelector(".filterMercedes");
let imgSetaMercedes = document.querySelector("#imgSetaMercedes");


function mostrarFilterMercedes() {
    if(filterMercedes.style.display == "none"){
        filterMercedes.style.display = "block";
        imgSetaMercedes.style.rotate = "180deg";
    }else {
        filterMercedes.style.display = "none";
        imgSetaMercedes.style.rotate = "360deg";

    }
}


let filterAudi = document.querySelector(".filterAudi");
let imgSetaAudi = document.querySelector("#imgSetaAudi");


function mostrarFilterAudi() {
    if(filterAudi.style.display == "none"){
        filterAudi.style.display = "block";
        imgSetaAudi.style.rotate = "180deg";
    }else {
        filterAudi.style.display = "none";
        imgSetaAudi.style.rotate = "360deg";

    }
}
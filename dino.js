var sueloY = 22;
var velY = 0;
var impulso = 900;
var gravedad = 2500;

var dinoPosX = 42;
var dinoPosy = sueloY;

var sueloX = 0;
var velEscenario = 1280/3;
var gameVel = 1;
var score = 0;

var parado = false;
var saltado = false;
var contenedor;
var dino;
var textoScore;
var suelo;
var gameOver;

function Start() {
    gameOver = document.querySelector(".game-over");
    suelo = document.querySelector(".suelo");
    contenedor = Document.querySelector(".contenedor");
    textoScore = Document.querySelector(".score");
    dino = Document.querySelector(".dino");
}

var time = new date ()
var deltaTime = 0;

if(document.readyState === "complete" || document.readyState === "interactive"){
    setTimeout(init,1)
} else {
    document.addEventListener("DOMContentLoaded", Init);
}

function Init(){
    time = new Date ()
    Start();
    Loop()
}

function Loop(){
    deltaTime = (new Date() - time) / 1000;
    time = new Date();
    Update()
    requestAnimationFrame(Loop)
}

function Update(){
    moverSuelo();
}

function MoverSuelo(){
    suelo += calculaDezplazamiento();
    suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
}

function calculaDezplazamiento(){
    return velEscenario * deltaTime * gameVel;
}
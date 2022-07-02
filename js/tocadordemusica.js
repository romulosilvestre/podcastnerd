
function tocarMusica1(){
    var musica1 = document.getElementById("musica1");
    musica1.play();
    
}
function pararMusica1(){
    var musica1 = document.getElementById("musica1");
    musica1.remove();
}
function pararMusica2(){
    var musica1 = document.getElementById("musica1");
    musica2.remove();
}
function pararMusica3(){
    var musica1 = document.getElementById("musica1");
    musica3.remove();
}
function tocarMusica2(){
    var musica1 = document.getElementById("musica2");
    musica2.play();
}
function tocarMusica3(){
    var musica3 = document.getElementById("musica3");
    musica3.play();
}
var btnMusicOne = document.getElementById("btnMusicOne");
btnMusicOne.onclick= function(){
    alert('Sextou... vai tocar');
    tocarMusica1();
}

var btnMusicTwo = document.getElementById("btnMusicTwo");
btnMusicTwo.onclick= function(){
    alert('Música 2');
    tocarMusica2();
}
var btnMusicTree = document.getElementById("btnMusicTree");
btnMusicTree.onclick= function(){
    alert('Música 3');
    tocarMusica3();
}
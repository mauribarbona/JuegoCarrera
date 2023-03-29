document.getElementById('player').addEventListener("mouseover",sumarpuntos);

puntos = 0;
function sumarPuntos() {
    puntos++;
    document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "</b>";
    randNum =  Math (Math.random()*500); 
    randNum2  = Math  (Math.random()*500);
    document.getElementById("player").style.marginTop =randNum + "px";
    document.getElementById("player").style.marginTop =randNum2 + "px";
}


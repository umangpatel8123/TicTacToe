var player1 ;
var player2 ;
function home(){
    player1 = document.getElementById("p1").value;
    player2 = document.getElementById("p2").value;
    sessionStorage.setItem("player1", player1);
    sessionStorage.setItem("player2", player2);
     window.open("home.html");
}

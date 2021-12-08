player1name="";
player2name="";
function gamestart(){
   player1name= localStorage.getItem("player1id")
   player2name= localStorage.getItem("player2id")
   document.getElementById("lol2").innerHTML= player2name+" :"+ 0
   document.getElementById("lol1").innerHTML= player1name+" :"+ 0
}
var player1=sessionStorage.getItem("player1");
var player2=sessionStorage.getItem("player2");
let x='X';
let o='O';
let count=0,full=0;
let win=0;
let clicked0=0;
let clicked1=0;
let clicked2=0;
let clicked3=0;
let clicked4=0;
let clicked5=0;
let clicked6=0;
let clicked7=0;
let clicked8=0;
const arr=[-1,-2,-3,-4,-5,-6,-7,-8,-9];
window.onload = function(e){ 
    document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
}
function isTie(){
  if(full===9&&win===0){
    document.getElementById("winner").innerHTML="Tie between "+player1+" and "+player2;
    document.getElementById("turn").innerHTML="";
  }
}
function checkWin() {
  if(arr[0]===arr[1]&&arr[1]===arr[2]&&win===0){
    if(arr[0]==='X'){
      document.getElementById("winner").innerHTML=player1+" wins with "+arr[0];
      document.getElementById("turn").innerHTML="";
    }
    else if(arr[0]==='O'){
      document.getElementById("winner").innerHTML=player2+" wins with "+arr[0];
      document.getElementById("turn").innerHTML="";
    }
    win++;
  }
  else if(arr[3]===arr[4]&&arr[4]===arr[5]&&win===0){
    if(arr[3]==='X'){
      document.getElementById("winner").innerHTML=player1+" wins with "+arr[3];
      document.getElementById("turn").innerHTML="";
    }
    else if(arr[3]==='O'){
      document.getElementById("winner").innerHTML=player2+" wins with "+arr[3];
      document.getElementById("turn").innerHTML="";
    }
    win++;
  }
  else if(arr[6]===arr[7]&&arr[7]===arr[8]&&win===0){
    if(arr[6]==='X'){
      document.getElementById("winner").innerHTML=player1+" wins with "+arr[6];
      document.getElementById("turn").innerHTML="";
    }
    else if(arr[6]==='O'){
      document.getElementById("winner").innerHTML=player2+" wins with "+arr[6];
      document.getElementById("turn").innerHTML="";
    }
    win++;
  }
  else if(arr[0]===arr[3]&&arr[3]===arr[6]&&win===0){
    if(arr[0]==='X'){
      document.getElementById("winner").innerHTML=player1+" wins with "+arr[0];
      document.getElementById("turn").innerHTML="";
    }
    else if(arr[0]==='O'){
      document.getElementById("winner").innerHTML=player2+" wins with "+arr[0];
      document.getElementById("turn").innerHTML="";
    }
    win++;
  }
  else if(arr[1]===arr[4]&&arr[4]===arr[7]&&win===0){
    if(arr[1]==='X'){
      document.getElementById("winner").innerHTML=player1+" wins with "+arr[1];
      document.getElementById("turn").innerHTML="";
    }
    else if(arr[1]==='O'){
      document.getElementById("winner").innerHTML=player2+" wins with "+arr[1];
      document.getElementById("turn").innerHTML="";
    }
    win++;
  }
  else if(arr[2]===arr[5]&&arr[5]===arr[8]&&win===0){
    if(arr[2]==='X'){
      document.getElementById("winner").innerHTML=player1+" wins with "+arr[2];
      document.getElementById("turn").innerHTML="";
    }
    else if(arr[2]==='O'){
      document.getElementById("winner").innerHTML=player2+" wins with "+arr[2];
      document.getElementById("turn").innerHTML="";
    }
    win++;
  }
  else if(arr[0]===arr[4]&&arr[4]===arr[8]&&win===0){
    if(arr[0]==='X'){
      document.getElementById("winner").innerHTML=player1+" wins with "+arr[0];
      document.getElementById("turn").innerHTML="";
    }
    else if(arr[0]==='O'){
      document.getElementById("winner").innerHTML=player2+" wins with "+arr[0];
      document.getElementById("turn").innerHTML="";
    }
    win++;
  }
  else if(arr[2]===arr[4]&&arr[4]===arr[6]&&win===0){
    if(arr[2]==='X'){
      document.getElementById("winner").innerHTML=player1+" wins with "+arr[2];
      document.getElementById("turn").innerHTML="";
    }
    else if(arr[2]==='O'){
      document.getElementById("winner").innerHTML=player2+" wins with "+arr[2];
      document.getElementById("turn").innerHTML="";
    }
    win++;
  }
}
const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');

t0.addEventListener('click', function() {
  if(clicked0===0&&win===0){
    if(count%2===0){
      p0.innerHTML=x;
      arr[0]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked0++;
    }
    else if(count%2===1){
      p0.innerHTML=o;
      arr[0]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
      full++;
      isTie();
      clicked0++;
    }
    checkWin();
    count++;
  }
});

t1.addEventListener('click', function() {
  if(clicked1===0&&win===0){
    if(count%2===0){
      p1.innerHTML=x;
      arr[1]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked1++;
    }
    else if(count%2===1){
      p1.innerHTML=o;
      arr[1]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
      full++;
      isTie();
      clicked1++;
    }
    checkWin();
    count++;
  }
});

t2.addEventListener('click', function() {
  if(clicked2===0&&win===0){
    if(count%2===0){
      p2.innerHTML=x;
      arr[2]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked2++;
    }
    else if(count%2===1){
      p2.innerHTML=o;
      arr[2]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
      full++;
      isTie();
      clicked2++;
    }
    checkWin();
    count++;
  }
});

t3.addEventListener('click', function() {
  if(clicked3===0&&win===0){
    if(count%2===0){
      p3.innerHTML=x;
      arr[3]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked3++;
    }
    else if(count%2===1){
      p3.innerHTML=o;
      arr[3]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
      full++;
      isTie();
      clicked3++;
    }
    checkWin();
    count++;
  }
});

t4.addEventListener('click', function() {
  if(clicked4===0&&win===0){
    if(count%2===0){
      p4.innerHTML=x;
      arr[4]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked4++;
    }
    else if(count%2===1){
      p4.innerHTML=o;
      arr[4]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
      full++;
      isTie();
      clicked4++;
    }
    checkWin();
    count++;
  }
});

t5.addEventListener('click', function() {
  if(clicked5===0&&win===0){
    if(count%2===0){
      p5.innerHTML=x;
      arr[5]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked5++;
    }
    else if(count%2===1){
      p5.innerHTML=o;
      arr[5]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x
        full++;
      isTie();
      clicked5++;
    }
    checkWin();
    count++;
  }
});

t6.addEventListener('click', function() {
  if(clicked6===0&&win===0){
    if(count%2===0){
      p6.innerHTML=x;
      arr[6]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked6++;
    }
    else if(count%2===1){
      p6.innerHTML=o;
      arr[6]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
      full++;
      isTie();
      clicked6++;
    }
    checkWin();
    count++;
  }
});

t7.addEventListener('click', function() {
  if(clicked7===0&&win===0){
    if(count%2===0){
      p7.innerHTML=x;
      arr[7]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked7++;
    }
    else if(count%2===1){
      p7.innerHTML=o;
      arr[7]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
      full++;
      isTie();
      clicked7++;
    }
    checkWin();
    count++;
  }
});

t8.addEventListener('click', function() {
  if(clicked8===0&&win===0){
    if(count%2===0){
      p8.innerHTML=x;
      arr[8]=x;
      document.getElementById("turn").innerHTML=player2+"'s turn with "+o;
      full++;
      isTie();
      clicked8++;
    }
    else if(count%2===1){
      p8.innerHTML=o;
      arr[8]=o;
      document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
      full++;
      isTie();
      clicked8++;
    }
    checkWin();
    count++;
  }
});
var swp=document.getElementById("swap");
if(count!=0){
  swp.remove();
}


// Swaping

function swapVariables() {
  let temp = player1;
  player1 = player2;
  player2 = temp;
  document.getElementById("turn").innerHTML=player1+"'s turn with "+x;
  document.getElementById("winner").innerHTML="";
  console.log(`player 1: ${player1}, player 2: ${player2}`);
}

var swap=document.getElementById("swap");
let temp;

swap.addEventListener('click', function() {
  swapVariables();
  arr[0]=-1;
  arr[1]=-2;
  arr[2]=-3;
  arr[3]=-4;
  arr[4]=-5;
  arr[5]=-6;
  arr[6]=-7;
  arr[7]=-8;
  arr[8]=-9;
  x='X';
  o='O';
  count=0,full=0;
  win=0;
  clicked0=0;
  clicked1=0;
  clicked2=0;
  clicked3=0;
  clicked4=0;
  clicked5=0;
  clicked6=0;
  clicked7=0;
  clicked8=0;
  p0.innerHTML="";
  p1.innerHTML="";
  p2.innerHTML="";
  p3.innerHTML="";
  p4.innerHTML="";
  p5.innerHTML="";
  p6.innerHTML="";
  p7.innerHTML="";
  p8.innerHTML="";
}
  );


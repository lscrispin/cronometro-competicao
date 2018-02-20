function setup() {
  createCanvas(1366, 768);
}

var counterS = 0;
var counterM = 3;
var sc = "00";
var mn = "03";
var count = false;
var interval;
var gi1Color = [0, 0, 0] ;
var gi2Color = [0, 0, 255];
var g1P = 0;
var g2P = 2;
var c1 = [0,0,0];
var c1V = "00";
var c1P = "00";
var c2 = [0,0,0];
var c2V = "00";
var c2P = "00";
var show = true;

function draw() {
  background(0);
  fill(gi1Color);
  rect(40,40,200,200);
  if(g1P == 3){
    fill(255, 255, 0);
    triangle(40,40, 40, 240, 240, 40);
  }
  fill(255, 255, 0);
  rect(280,40,200,200);
  textSize(180);
  fill(0);
  text(c1V, 280, 205);
  fill(255, 0, 0);
  rect(520, 40, 200, 200);
  fill(0);
  textSize(200);
  text(c1[1], 565, 210);
  fill(255);
  rect(760, 40, 200, 200);
  fill(0);
  textSize(180);
  text(c1P, 760, 205);
  fill(gi2Color);
  rect(40,280,200,200);
  fill(255, 255, 0);
  rect(280,280,200,200);
  fill(0);
  text(c2V, 280, 450);
  fill(255, 0, 0);
  rect(520, 280, 200, 200);
  fill(0);
  textSize(200);
  text(c2[1], 565, 450);
  fill(255);
  rect(760, 280, 200, 200);
  fill(0);
  textSize(180);
  text(c2P, 760, 450);
  if(show == true){
    fill(255);
  } else {
    fill(0);
  }
  textSize(200);
  text(mn, 510, 670);
  text(sc, 750, 670);
}

function mouseClicked(){
  var giColors = [[0, 0, 0], [255,255,255], [0,0,255], [255, 0, 0]]
  if(mouseX > 40 && mouseX < 240 && mouseY > 40 && mouseY < 240){
    g1P ++;
    if(g1P === 4){
      g1P = 0;
    }
    gi1Color = giColors[g1P];
  }else if(mouseX > 40 && mouseX < 240 && mouseY > 280 && mouseY < 480){
    g2P ++;
    if(g2P === 3){
      g2P = 0;
    }
    gi2Color = giColors[g2P];
  }else if(mouseX > 280 && mouseX <480 && mouseY > 40 && mouseY < 240){
    c1[0] ++;
    if(c1[0].toString().length == 1){
      c1V = "0" + c1[0].toString();
    }else{
      c1V = c1[0].toString();
    }
  }else if(mouseX > 280 && mouseX <480 && mouseY > 280 && mouseY < 480){
    c2[0] ++;
    if(c2[0].toString().length == 1){
      c2V = "0" + c2[0].toString();
    }else{
      c2V = c2[0].toString();
    }
  }else if(mouseX > 520 && mouseX < 720 && mouseY > 40 && mouseY < 240){
    c1[1]++;
  }else if(mouseX > 520 && mouseX < 720 && mouseY > 280 && mouseY < 480){
    c2[1]++;
  }else if(mouseX > 760 && mouseX <960 && mouseY > 40 && mouseY < 240){
    c1[2] ++;
    if(c1[2].toString().length == 1){
      c1P = "0" + c1[2].toString();
    }else{
      c1P = c1[2].toString();
    }
  }else if(mouseX > 760 && mouseX <960 && mouseY > 280 && mouseY < 480){
    c2[2] ++;
    if(c2[2].toString().length == 1){
      c2P = "0" + c2[2].toString();
    }else{
      c2P = c2[2].toString();
    }
  }
  
}

function keyPressed(){
  if(keyCode == 32){
    if(count == false){
    count = true;
    interval = setInterval(timeIt, 1000);
    }else{
      counterS = 0;
      counterM = 3;
      sc = "00";
      mn = "03";
      count = false;
      gi1Color = [0, 0, 0] ;
      gi2Color = [0, 0, 255];
      g1P = 0;
      g2P = 2;
      c1 = [0,0,0];
      c1V = "00";
      c1P = "00";
      c2 = [0,0,0];
      c2V = "00";
      c2P = "00";
      clearInterval(interval);
    }
  }else if(keyCode == 80){
    if(count == false){
      count = true;
      interval = setInterval(timeIt, 1000);
    } else {
      clearInterval(interval);
      count = false;
    }
  }else if(keyCode == 38){
    if(count == false){
      counterM ++;
      if(counterM == 11){
        counterM = 3;
      }
      if(counterM.toString().length == 1){
        mn = "0" + counterM.toString();
      } else {
        mn = counterM.toString();
      }
    }
  }else if(keyCode == 40){
    if(count == false){
      counterM --;
      if(counterM == 3){
        counterM = 10;
      }
      if(counterM.toString().length == 1){
        mn = "0" + counterM.toString();
      } else {
        mn = counterM.toString();
      }
    }
  }
}

function timeIt(){
  if((counterM > 0) || (counterM == 0 && counterS > 0)){
    counterS --;
  }
  if(counterS == -1){
    counterM --;
    counterS = 59;
  }
  if(counterS.toString().length == 1){
    sc = "0" + counterS.toString();
  } else { 
    sc = counterS.toString();
  }
  if(counterM.toString().length == 1){
    mn = "0" + counterM.toString();
  } else {
    mn = counterM.toString();
  }
  if(counterM == 0 && counterS == 0){
    var blimpInterval = setInterval(blimp(), 500);
  }
}

function blimp(){
  if(show == true){
    show = false;
  }else{
    show = true;
  }
}
var resx = 1920;
var resy = 1080;
function setup() {
  createCanvas(resx, resy);
}
var sizeSq = 350;
var sizeGapX = -(4*sizeSq-resx)/5;
var sizeGapY = 30;

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
  background(120);
  noStroke();
  textAlign(CENTER, CENTER);
  fill(gi1Color);
  rect(sizeGapX, sizeGapY, sizeSq, sizeSq);
  if(g1P == 3){
    fill(255, 255, 0);
    triangle(sizeGapX, sizeGapY, sizeGapX, sizeGapY + sizeSq, sizeGapX + sizeSq, sizeGapY);
  }
  fill(255);
  rect(sizeGapX*2 + sizeSq, sizeGapY, sizeSq, sizeSq);
  /*558, 30*/
  textSize(sizeSq - 20);
  fill(0);
  text(c1V, sizeGapX*2 + sizeSq + sizeSq/2,sizeGapY+sizeSq/2);
  fill(255, 0, 0);
  rect(sizeGapX*3 + sizeSq*2, sizeGapY, sizeSq, sizeSq);
  fill(0);
  textSize(sizeSq);
  text(c1[1], sizeGapX*3 + sizeSq*2 + sizeSq/2, sizeGapY+sizeSq/2);
  fill(255, 255,0);
  rect(sizeGapX*4 + sizeSq*3, sizeGapY, sizeSq, sizeSq);
  fill(0);
  textSize(sizeSq - 20);
  text(c1P,sizeGapX*4 + sizeSq*3 + sizeSq/2, sizeGapY+sizeSq/2);
  fill(gi2Color);
  rect(sizeGapX, sizeGapY*2 + sizeSq, sizeSq, sizeSq);
  fill(255);
  rect(sizeGapX*2 + sizeSq,sizeGapY*2 + sizeSq, sizeSq, sizeSq);
  fill(0);
  text(c2V,  sizeGapX*2 + sizeSq + sizeSq/2, sizeGapY*2+sizeSq+sizeSq/2);
  fill(255, 0, 0);
  rect(sizeGapX*3 + sizeSq*2,sizeGapY*2 + sizeSq,sizeSq, sizeSq);
  fill(0);
  textSize(sizeSq);
  text(c2[1], sizeGapX*3 + sizeSq*2 + sizeSq/2, sizeGapY*2+sizeSq+sizeSq/2);
  fill(255, 255, 0);
  rect(sizeGapX*4 + sizeSq*3,sizeGapY*2 + sizeSq, sizeSq, sizeSq);
  fill(0);
  textSize(sizeSq - 20);
  text(c2P, sizeGapX*4 + sizeSq*3 + sizeSq/2, sizeGapY*2+sizeSq+sizeSq/2);
  if(show == true){
    fill(0);
  } else {
    fill(255);
  }
  textSize(350);
  text(mn+":"+sc, 3*sizeGapX + 3*sizeSq + sizeGapX/2,(2*sizeGapY+2*sizeSq) + (resy - (2*sizeGapY+2*sizeSq))/2);
}

function mouseClicked(){
  var giColors = [[0, 0, 0], [255,255,255], [0,0,255], [255, 0, 0]]
  if(mouseX > sizeGapX && mouseX < sizeGapX + sizeSq && mouseY > sizeGapY && mouseY < sizeGapY + sizeSq){
    g1P ++;
    if(g1P === 4){
      g1P = 0;
    }
    gi1Color = giColors[g1P];
  }else if(mouseX > sizeGapX && mouseX < sizeGapX + sizeSq && mouseY > sizeGapY*2 + sizeSq && mouseY < sizeGapY*2 + sizeSq*2){
    g2P ++;
    if(g2P === 3){
      g2P = 0;
    }
    gi2Color = giColors[g2P];
  }else if(mouseX > sizeGapX*2 + sizeSq && mouseX < sizeGapX*2 + sizeSq * 2 && mouseY > sizeGapY && mouseY < sizeGapY + sizeSq){
    c1[0] ++;
    if(c1[0].toString().length == 1){
      c1V = "0" + c1[0].toString();
    }else{
      c1V = c1[0].toString();
    }
  }else if(mouseX > sizeGapX*2 + sizeSq && mouseX < sizeGapX*2 + sizeSq * 2 && mouseY > sizeGapY*2 + sizeSq && mouseY < sizeGapY*2 + sizeSq*2){
    c2[0] ++;
    if(c2[0].toString().length == 1){
      c2V = "0" + c2[0].toString();
    }else{
      c2V = c2[0].toString();
    }
  }else if(mouseX > sizeGapX*3 + sizeSq*2 && mouseX < sizeGapX*3 + sizeSq * 3 && mouseY > sizeGapY && mouseY < sizeGapY + sizeSq){
    c1[1]++;
  }else if(mouseX > sizeGapX*3 + sizeSq*2 && mouseX < sizeGapX*3 + sizeSq * 3 && mouseY > sizeGapY*2 + sizeSq && mouseY < sizeGapY*2 + sizeSq*2){
    c2[1]++;
  }else if(mouseX > sizeGapX*4 + sizeSq*3 && mouseX < sizeGapX*4 + sizeSq * 4 && mouseY > sizeGapY && mouseY < sizeGapY + sizeSq){
    c1[2] ++;
    if(c1[2].toString().length == 1){
      c1P = "0" + c1[2].toString();
    }else{
      c1P = c1[2].toString();
    }
  }else if(mouseX > sizeGapX*4 + sizeSq*3 && mouseX < sizeGapX*4 + sizeSq * 4 && mouseY > sizeGapY*2 + sizeSq && mouseY < sizeGapY*2 + sizeSq*2){
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
      if(counterM == 2){
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
var resx = 1920;
var resy = 1080;

var img;

function setup() {
  createCanvas(resx, resy);
}
var sizeSq = 350;
var sizeGapX = -(4*sizeSq-resx)/5;
var sizeGapY = 30;

var counterS = 0;
var counterM = 3;

var sc = "00";
var mn = "02";

var ready = true;
var count = false;

var interval;
var blimpInterval;
var blimpS = false;

var gi1Color = [0, 0, 0] ;
var gi2Color = [0, 0, 255];
var g1P = 0;
var g2P = 2;

var c1 = [0,0,0];
var c2 = [0,0,0];
var show = true;

function draw() {
  textFont();
  background(0);

  strokeWeight(4);

  stroke(255);

  textAlign(CENTER, CENTER);

  fill(gi1Color);
  rect(sizeGapX, sizeGapY, sizeSq, sizeSq);
  if(g1P == 3){
    noStroke();
    fill(255, 255, 0);
    triangle(sizeGapX+2, sizeGapY+2, sizeGapX+2, sizeGapY + sizeSq-1, sizeGapX + sizeSq-1, sizeGapY+2);
  }
  noStroke();
  fill(255);
  rect(sizeGapX*2 + sizeSq, sizeGapY, sizeSq, sizeSq);
  rect(sizeGapX + sizeSq + (sizeGapX - 50)/2, sizeGapY + sizeSq - 50, 50, 50);
  /*558, 30*/
  fill(0);
  textSize(55);
  text("-", sizeGapX + sizeSq + sizeGapX/2, sizeGapY + sizeSq - 25);
  textSize(sizeSq - 20);
  text(c1[0], sizeGapX*2 + sizeSq + sizeSq/2,sizeGapY+sizeSq/2);
  fill(255, 0, 0);
  rect(sizeGapX*3 + sizeSq*2, sizeGapY, sizeSq, sizeSq);
  rect(sizeGapX*2 + sizeSq*2 + (sizeGapX - 50)/2, sizeGapY + sizeSq - 50, 50, 50);
  fill(0);
  text(c1[1], sizeGapX*3 + sizeSq*2 + sizeSq/2, sizeGapY+sizeSq/2);
  textSize(55);
  text("-", sizeGapX*2 + sizeSq*2 + sizeGapX/2, sizeGapY + sizeSq - 25);
  fill(255, 255,0);
  rect(sizeGapX*4 + sizeSq*3, sizeGapY, sizeSq, sizeSq);
  rect(sizeGapX*3 + sizeSq*3 + (sizeGapX - 50)/2, sizeGapY + sizeSq - 50, 50, 50);
  fill(0);
  textSize(55);
  text("-", sizeGapX*3 + sizeSq*3 + sizeGapX/2, sizeGapY + sizeSq - 25);
  textSize(sizeSq - 20);
  text(c1[2],sizeGapX*4 + sizeSq*3 + sizeSq/2, sizeGapY+sizeSq/2);
  fill(gi2Color);
  stroke(255);
  rect(sizeGapX, sizeGapY*2 + sizeSq, sizeSq, sizeSq);
  fill(255);
  rect(sizeGapX*2 + sizeSq,sizeGapY*2 + sizeSq, sizeSq, sizeSq);
  fill(0);
  noStroke();
  text(c2[0],  sizeGapX*2 + sizeSq + sizeSq/2, sizeGapY*2+sizeSq+sizeSq/2);
  fill(255, 0, 0);
  rect(sizeGapX*3 + sizeSq*2,sizeGapY*2 + sizeSq,sizeSq, sizeSq);
  fill(0);
  text(c2[1], sizeGapX*3 + sizeSq*2 + sizeSq/2, sizeGapY*2+sizeSq+sizeSq/2);
  fill(255, 255, 0);
  rect(sizeGapX*4 + sizeSq*3,sizeGapY*2 + sizeSq, sizeSq, sizeSq);
  fill(0);
  textSize(sizeSq - 20);
  text(c2[2], sizeGapX*4 + sizeSq*3 + sizeSq/2, sizeGapY*2+sizeSq+sizeSq/2);
  fill(255);
  rect(sizeGapX + sizeSq + (sizeGapX - 50)/2, sizeGapY*2 + sizeSq*2 - 50, 50, 50);
  fill(255,0,0);
  rect(sizeGapX*2 + sizeSq*2 + (sizeGapX - 50)/2, sizeGapY*2 + sizeSq*2 - 50, 50, 50);
  fill(255,255,0);
  rect(sizeGapX*3 + sizeSq*3 + (sizeGapX - 50)/2, sizeGapY*2 + sizeSq*2 - 50, 50, 50);
  fill(0);
  textSize(55);
  text("-", sizeGapX + sizeSq + sizeGapX/2, sizeGapY*2 + sizeSq*2 - 25);
  text("-", sizeGapX*2 + sizeSq*2 + sizeGapX/2, sizeGapY*2 + sizeSq*2 - 25);
  text("-", sizeGapX*3 + sizeSq*3 + sizeGapX/2, sizeGapY*2 + sizeSq*2 - 25);
  if(show){
    fill(255);
  } else {
    fill(0);
  }
  textSize(350);
  text(mn+":"+sc, 3*sizeGapX + 3*sizeSq + sizeGapX/2,(2*sizeGapY+2*sizeSq) + (resy - (2*sizeGapY+2*sizeSq))/2);
  textSize(280);
  fill(0);
  stroke(255);
  strokeWeight(10);
  text("AEJJB", sizeGapX + sizeSq + sizeGapX/2, (2*sizeGapY+2*sizeSq) + (resy - (2*sizeGapY+2*sizeSq))/2 - sizeGapY);
  noStroke();
  fill(255, 0, 0);
  rect( 2*sizeGapX + sizeSq -100, 2*sizeSq + 2*sizeGapY+250, 100, 50);
  textSize(25);
  fill(255);
  text("RESET",  2*sizeGapX + sizeSq -50, 2*sizeSq + 2*sizeGapY+275);
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
  }else if(mouseX > sizeGapX*2 + sizeSq && mouseX < sizeGapX*2 + sizeSq * 2 && mouseY > sizeGapY*2 + sizeSq && mouseY < sizeGapY*2 + sizeSq*2){
    c2[0] ++;
  }else if(mouseX > sizeGapX*3 + sizeSq*2 && mouseX < sizeGapX*3 + sizeSq * 3 && mouseY > sizeGapY && mouseY < sizeGapY + sizeSq){
    c1[1]++;
  }else if(mouseX > sizeGapX*3 + sizeSq*2 && mouseX < sizeGapX*3 + sizeSq * 3 && mouseY > sizeGapY*2 + sizeSq && mouseY < sizeGapY*2 + sizeSq*2){
    c2[1]++;
  }else if(mouseX > sizeGapX*4 + sizeSq*3 && mouseX < sizeGapX*4 + sizeSq * 4 && mouseY > sizeGapY && mouseY < sizeGapY + sizeSq){
    c1[2] ++;
  }else if(mouseX > sizeGapX*4 + sizeSq*3 && mouseX < sizeGapX*4 + sizeSq * 4 && mouseY > sizeGapY*2 + sizeSq && mouseY < sizeGapY*2 + sizeSq*2){
    c2[2] ++;
  }else if(mouseX > 2 * sizeGapX + sizeSq -100 && mouseX <  2 * sizeGapX + sizeSq && mouseY > 2 * sizeSq + 2 * sizeGapY + 250 && mouseY < 2 * sizeSq + 2 * sizeGapY + 300){
    if(!count || (!ready && counterM === 0 && counterS === 0) || ready){
      counterS = 0;
      counterM = 2;
      sc = "00";
      mn = "02";
      count = false;
      ready = true;
      show = true;
      c1 = [0,0,0];
      c1V = "00";
      c1P = "00";
      c2 = [0,0,0];
      c2V = "00";
      c2P = "00";
      clearInterval(interval);
      blimpS = false;
      clearInterval(blimpInterval);
    }
  }else if(mouseX > sizeGapX + sizeSq + (sizeGapX - 50)/2 && mouseX < sizeGapX + sizeSq + (sizeGapX - 50)/2 + 50 && mouseY > sizeGapY + sizeSq - 50 && mouseY < sizeGapY + sizeSq){
    if(c1[0] > 0){
      c1[0] --;
    }
  }else if(mouseX > sizeGapX*2 + sizeSq*2 + (sizeGapX - 50)/2 && mouseX < sizeGapX*2 + sizeSq*2 + (sizeGapX - 50)/2 + 50 && mouseY > sizeGapY + sizeSq - 50 && mouseY < sizeGapY + sizeSq){
    if(c1[1] > 0){
      c1[1] --;
    }
  }else if(mouseX > sizeGapX*3 + sizeSq*3 + (sizeGapX - 50)/2 && mouseX < sizeGapX*3 + sizeSq*3 + (sizeGapX - 50)/2 + 50 && mouseY > sizeGapY + sizeSq - 50 && mouseY < sizeGapY + sizeSq){
    if(c1[2] > 0){
      c1[2] --;
    }
  }else if(mouseX > sizeGapX + sizeSq + (sizeGapX - 50)/2 && mouseX < sizeGapX + sizeSq + (sizeGapX - 50)/2 + 50 && mouseY > sizeGapY*2 + sizeSq*2 - 50 && mouseY < sizeGapY*2 + sizeSq*2){
    if(c2[0] > 0){
      c2[0] --;
    }
  }else if(mouseX > sizeGapX*2 + sizeSq*2 + (sizeGapX - 50)/2 && mouseX < sizeGapX*2 + sizeSq*2 + (sizeGapX - 50)/2 + 50 && mouseY > sizeGapY*2 + sizeSq*2 - 50 && mouseY < sizeGapY*2 + sizeSq*2){
    if(c2[1] > 0){
      c2[1] --;
    }
  }else if(mouseX > sizeGapX*3 + sizeSq*3 + (sizeGapX - 50)/2 && mouseX < sizeGapX*3 + sizeSq*3 + (sizeGapX - 50)/2 + 50 && mouseY > sizeGapY*2 + sizeSq*2 - 50 && mouseY < sizeGapY*2 + sizeSq*2){
    if(c2[2] > 0){
      c2[2] --;
    }
  }

}

function keyPressed(){
  if(keyCode == 32){/*SPACE*/
    if((!ready && counterM === 0 && counterS === 0)||ready){
      counterS = 0;
      counterM = 2;
      sc = "00";
      mn = "02";
      count = false;
      ready = true;
      show = true;
      c1 = [0,0,0];
      c1V = "00";
      c1P = "00";
      c2 = [0,0,0];
      c2V = "00";
      c2P = "00";
      clearInterval(interval);
      blimpS = false;
      clearInterval(blimpInterval);
    }
  }else if(keyCode == 80){/*P*/
    if(count == false){
      ready = false;
      count = true;
      interval = setInterval(timeIt, 1000);
    } else {
      ready = false;
      clearInterval(interval);
      count = false;
    }
  }else if(keyCode == 38){
    if(count == false && ready == true){
      counterM ++;
      if(counterM == 11){
        counterM = 2;
      }
      if(counterM.toString().length == 1){
        mn = "0" + counterM.toString();
      } else {
        mn = counterM.toString();
      }
    }
  }else if(keyCode == 40){
    if(count == false && ready == true){
      counterM --;
      if(counterM == 1){
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
    ready = false;
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
  if(counterM == 0 && counterS == 0 && blimpS == false){
    blimpS = true;
    blimpInterval = setInterval(blimp, 100);
  }
}

function blimp(){
  if(show == true){
    show = false;
  }else{
    show = true;
  }
}

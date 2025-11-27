bg = 230;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(bg);

  noStroke();
  fill(40, 20, 10);
  ellipse(300, 240, 280, 320);

  fill(255, 235, 210);
  ellipse(300, 200, 200, 230);

  fill(40, 20, 10);
  arc(300, 155, 220, 150, PI, TWO_PI);
  rect(190, 155, 220, 45);

  fill(255, 235, 210);
  ellipse(205, 205, 26, 40);
  ellipse(395, 205, 26, 40);

  fill(255);
  ellipse(260, 220, 48, 30);
  ellipse(340, 220, 48, 30);

  fill(0);
  ellipse(260, 220, 18, 18);
  ellipse(340, 220, 18, 18);

  fill(255);
  ellipse(255, 215, 5, 5);
  ellipse(335, 215, 5, 5);

  stroke(20);
  strokeWeight(4);
  line(236, 208, 284, 208);
  line(316, 208, 364, 208);

  noStroke();
  stroke(40, 20, 10);
  strokeWeight(3);
  line(252, 206, 246, 199);
  line(260, 207, 260, 198);
  line(268, 206, 274, 199);
  line(332, 206, 326, 199);
  line(340, 207, 340, 198);
  line(348, 206, 354, 199);

  noStroke();
  fill(40, 20, 10);
  rect(235, 195, 50, 6, 3);
  rect(315, 195, 50, 6, 3);

  fill(245, 215, 190);
  triangle(295, 230, 305, 230, 300, 248);

  fill(255, 120, 140, 60);
  ellipse(245, 245, 34, 22);
  ellipse(355, 245, 34, 22);

  fill(190, 50, 90);
  arc(300, 275, 50, 28, 0, PI);

  fill(255, 235, 210);
  rect(280, 310, 40, 50, 8);

  fill(20);
  rect(200, 330, 200, 80, 10);

  fill(40);
  triangle(200, 330, 260, 330, 230, 380);
  triangle(400, 330, 340, 330, 370, 380);

  fill(240);
  rect(270, 340, 60, 70);

  fill(200);
  rect(298, 330, 4, 80);
  rect(230, 360, 30, 4);
  rect(340, 370, 30, 4);
  ellipse(220, 340, 6, 6);
  ellipse(380, 340, 6, 6);

  noFill();
  stroke(235);
  strokeWeight(3);
  ellipse(205, 235, 26, 26);
  ellipse(395, 235, 26, 26);

  noStroke();
}

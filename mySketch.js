function setup() {
	createCanvas(windowWidth, windowHeight);
	background("#001524");
}

function drawFlower(clr1,clr2,size=1) {
	push()
		if(clr1){
			fill(clr1);
		  }
		else{
		  fill("#F1DCA7")
		  }
		//fill("#E8DDB5");
		ellipse(0, 0, 50);		//目前此圓，仍以圓心為座標點
		ellipseMode(CORNER) ;  // 設定以左上角為座標點上的座標
	  if(clr1){
			fill(clr2);
		  }
		else{
		  fill("#FFCB69")
		  }
		//fill("#B2C9AB")
	  for(let i = 0; i < 16; i++){
			rotate(PI/8)
			ellipse(30, -20, 100*size, 30);
			line(30,-5,120*size,-5)
		}
	  
	pop()
	
}
var colors1 = ["#ccd5ae","#e9edc9","#fefae0","#faedcd","#d4a373"]
var colors2 = ["#d4e09b","#f6f4d2","#cbdfbd","#f19c79","#a44a3f"]
var positionListX=[1200,600,200,1000,1500]//設定X軸的位置
var positionListY=[160,400,600,800,570]//設定Y軸的位置
function draw() {
	background("#001524");
	var count=0
	for(var i=0; i<positionListX.length; i++)//設定i在有的數值裡
	{
			push();
			translate(positionListX[i],positionListY[i]); //設定位置
			rotate(frameCount/55)
			drawFlower(colors1[count%colors1.length],colors2[count%colors2.length],map(mouseX,0,width,0,1.5));
			count=count+1
			pop();
			
		}
	}
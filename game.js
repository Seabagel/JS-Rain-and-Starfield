canvas = document.getElementById('game');
context = canvas.getContext('2d');

window.onload = function() {
    setInterval(update, 1000/60);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

/*
function rain() {
    x : 500,
    y : 250,
    d : 25,
    vx : 6,
    vy : 4
};
*/

var downpour = new Array(110);

//Rain Constructor
function rain(x,y,d,vy, acc) {
	this.x = x;
	this.y = y;
	this.d = d;
	this.vy = vy;
	this.r = Math.floor(Math.random() * 255);
	this.g = Math.floor(Math.random() * 255);
	this.b = Math.floor(Math.random() * 255);
	this.acc = acc
}

//Initialize Rain
for (i=0; i < downpour.length; i++){
	x = Math.floor(Math.random() * window.innerWidth);
	d = Math.floor(Math.random() * 3) + 3;
	y = 0 - Math.floor(Math.random() * window.innerHeight);
	vy = Math.floor(Math.random() * 8) + 4;
	acc = Math.random() * 1;
	downpour[i] = new rain(x, y, d, vy, acc);
}

/*
var ball = {
    x : 500,
    y : 250,
    d : 16,
    vy : 8
};
*/

function update() {
	/*
    ball.y += ball.vy;


    if(ball.y > canvas.height) {
        ball.x = Math.floor(Math.random() * canvas.width) - ball.d;
		ball.y = 0 - ball.d;
    };*/

    //Draws the background
    context.fillStyle = 'rgb(10,15,20)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //Rain Droplets
	for (j=0; j < downpour.length; j++){
		//Draw
		downpour[j].vy += downpour[j].acc
		downpour[j].y += downpour[j].vy
		
		if(downpour[j].y > canvas.height) {
			downpour[j].x = Math.floor(Math.random() * canvas.width) - downpour[j].d;
			downpour[j].y = 0 - downpour[j].d;
			downpour[j].vy = Math.floor(Math.random() * 3) + 3;
			downpour[j].acc = Math.random() * 1;
		};
		
		//Update
		context.fillStyle = 'cyan';
		//context.fillStyle = 'rgb(' + downpour[j].r + ',' + downpour[j].g + ',' + downpour[j].b + ')';
		context.fillRect(downpour[j].x, downpour[j].y, downpour[j].d/2, downpour[j].d);
	}
	
	
	//Draw Ball
    //context.fillStyle = 'lightblue';
    //context.fillRect(ball.x, ball.y, ball.d/2, ball.d);
};

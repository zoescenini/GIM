function setup() {
	createCanvas(windowWidth, windowHeight)
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight)
}

function draw() {
	background('#002AC9')

	translate(width/2, height/2 - 40)
	

	noStroke()
	fill(255) 

	push()
	rotate(TAU / 12 * (hour() % 12) + TAU / 12 / 60 * minute())
	rect(-8, -99, 24, -130)
	triangle(36, -200, -30, -200, 5, -270);
	pop()

	push()
	rotate(TAU / 60 * minute())
	rect(-8, -99, 24, -190)
	triangle(36, -280, -30, -280, 5, -350);
	pop()

	rotate(-PI/2);
	const m = (new Date()) .getMilliseconds() / 1000 * TAU / 60
	const secondAngle = TAU / 60 * second() + m
	arc(0, 0, 200, 200, 0, secondAngle);

	noFill()
	stroke (255)
	circle(0, 0, 200)

	fill('#002AC9');
	circle(0, 0, 150);

	

}


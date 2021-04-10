class Mango {
	constructor(x, y, radius) {
		var options = {
			isStatic: true,
			restitution: 0,
			friction: 1
		};
		this.body = Bodies.circle(x, y, radius, options);
		this.radius = radius;
		this.x = x;
		this.y = y;
		this.image = loadImage('PluckingMangoes/mango.png');
	}
	display() {
		//ellipseMode(RADIUS);
		//ellipse(this.body.position.x, this.body.position.y, this.radius);
		imageMode(CENTER);
		image(this.image, this.x, this.y, this.radius * 3, this.radius * 3);
	}
}

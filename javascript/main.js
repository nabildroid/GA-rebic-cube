frame_speed = 5
const COLORS = {
	RED: "red",
	WHITE: "white",
	ORANGE: "orange",
	YELLOW: "yellow",
	GREEN: "green",
	BLUE: "blue",
};

let bg;
let c;
function start() {
	bg = Background("100%", "#333");
	c = new Cube();

}

function update() {
	c.moveTop();
	c.moveBottom()
	c.moveLeft();
	c.moveRight();
	c.moveFront();
	c.moveBack();
}

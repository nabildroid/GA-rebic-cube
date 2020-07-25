frame_speed = 1;
const COLORS = {
	RED: "red",
	WHITE: "white",
	ORANGE: "orange",
	YELLOW: "yellow",
	GREEN: "green",
	BLUE: "blue",
};

let bg;

function start() {
	bg = Background("100%", "#333");
	new Cube();
}

function update() {}

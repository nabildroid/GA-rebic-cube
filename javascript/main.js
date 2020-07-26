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

Track_key_press((key) => {
	const dir =
		key == 38 ||
		key == 12 ||
		key == 40 ||
		key == 35 ||
		key == 34 ||
		key == 45
			? 1
			: 0;
			
	if (key == 104 || key == 38) c.moveTop(dir);
	else if (key == 101 || key == 12) c.moveBack(dir);
	else if (key == 98 || key == 40) c.moveBottom(dir);
	else if (key == 97 || key == 35) c.moveLeft(dir);
	else if (key == 99 || key == 34) c.moveRight(dir);
	else if (key == 96 || key == 45) c.moveFront(dir);
});

frame_speed = 60;
const COLORS = {
	RED: "red",
	WHITE: "white",
	ORANGE: "orange",
	YELLOW: "yellow",
	GREEN: "green",
	BLUE: "blue",
};

let bg;
let pop;
let example;
function start() {
	bg = Background("100%", "#333");
	example = new Cube(false);
	example.randomize();
	pop = new Population(300, 0.7, example.getColors());
}

function update() {
	pop.action();
	pop.calcFitness();
	pop.selection();
}

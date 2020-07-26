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
function start() {
	bg = Background("100%", "#333");
	pop = new Population(100, 0.1);
}

function update() {
	pop.action();
	pop.calcFitness();
	pop.selection();
}

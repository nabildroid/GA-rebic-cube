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
let pop;
let example;
let bestDNA = null;
let cube = null;
function start() {
	bg = Background("100%", "#333");
	example = new Cube(false);
	example.randomize();
	pop = new Population(100, 0.01, example.getColors());
}

function update() {
	if (!bestDNA || !bestDNA.genes.length) {
		pop.action();
		bestDNA = pop.calcFitness();
		pop.selection();

		cube = new Cube();
		cube.setColors(pop.initialColors);
		setFrame_speed(20);
	} else {
		const currentMove = bestDNA.genes.shift();
		cube.move(currentMove.color, currentMove.dir);
		if(!bestDNA.genes.length){
			setFrame_speed(0.5)
			setTimeout(cube.remove,1000)
		}
	}
}

class Cube {
	constructor() {
		this.top = createGroup(200, 10, 100, COLORS.WHITE);
		this.bottom = createGroup(200, 120, 100, COLORS.YELLOW);
		this.front = createGroup(200, 230, 100, COLORS.GREEN);
		this.left = createGroup(90, 230, 100, COLORS.ORANGE);
		this.back = createGroup(310, 230, 100, COLORS.BLUE);
		this.right = createGroup(200, 340, 100, COLORS.RED);
	}

	moveTop(dir = 1) {
		this.rotateFixed(this.top);
	}
	moveBottom(dir = 1) {
		this.rotateFixed(this.bottom);
	}
	moveFront(dir = 1) {
		this.rotateFixed(this.front);
	}
	moveBack(dir = 1) {
		this.rotateFixed(this.back);
	}
	moveLeft(dir = 1) {
		this.rotateFixed(this.left);
	}
	moveRight(dir = 1) {
		this.rotateFixed(this.right);
	}

	rotateFixed([...group]) {
		const parts = [
			...group[0],
			group[1][2],
			...[...group[2]].reverse(),
			group[1][0],
		];
		let colors = parts.map((e) => e.color);
		rotateArray(colors);
		rotateArray(colors);

		parts.map((elm, i) => elm.setColor(colors[i]));
	}
}

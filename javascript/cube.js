class Cube {
	constructor() {
		this.top = createGroup(200, 10, 100, COLORS.WHITE);
		this.bottom = createGroup(200, 120, 100, COLORS.YELLOW);
		this.front = createGroup(200, 230, 100, COLORS.GREEN);
		this.left = createGroup(90, 230, 100, COLORS.ORANGE);
		this.back = createGroup(310, 230, 100, COLORS.BLUE);
		this.right = createGroup(200, 340, 100, COLORS.RED);

		this.relations = {
			top: [this.front, this.right, this.back, this.left],
			bottom: [this.front, this.right, this.back, this.left],
			front: [this.top, this.left, this.bottom, this.right],
			back: [this.top, this.left, this.bottom, this.right],
			right: [this.top, this.front, this.bottom, this.back],
			left: [this.top, this.front, this.bottom, this.back],
		};
	}

	moveTop(dir) {
		this.rotateFixed(this.top,dir);
		this.rotateSides(this.relations.top,dir);
	}
	moveBottom(dir) {
		this.rotateFixed(this.bottom,dir);
		this.rotateSides(this.relations.bottom,dir);
	}
	moveFront(dir) {
		this.rotateFixed(this.front,dir);
		this.rotateSides(this.relations.front,dir);
	}
	moveBack(dir) {
		this.rotateFixed(this.back,dir);
		this.rotateSides(this.relations.back,dir);
	}
	moveLeft(dir) {
		this.rotateFixed(this.left,dir);
		this.rotateSides(this.relations.left,dir);
	}
	moveRight(dir) {
		this.rotateFixed(this.right,dir);
		this.rotateSides(this.relations.right,dir);
	}

	rotateFixed([...group], dir = 0) {
		const parts = [
			...group[0],
			group[1][2],
			...[...group[2]].reverse(),
			group[1][0],
		];
		this.rotate(parts, dir);
	}

	rotateSides(sides, dir = 0) {
		const parts = [
			...sides[0][0],
			...sides[1][0],
			...sides[2][0],
			...sides[3][0],
		];
		this.rotate(parts, dir, 3);
	}

	rotate(parts, dir, i = 2) {
		let colors = parts.map((e) => e.color);
		if (dir) colors.reverse();
		for (i; i > 0; i--) rotateArray(colors);
		if (dir) colors.reverse();

		parts.map((elm, i) => elm.setColor(colors[i]));
	}
}

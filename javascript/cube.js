class Cube {
	constructor(withElm = true) {
		this.top = createGroup(200, 10, 100, COLORS.WHITE, withElm);
		this.back = createGroup(200, 120, 100, COLORS.ORANGE, withElm);
		this.bottom = createGroup(200, 230, 100, COLORS.YELLOW, withElm);
		this.left = createGroup(90, 230, 100, COLORS.BLUE, withElm);
		this.right = createGroup(310, 230, 100, COLORS.GREEN, withElm);
		this.front = createGroup(200, 340, 100, COLORS.RED, withElm);

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
		this.rotateFixed(this.top, dir);
		this.rotateSides(this.relations.top, dir);
	}
	moveBottom(dir) {
		this.rotateFixed(this.bottom, dir);
		this.rotateSides(this.relations.bottom, dir, false, false);
	}
	moveFront(dir) {
		this.rotateFixed(this.front, dir);
		this.rotateSides(this.relations.front, dir, false, false);
	}
	moveBack(dir) {
		this.rotateFixed(this.back, dir);
		this.rotateSides(this.relations.back, dir, false);
	}
	moveLeft(dir) {
		this.rotateFixed(this.left, dir);
		this.rotateSides(this.relations.left, dir, true);
	}
	moveRight(dir) {
		this.rotateFixed(this.right, dir);
		this.rotateSides(this.relations.right, dir, true, false);
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

	rotateSides(sides, dir, vertical = false, first = true) {
		const parts = vertical
			? [
					...sliceVertical(sides[0], first ? 0 : 2),
					...sliceVertical(sides[1], first ? 0 : 2),
					...sliceVertical(sides[2], first ? 0 : 2),
					...sliceVertical(sides[3], first ? 0 : 2),
			  ]
			: [
					...sides[0][first ? 0 : 2],
					...sides[1][first ? 0 : 2],
					...sides[2][first ? 0 : 2],
					...sides[3][first ? 0 : 2],
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

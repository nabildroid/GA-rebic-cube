class DNA {
	constructor(parent = null) {
		const totalMovement = 42;
		this.genes = Array(totalMovement).fill().map(DNA.createGenen);
		this.fitness = 0;
		this.parent = parent;
	}

	

	calcFitness() {
		let total = 0;
		const sides = [
			this.parent.top,
			this.parent.bottom,
			this.parent.front,
			this.parent.back,
			this.parent.left,
			this.parent.right,
		];

		sides.forEach((group) => {
			const movingParts = [
				...group[0],
				group[1][2],
				...group[2],
				group[1][0],
			];
			const middle = group[1][1];
			movingParts.forEach(
				(part) => (total += part.color == middle.color ? 1 : 0)
			);
		});

        this.fitness = total;
        return this.fitness;
	}

	crossover(dna) {
		const child = new DNA();
		for (let i = 0; i < this.dna.genes.length; i++) {
			if (i < this.dna.genes.length / 2)
				child.genes[i] = this.dna.genes[i];
			else child.genes[i] = dna.genes[i];
		}

		return child;
	}

	mutation(rate) {
		for (var i = 0; i < this.genes.length; i++) {
			if (Math.random() <= rate) {
				this.genes[i] = DNA.createGenen();
			}
		}
    }
    
    static createGenen() {
		return {
			color: random(Object.values(COLORS)),
			dir: random(0, 1),
		};
	}
}

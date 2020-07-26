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
			].map((e) => e.color);
			const middle = group[1][1].color;

			movingParts.forEach((part, i) => {
				total += part == middle ? 1 : 0;

				if (i % 1 == 0) {
					total += 2;
				}
			});

			if (arrayElementsEqualeTo(movingParts, middle))
				total += 20 + total * 2;
			else {
				if (
					arrayElementsEqualeTo(
						group[0].map((e) => e.color),
						middle
					)
				)
					total += 5;
				if (
					arrayElementsEqualeTo(
						group[1].map((e) => e.color),
						middle
					)
				)
					total += 5;
				if (
					arrayElementsEqualeTo(
						group[2].map((e) => e.color),
						middle
					)
				)
					total += 5;
				if (
					arrayElementsEqualeTo(
						sliceVertical(group, 0).map((e) => e.color),
						middle
					)
				)
					total += 5;
				if (
					arrayElementsEqualeTo(
						sliceVertical(group, 1).map((e) => e.color),
						middle
					)
				)
					total += 5;
				if (
					arrayElementsEqualeTo(
						sliceVertical(group, 2).map((e) => e.color),
						middle
					)
				)
					total += 5;
			}
		});

		this.fitness = total / 100;
		return this.fitness;
	}

	crossover(dna) {
		const child = new DNA();
		for (let i = 0; i < this.genes.length; i++) {
			if (i < this.genes.length / 2) child.genes[i] = this.genes[i];
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

class Population {
	constructor(maxPop, mutationRate, initialColors) {
		this.maxPop = maxPop;
		this.mutationRate = mutationRate;
		this.initialColors = initialColors;
		this.population = [];
		this.generations = 0;
		this.maxFitness = 0;
		this.createPopulation();
	}

	createPopulation() {
		for (let i = 0; i < this.maxPop; i++) {
			const cube = new Cube(false);
			cube.setColors(this.initialColors);
			const dna = new DNA(cube);

			this.population.push(dna);
		}
	}

	calcFitness() {
		this.population.forEach((dna) => dna.calcFitness());
		this.population.forEach((dna) => {
			if (dna.fitness > this.maxFitness) {
				this.maxFitness = dna.fitness;
				console.log(this.maxFitness);
			}
		});
		return this.population.sort((a, b) => -a.fitness + b.fitness)[0];
	}

	selection() {
		let tempPopulation = new Array();
		for (let i = 0; i < this.population.length; i++) {
			let parentA = pick(this.population);
			let parentB = pick(this.population);
			if (parentA === parentB) {
				i--;
				continue;
			}

			const child = parentA.crossover(parentB);
			child.mutation(this.mutationRate);
			tempPopulation.push(child);
		}

		tempPopulation.forEach((dna) => {
			const cube = new Cube(false);
			cube.setColors(this.initialColors);
			dna.parent = cube;
		});

		this.population = tempPopulation;
		this.generations++;
	}

	action() {
		this.population.forEach((dna) => {
			for (let i = 0; i < dna.genes.length; i++) {
				const gene = dna.genes[i];
				dna.parent.move(gene.color, gene.dir);
			}
		});
	}
}

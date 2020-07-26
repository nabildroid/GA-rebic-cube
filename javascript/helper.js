function createGroup(
	startX,
	startY,
	groupSize,
	defaultColor = null,
	withElm = true
) {
	const squareSize = groupSize / 3;
	let elms = Array(3).fill();

	elms = elms.map((_, i) => {
		const y = startY + i * squareSize;
		return new Array(3).fill().map((_, j) => {
			const x = startX + j * squareSize;
			const elm = new Square(x, y, squareSize, withElm);
			if (defaultColor) elm.setColor(defaultColor);

			return elm;
		});
	});

	return elms;
}

function rotateArray(arr) {
	const last = arr[arr.length - 1];
	for (let i = arr.length - 1; i > 0; i--) {
		arr[i] = arr[i - 1];
	}
	arr[0] = last;
	return arr;
}

function sliceVertical(arr, index) {
	const a = [];

	arr.forEach((inner) => {
		a.push(inner[index]);
	});
	return a;
}

function pick(populations) {
	var sum = 0;
	populations.forEach((dna) => (sum += dna.fitness));
	var index = 0;
	var r = Math.random();
	while (r > 0) {
		r = r - populations[index].fitness / sum;
		index++;
	}
	index--;
	return populations[index];
}

function arrayElementsEqualeTo(arr, target) {
	let correct = true;
	let i = 0;
	do {
		correct = arr[i] == target;
	} while (++i < arr.length && correct);

	return correct;
}

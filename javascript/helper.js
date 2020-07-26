function createGroup(startX, startY, groupSize, defaultColor = null) {
	const squareSize = groupSize / 3;
	let elms = Array(3).fill();

	elms = elms.map((_, i) => {
		const y = startY + i * squareSize;
		return new Array(3).fill().map((_, j) => {
			const x = startX + j * squareSize;
			const elm = new Square(x, y, squareSize);
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


function sliceVertical(arr,index){
	const a = [];

	arr.forEach(inner=>{
		a.push(inner[index])
	});
	return a;
}

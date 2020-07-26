class Square {
	constructor(x, y, size, withElm = true) {
		this.pos = new Vector(x, y);
		this.size = size;
		this.elm = null;
		this.color = null;
		if (withElm) this.createElement(size);
	}
	createElement(size) {
		this.elm = new DIV();
		this.elm.free().size(size).top(this.pos.y).left(this.pos.x);
	}

	setColor(color) {
		this.color = color;
		if (this.elm) this.elm.bg_color(color);
	}

}

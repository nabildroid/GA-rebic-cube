class Square {
	constructor(x, y,size) {
        this.pos = new Vector(x, y);
        this.elm = null;
        this.color = null;

        this.createElement(size);
    }
    createElement(size){
        this.elm = new DIV
        this.elm.free().size(size).top(this.pos.y).left(this.pos.x)
    }

    setColor(color){
        this.elm.bg_color(color);
        this.color = color;
    }
}

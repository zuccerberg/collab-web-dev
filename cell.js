class cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.visited = false;
        this.wallRight = true;
        this.wallLeft = true;
        this.wallUp = true;
        this.wallDown = true;

    }
    pickRandomNeighbour() {
        var arr = [];
        if (this.x - 1 >= 0) {
            if (!grid[this.x - 1][this.y].visited) {
                var puntos = [];
                puntos.push(this.x - 1);
                puntos.push(this.y);
                arr.push(puntos);
            }
        }
        if (this.x + 1 < grid.length) {
            if (!grid[this.x + 1][this.y].visited) {
                var puntos = [];
                puntos.push(this.x + 1);
                puntos.push(this.y);
                arr.push(puntos);
            }
        }
        if (this.y - 1 >= 0) {
            if (!grid[this.x][this.y - 1].visited) {
                var puntos = [];
                puntos.push(this.x);
                puntos.push(this.y - 1);
                arr.push(puntos);
            }
        }
        if (this.y + 1 < grid[0].length) {
            if (!grid[this.x][this.y + 1].visited) {
                var puntos = [];
                puntos.push(this.x);
                puntos.push(this.y + 1);
                arr.push(puntos);
            }
        }
        if (arr.length > 0) {
            var pos = Math.floor(Math.random() * (arr.length));
            //console.log(arr.length);
            return arr[pos];
        }
        return null;
    }
    eliminateWall(newcell) {
        if (newcell.x < this.x) {
            this.wallLeft = false;
            newcell.wallRight = false;
        }
        if (newcell.x > this.x) {
            this.wallRight = false;
            newcell.wallLeft = false;
        }
        if (newcell.y > this.y) {
            this.wallDown = false;
            newcell.wallUp = false;
        }
        if (newcell.y < this.y) {
            this.wallUp = false;
            newcell.wallDown = false;
        }
    }
}
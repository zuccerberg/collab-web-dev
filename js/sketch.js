var numCellsX = 30;
var numCellsY = 30;
var tamX = 800;
var tamY = 800;
var longCellX = tamX / numCellsX;
var longCellY = tamY / numCellsY;
var grid = [];
var cellsUnvisited = 0;
var currentX = 1;
var currentY = 1;
var stack = [];


function setup() {
    createCanvas(tamX, tamY);
    console.log(grid.length);
    for (var i = 0; i < numCellsX; i++) {
        grid[i] = [];
        for (var j = 0; j < numCellsY; j++) {
            grid[i][j] = new cell(i, j);
            cellsUnvisited++;

        }
    }
    
}

function draw() {
    if (cellsUnvisited > 0) {
        background(0, 0, 0);
        //stroke(0, 0, 0);
        stroke(255, 255, 255);
        strokeWeight(4);
        for (var i = 0; i < grid.length; i++) {
            for (var j = 0; j < grid[0].length; j++) {

                if (grid[i][j].wallLeft) {
                    line(i * longCellX, j * longCellY, i * longCellX, (j + 1) * longCellY);
                }
                if (grid[i][j].wallRight) {
                    line((i + 1) * longCellX, j * longCellY, (i + 1) * longCellX, (j + 1) * longCellY);
                }
                if (grid[i][j].wallUp) {
                    line(i * longCellX, j * longCellY, (i + 1) * longCellX, j * longCellY);
                }
                if (grid[i][j].wallDown) {
                    line(i * longCellX, (j + 1) * longCellY, (i + 1) * longCellX, (j + 1) * longCellY);
                }

            }
        }

        var newx;
        var newy;
        if (!grid[currentX][currentY].visited) {
            grid[currentX][currentY].visited = true;
            cellsUnvisited--;
        }
        var arrpos = grid[currentX][currentY].pickRandomNeighbour();
        if (arrpos != null) {
            newx = arrpos[0];
            newy = arrpos[1];
            var puntos = [];
            puntos.push(currentX);
            puntos.push(currentY);
            stack.push(puntos);
            grid[currentX][currentY].eliminateWall(grid[newx][newy]);
        } else {
            newx = stack[stack.length - 1][0];
            newy = stack[stack.length - 1][1];
            stack.splice(stack.length - 1, 1);
        }

        fill(255, 0, 0);
        rect(currentX * longCellX, currentY * longCellY, longCellX, longCellY);
        fill(255, 255, 0);
        rect(newx * longCellX, newy * longCellY, longCellX, longCellY);
        currentX = newx;
        currentY = newy;


    }
}
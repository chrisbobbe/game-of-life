var c = document.getElementById("game");
var ctx = c.getContext("2d");
const width = c.width;
const height = c.height;
const cellWidth = 10;
const cellHeight = 10;

function SimState() {
    this.state = Array(Math.floor(width/cellWidth)).fill(0);
    for (let w = 0; w < Math.floor(width/cellWidth); w++) {
        this.state[w] = Array(Math.floor(height/cellHeight)).fill(0);
    }


    this.updateState = function() {

    };

    this.render = function() {
        this.state.forEach(function(arr,w){
            arr.forEach(function(cell,h){
                ctx.rect(w*10,h*10,cellWidth,cellHeight);
            });
        });
        ctx.stroke();
    };
}

state = new SimState();
state.render();
console.log(state.state);

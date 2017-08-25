var c = document.getElementById("game");
var ctx = c.getContext("2d");
const WIDTH = c.width;
const HEIGHT = c.width;
const CELL_WIDTH = 10;
const CELL_HEIGHT = 10;

var mouseDown = false
var mousePos = {x:0, y:0}

function SimState() {
    this.state = Array(Math.floor(WIDTH/CELL_WIDTH)).fill(0);
    for (let w = 0; w < Math.floor(WIDTH/CELL_WIDTH); w++) {
        this.state[w] = Array(Math.floor(HEIGHT/CELL_HEIGHT)).fill(0);
    }

    this.updateState = function() {
      if (mouseDown) {
        ctx.fillStyle="#FF0000"
        ctx.fillRect(mousePos.x*CELL_WIDTH, mousePos.y*CELL_HEIGHT, CELL_WIDTH, CELL_HEIGHT);
      };
      console.log("hi");
      ctx.stroke();
    };

    this.render = function() {
        this.state.forEach(function(arr,w){
            arr.forEach(function(cell,h){
                ctx.rect(w*CELL_WIDTH,h*CELL_HEIGHT,CELL_WIDTH,CELL_HEIGHT);
            });
        });
        ctx.stroke();
    };
}

function getMousePos(canvas, event) {
  var rect = c.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}


state = new SimState();
state.render();
console.log(state.state);


c.addEventListener('mousedown', function(event) {
  mouseDown = true;
});
c.addEventListener('mousemove', function(event) {
  mousePos = {
    x: getMousePos(c, event).x,
    y: getMousePos(c, event).y
  };
  state.updateState();
  console.log("hello");
});
c.addEventListener('click', function(event) {
  mouseDown = false
});

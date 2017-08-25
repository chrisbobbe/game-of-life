var c = document.getElementById("game");
var ctx = c.getContext("2d");
const width = c.width;
const height = c.height;
const cellWidth = 10;
const cellHeight = 10;

var mouseDown = false
var mousePos = {x:0, y:0}

function SimState() {
    this.state = Array(Math.floor(width/cellWidth)).fill(0);
    for (let w = 0; w < Math.floor(width/cellWidth); w++) {
        this.state[w] = Array(Math.floor(height/cellHeight)).fill(0);
    }


    this.updateState = function() {
      if (mouseDown) {
        ctx.fillRect(mousePos.x*cellWidth, mousePos.y*cellHeight, cellWidth, cellHeight);
      };
      console.log("hi");
    };

    this.render = function() {
        this.state.forEach(function(arr,w){
            arr.forEach(function(cell,h){
                ctx.rect(w*cellWidth,h*cellHeight,cellWidth,cellHeight);
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

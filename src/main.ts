import Konva from 'konva';

// first we need to create a stage
const stage = new Konva.Stage({
  container: 'container',
  width: window.innerWidth,
  height: window.innerHeight
});

// then create layer
const layer = new Konva.Layer();
const scale = 1.5;
const angle = 45;

// create our shape

const lemon = new Konva.Shape({
    x:250,
    y:250,
    fill: '#FFFF00',       
    stroke: '#000000',   
    strokeWidth: 2,
    draggable: true,

    sceneFunc: function(draw, shape){
        draw.beginPath();
        draw.moveTo(-100, 0);
        draw.lineTo(-97, -10);
        draw.quadraticCurveTo(0, -70, 90, -10);
        draw.lineTo(100, 0);
        draw.lineTo(96, 10);
        draw.quadraticCurveTo(0, 70, -90, 10);

        draw.closePath(); 
        draw.fillStrokeShape(shape);
    }
})

lemon.on('mouseover', () => {
    document.body.style.cursor = 'pointer';
})

lemon.on('mouseout', () => {
    document.body.style.cursor = 'default';
})

lemon.on('mousedown', () => {
    lemon.scale({x: scale, y: scale});
    lemon.rotate(angle);
})

lemon.on('mouseup', () => {
    lemon.scale({x: 1, y: 1});
})


// add the shape to the layer
layer.add(lemon);

// add the layer to the stage
stage.add(layer);

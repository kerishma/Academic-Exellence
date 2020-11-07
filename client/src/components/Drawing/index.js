import React, { Component } from 'react';
import "../Drawing/drawing.css";
// import Typography from '@material-ui/core/Typography';

const clearButton = document.querySelector('.clear');
const stroke_weight = document.querySelector('.stroke-weight');
const color_picker = document.querySelector('.color-picker');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let isDrawing = false;
canvas.addEventListener('mousedown', start);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stop);
clearButton.addEventListener('click', clearCanvas);
function start (e) {
  isDrawing = true;
  draw(e);
}
function draw ({clientX: x, clientY: y}) {
  if (!isDrawing) return;
  ctx.lineWidth = stroke_weight.value;
  ctx.lineCap = "round";
  ctx.strokeStyle = color_picker.value;
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(x, y);
}
function stop () {
  isDrawing = false;
  ctx.beginPath();
}
function clearCanvas () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
window.addEventListener('resize', resizeCanvas);
function resizeCanvas () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

function DrawingCanvas() {
    return (
        <div><canvas></canvas>
        <main>
          <section class="colors">
            <input type="text" class="color-picker" value="#171717" />
          </section>
          <section class="thickness">
            <input type="number" class="stroke-weight" value="3" />
          </section>
          <button class="clear">X</button>
        </main>
        </div>
    )
}



export default DrawingCanvas;
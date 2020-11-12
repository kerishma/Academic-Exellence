import React, { useState, useRef, useEffect } from 'react';
import '../Drawing/drawing.css';

import Typography from '@material-ui/core/Typography';
// import e from 'express';
// import $ from 'jquery';

function DrawingCanvas(props) {
  // let context.current = document.getElementById('canvasInAPerfectWorld').getcontext.current('2d');
  const context = useRef(null);
  const [paint, setPaint] = useState();
  const [clickDrag, setDrag] = useState([]);
  const [clickX, setClickX] = useState([]);
  const [clickY, setClickY] = useState([]);
  // const canvasDiv = document.getElementById('canvasDiv');
  // let canvas = document.createElement('canvas');
  // canvas.setAttribute('width', 100);
  // canvas.setAttribute('height', 100);
  // canvas.setAttribute('id', 'canvas');
  // canvasDiv.appendChild(canvas);
  // let G_vmlCanvasManager;
  // if (typeof G_vmlCanvasManager != 'undefined') {
  //   canvas = G_vmlCanvasManager.initElement(canvas);
  // }
  // context.current = canvas.getcontext.current('2d');
  const mouseCurrent = (e) => {
    const { top, left } = context.current.getBoundingClientRect();
    const percentDiff = context.current.width / e.target.clientWidth;
    const adjustedX = (e.clientX - left) * percentDiff;
    const adjustedY = (e.clientY - top) * percentDiff;
    return [
      adjustedX, adjustedY
    ]
  };
  const mousedown = (e) => {
    // var mouseX = e.pageX - e.target.offsetLeft;
    // var mouseY = e.pageY - e.target.offsetTop;

    setPaint(true);
    const [x, y] = mouseCurrent(e)
    addClick(x, y);
    redraw();
  };

  const mousemove = (e) => {
    e.persist()
    if (paint) {
      console.log(e)
      const [x, y] = mouseCurrent(e)
      addClick(x, y);
      redraw();
    }
  };

  const mouseup = (e) => {
    setPaint(false);
  };

  const mouseleave = (e) => {
    setPaint(false);
  };

  // var clickX = new Array();
  // var clickY = new Array();
  // var clickDrag = new Array();
  // var paint;

  function addClick(x, y, drag) {
    setClickX([...clickX, x]);
    setClickY([...clickY, y]);
    setDrag([...clickDrag, drag]);
  }
  function clearCanvas() {
    const canvas = context.current.getContext("2d")
    canvas.clearRect(0, 0, 600, 400);
    setClickX([]);
    setClickY([]);
    setDrag([]);
  }


  function redraw() {
    const canvas = context.current.getContext("2d")

    // canvas.clearRect(0, 0, 490, 220);

    canvas.strokeStyle = '#000';
    canvas.lineJoin = 'round';
    canvas.lineWidth = 5;

    // for (var i = 0; i < clickX.length; i++) {
    canvas.beginPath();
    if (clickX.length > 1) {
      canvas.moveTo(clickX[clickX.length - 2], clickY[clickY.length - 2]);
    } else {
      canvas.moveTo(clickX[clickX.length] - 1, clickY[clickY.length]);
    }
    canvas.lineTo(clickX[clickX.length - 1], clickY[clickY.length - 1]);
    canvas.closePath();
    canvas.stroke();
  }
  // }

  // useEffect(() => {
  //   if (paint) { 
  //   redraw()
  // }
  // }, [clickX,clickY, paint])



  return (
    <div className="mainContainer">
      <div id="drawingCanvas" className="drawingCanvas">
        <canvas id="canvasInAPerfectWorld" width="600" height="400"
          ref={context} onMouseDown={mousedown} onMouseMove={mousemove}
          onMouseUp={mouseup} onMouseLeave={mouseleave}></canvas>
        <button id="clearbtn" onClick={clearCanvas}>Clear</button>
        {/* <button id="orangebtn" onClick={strokeStyle("#FF7F00")}>Orange</button> */}
      </div>
    </div>
  );
}

export default DrawingCanvas;

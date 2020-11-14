import React, { useState, useRef, useEffect } from 'react';
import '../Drawing/drawing.css';
import Typography from '@material-ui/core/Typography';


function DrawingCanvas(props) {
  const context = useRef(null);
  const [paint, setPaint] = useState();
  const [clickDrag, setDrag] = useState([]);
  const [clickX, setClickX] = useState([]);
  const [clickY, setClickY] = useState([]);
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
    // redraw();
  };

  const mousemove = (e) => {
    e.persist()
    if (paint) {
      // console.log(e)
      const [x, y] = mouseCurrent(e)
      addClick(x, y);
      // redraw();
    }
  };

  const mouseup = (e) => {
    setPaint(false);
    setClickX([...clickX, false]);
    setClickY([...clickY, false]);
  };

  const mouseleave = (e) => {
    setPaint(false);
  };

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
    if (!clickX[clickX.length-2]) {
      console.log('hello')
      canvas.moveTo(clickX[clickX.length - 1], clickY[clickY.length -1]);
    }
    else if (clickX.length > 1) {
      canvas.moveTo(clickX[clickX.length - 2], clickY[clickY.length - 2]);
    } else {
      canvas.moveTo(clickX[clickX.length - 1], clickY[clickY.length -1]);
    }
    canvas.lineTo(clickX[clickX.length - 1], clickY[clickY.length - 1]);
    canvas.closePath();
    canvas.stroke();
  }
  // }

  useEffect(() => {
    if (paint) { 
    redraw()
  }
  }, [clickX,clickY, paint])

  return (
    // <div className="mainContainer">
      <div id="drawingCanvas" className="drawingCanvas">
          <p>Draw Your Imagination!</p>
        <canvas id="canvasInAPerfectWorld" width="600" height="400"
          ref={context} onMouseDown={mousedown} onMouseMove={mousemove}
          onMouseUp={mouseup} onMouseLeave={mouseleave}></canvas>
          <br></br>
        <button id="clearbtn" onClick={clearCanvas}>Clear</button>
      </div>
    // </div>
  );
}

export default DrawingCanvas;

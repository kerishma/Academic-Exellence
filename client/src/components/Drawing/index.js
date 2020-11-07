import React, { Component } from 'react';
import "../Drawing/drawing.css";
// import Typography from '@material-ui/core/Typography';


function DrawingCanvas(props) {
    return (
        <div className="mainContainer">
            <div id="drawingCanvas" className="drawingCanvas">
            <canvas id="canvasInAPerfectWorld" width="490" height="220"></canvas>
            <div id="canvasDiv"></div>

            </div>
        </div>
    )
}

export default DrawingCanvas;
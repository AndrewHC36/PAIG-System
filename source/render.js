"use strict";

// project rendering
const { BrowserWindow } = require('electron').remote;
var w = BrowserWindow.getAllWindows()[0].webContents.getOwnerBrowserWindow().getSize()[0];
var h = BrowserWindow.getAllWindows()[0].webContents.getOwnerBrowserWindow().getSize()[1];

// relative Width
function rW(perc) { return (perc/100)*w; }

// relative Height
function rH(perc) { return (perc/100)*h; }

// remaining width
function lW(ww) { return w-ww; }

// remaining height
function lH(hh) { return h-hh; }

function projectCanvas(event) {
  setInterval( function(event) {
    var canvas = document.getElementById("project-window");
    if (canvas.getContext) {  // canvas supported
      // update canvas size to the broswer window
      w = BrowserWindow.getAllWindows()[0].webContents.getOwnerBrowserWindow().getSize()[0];
      h = BrowserWindow.getAllWindows()[0].webContents.getOwnerBrowserWindow().getSize()[1];
      canvas.setAttribute('width', w);
      canvas.setAttribute('height', h);

      var ctx = canvas.getContext('2d');

      ctx.fillStyle = 'rgb(200, 0, 0)';
      ctx.fillRect(0, 0, rW(20), rH(100));
      ctx.fillRect(rW(75), 0, rW(lW(75)), rH(100));

    } else {  // canvas-unsupported
      console.log("Canvas unsupported");
    }
  }, 10);  // x milliseconds

}

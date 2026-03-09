var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.moveTo(50,300);                 
    ctx.bezierCurveTo(200,50,350,50,450,300);

    ctx.stroke();

}
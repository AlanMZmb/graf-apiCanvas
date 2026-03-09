var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(50,50);
    ctx.lineTo(200,50);
    ctx.lineTo(200,200);

    ctx.stroke();

}
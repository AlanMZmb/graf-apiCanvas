var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle="red";
    ctx.fillRect(20,20,100,100);

    ctx.beginPath();
    ctx.moveTo(150,20);
    ctx.lineTo(250,120);
    ctx.lineTo(50,120);
    ctx.closePath();

    ctx.stroke();

}
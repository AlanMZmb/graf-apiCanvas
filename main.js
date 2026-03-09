var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(150,150,80,0,Math.PI);
    ctx.stroke();

}
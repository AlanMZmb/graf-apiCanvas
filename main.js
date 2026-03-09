var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function draw() {

    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(200,200,100,0,Math.PI*2,true);

    ctx.moveTo(260,200);
    ctx.arc(200,200,60,0,Math.PI,false);

    ctx.moveTo(170,170);
    ctx.arc(160,170,10,0,Math.PI*2,true);

    ctx.moveTo(250,170);
    ctx.arc(240,170,10,0,Math.PI*2,true);

    ctx.stroke();

}
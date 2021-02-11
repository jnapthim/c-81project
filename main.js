canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
ctx.beginPath();
ctx.strokeStyle="purple";
ctx.lineWidth=4;
ctx.rect(200, 143, 430, 200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.arc(310, 218, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=5;
ctx.arc(410, 218, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=5;
ctx.arc(510, 218, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=5;
ctx.arc(360, 260, 40, 0, 360);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=5;
ctx.arc(460, 260, 40, 0, 360);
ctx.stroke();


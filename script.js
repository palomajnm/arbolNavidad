const canvas =document.getElementById("tree");
const ctx = canvas.getContext("2d");

canvas.width=400;
canvas.height=500;

let running= false;
let angleOffset=0;

const speed= document.getElementById("speed");
const color= document.getElementById("color");
const toggle = document.getElementById("toggle");

function drawTreeBase(){
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height);

    const gradient = ctx.createLinearGradient(0, -420, 0, 0);
    gradient.addColorStop(0, "rgba(0,255,80,0.3)");
    gradient.addColorStop(1, "rgba(0,120,40,0.95)");

    ctx.beginPath();
    ctx.moveTo(0, -420);
    ctx.lineTo(-160, 0);
    ctx.lineTo(160, 0);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    ctx.restore();
}

function drawStar(){
    ctx.save();
    ctx.translate(canvas.width /2 , canvas.height -420);
    
    ctx.beginPath();
    ctx.fillStyle= "#ffd700";
    ctx.shadowBlur = 35;
    ctx.shadowColor = "#ffd700";

    const outer=32;
    const inner= 14;

    for (let i=0; i<5; i++){
        ctx.lineTo(0, -outer);
        ctx.rotate(Math.PI /5);
        ctx.lineTo(0, -inner);
        ctx.rotate(Math.PI /5);
    }

    ctx.fill();
    ctx.restore();
}

function drawSpiral(){
    const total=240;

    for(let i=0; i<total; i++){
        const t= i / total;
        const y= -20 -t * 380;
        const radius = 140* (1-t);
        const angle= angleOffset + t * 18 * Math.PI;
        const x= Math.cos(angle) * radius;

        ctx.save();
        ctx.translate(canvas.width /2, canvas.height);

        ctx.beginPath();
        ctx.arc(x, y, 6*(1-t *0.7), 0, Math.PI * 2);
        ctx.fillStyle = color.value;
        ctx.shadowBlur = 12;
        ctx.shadowColor = color.value;
        ctx.fill();

        ctx.restore();
    }
}

function animate(){
    if(!running) return;
    ctx.clearRect (0, 0, canvas.width, canvas.height);

    drawTreeBase();
    drawSpiral();
    drawStar();

    angleOffset += parseFloat(speed.value);

    requestAnimationFrame(animate);
}

toggle.addEventListener("click", () =>{
    running=!running;
    toggle.textContent=running?"apagar" : "encender";

    if(running){
        animate()
    }else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawTreeBase();
        drawStar();
    }
});
drawTreeBase();
drawStar();
drawSpiral();
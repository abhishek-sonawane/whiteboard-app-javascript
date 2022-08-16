const canvas =  document.getElementById('canvas');
let painting;
const ctx = canvas.getContext("2d");
console.log(ctx)
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let lineColor ;


function col(){
    const dat = document.querySelector('input').value;
    lineColor = document.querySelector('input').value;
    console.log(dat)
}

document.querySelector('input').addEventListener('input',col)

function setPaint(e){
   painting = true 
   ctx.beginPath()
   ctx.strokeStyle = lineColor
   draw(e)
}

function outPaint(){
    painting = false ;
    ctx.closePath()
}




function draw(e){
    if(!painting){return ;}

    ctx.lineWidth = 10;
    ctx.lineCap = 'round';


    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke()

}

function reset(){
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
}

window.addEventListener('mousedown',setPaint)

window.addEventListener('mousemove',draw)

window.addEventListener('mouseup',outPaint)




// will work on touch drawing later

// window.addEventListener('touchstart',(e)=>{console.log(e.touches[0].cl)})
// window.addEventListener('touchend',outPaint)
// window.addEventListener('touchmove',draw)
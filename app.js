defaultSize=document.getElementById('default');
decreaseSize=document.getElementById('decrease');
increaseSize=document.getElementById('increase');
box=document.getElementById('box');
let state=0;

defaultSize.addEventListener('click',defaultSizeFunction);
decreaseSize.addEventListener('click',defaultSizeFunction);
increaseSize.addEventListener('click',defaultSizeFunction);
var size=16;
function defaultSizeFunction(e){
    console.log(e.target.id);
    if(e.target.id=='default'){
        let size=16;
        box.style.fontSize=size+'px';
        }
    else if(e.target.id=='decrease'){
        size-=2;
        box.style.fontSize=size+'px';
        }
    else if(e.target.id=='increase'){
        size+=2;
        box.style.fontSize=size+'px';
    }
}

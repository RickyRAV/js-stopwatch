const text = document.querySelector('.text');
const one = text.querySelector('h1');
const three = text.querySelector('h2');

let range = 20*2

function shadow(e){
    let {offsetX:x, offsetY: y} = e;
    if(this !== e.target){
        x = x+e.target.offsetLeft;
        y = y+e.target.offsetTop;
    }
    const { offsetWidth: width, offsetHeight: height} = text;
    const xRange = Math.round((x/width*range)-range/2);
    const yRange = Math.round((y/height*range)-range/2);
    one.style.textShadow = `${xRange}px ${yRange}px 0 rgba(55,55,55,1)`;
    three.style.textShadow = `${xRange}px ${yRange}px 0 rgba(55,55,55,1)`;
}

text.addEventListener('mousemove', shadow);
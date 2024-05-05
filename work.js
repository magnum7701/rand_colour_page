const button = document.querySelector('#haha');
const h1 = document.querySelector('h1');
button.addEventListener("click",function colorchange(){
    const x = randColor();
    document.body.style.backgroundColor = x;
    h1.innerText = x;
});

function randColor(){
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return (`rgb(${r},${g},${b})`)
}  
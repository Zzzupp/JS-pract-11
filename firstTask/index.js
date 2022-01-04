let now = new Date().toLocaleTimeString()
let hours = document.querySelector('.hour');
let minutes = document.querySelector('.minute');
let seconds = document.querySelector('.second');

hours.innerText = now.slice(0,2);
minutes.innerText = now.slice(3,5);
seconds.innerText = now.slice(6,8);
console.log(hours)
function setTime() {
    let now = new Date().toLocaleTimeString()
    hours.innerText = now.slice(0,2);
    minutes.innerText = now.slice(3,5);
    seconds.innerText = now.slice(6,8);
}
setInterval(setTime, 100);


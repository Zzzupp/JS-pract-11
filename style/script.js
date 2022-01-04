

let body = document.querySelector('body');
let dark = document.querySelector('.darkt');
let light = document.querySelector('.lightt');

dark.addEventListener('click', event => {
    dark.classList.remove('active');
    light.classList.add('active');
    body.classList.remove('light'); 
    body.classList.add('dark');
})

light.addEventListener('click', event => {
    light.classList.remove('active');
    dark.classList.add('active');
    body.classList.add('light'); 
    body.classList.remove('dark');
})
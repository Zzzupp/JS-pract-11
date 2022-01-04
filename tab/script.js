
// buttons //
let btnfrst = document.getElementById('btnfrst');
let btnscnd = document.getElementById('btnscnd');
let btnthrd = document.getElementById('btnthrd');
let buttons = [btnfrst, btnscnd, btnthrd];
// buttons //

// content // 
let cntfrst = document.getElementById('cntfrst');
let cntscnd = document.getElementById('cntscnd');
let cntthrd = document.getElementById('cntthrd');
let contents = [cntfrst, cntscnd, cntthrd];
// content //
function openTab(event, id){
    buttons.forEach(target => {
        target.classList.remove('active');
    })
    contents.forEach(target => {
        target.classList.remove('active');
    })
    let buttonId = (event.target.id);
    let contentId = document.getElementById(String(buttonId.replace('btn', 'cnt')));
    contentId.classList.add('active');
    event.target.classList.add('active');
}

buttons.forEach((target) => {
    target.addEventListener('click', event => {
        event.preventDefault();
        openTab(event, target);
    })
})


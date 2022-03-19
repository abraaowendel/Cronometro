const comecar = document.querySelector('.start')
const pausar = document.querySelector('.pause')
const zerar = document.querySelector('.zero')

const minutos = document.getElementById('minutes')
const segundos = document.getElementById('seconds')
const milissegundos = document.getElementById('milliseconds')

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let cron;

function start(){
    pause();
    cron = setInterval(() => timer(), 10)    
}

function timer(){
    if(milliseconds <= 98){
        milliseconds++
    }
    else{
        milliseconds = 0;
        seconds++
    }
    if(seconds == 60){
        seconds = 0
        minutes++ 
    }
    minutos.innerHTML = `${formatarTempo(minutes)}:`
    segundos.innerHTML = ` ${formatarTempo(seconds)}:`
    milissegundos.innerHTML = `${formatarTempo(milliseconds)}`
}

const pause = () => clearInterval(cron);

const zero = () => {
    milliseconds = 0;
    seconds = 0
    minutes = 0;
    minutos.innerText = `00:`
    segundos.innerText = `00:`
    milissegundos.innerText = `00`
    pause(); 
}

const formatarTempo = (tempo) => tempo < 10? `0${tempo}`:tempo;

comecar.addEventListener('click', start)
pausar.addEventListener('click', pause)
zerar.addEventListener('click', zero)
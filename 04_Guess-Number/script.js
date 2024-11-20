let number=parseInt(Math.random()*100+1)
console.log(number);

const  userinput=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const guessslot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const loworhi=document.querySelector('.lowOrHi')
const startover=document.querySelector('.resultParas')

const p=document.createElement('p')

let prevguess=[]
let numguess=1

let playgame=true

if(playgame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault()
        const guess=parseInt(userinput.value)
        vaildguess(guess)
    })
}

function vaildguess(guess){
    if(isNaN(guess)){alert("please enter a vaild number")}
    else if(guess<1){alert("please enter a number more than 1")}
    else if(guess>100){alert("please enter a number less than 100")}
    else{
        prevguess.push(guess)
        if(numguess===4){
            displayguess(guess)
            displaymessage(`Game over ,random number was ${number}`)
            endgame()
        }else{
            displayguess(guess)
            checkguess(guess)
        }
    }
}

function checkguess(guess){
    if(guess===number){
        displaymessage('you guessed right')
        endgame()
    }else if(guess<number){
        displaymessage('number is Tooo low')
    }else if(guess>number){
        displaymessage('number is Tooo high')
    }
}

function displayguess(guess){
    userinput.value=''
    guessslot.innerHTML +=`${guess} , `
    numguess++
    remaining.innerHTML=`${5-numguess}`
}

function displaymessage(message){
    loworhi.innerHTML=`${message}`;
    console.log(message);
    
}

function endgame(){
    userinput.value=''
    userinput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML='<h2 id="newgame"style="background-color:blue;  border-radius: 10px; padding: 10px;">Start new Game</h2>'
    startover.appendChild(p)
    playgame=false
    newgame()
}

function newgame(){
const newgamebtn=document.querySelector('#newgame')
newgamebtn.addEventListener('click',(e)=>{
    number=parseInt(Math.random()*100+1)
    prevguess=[]
    numguess=1
    guessslot.innerHTML=''
    remaining.innerHTML=`${5-numguess}`
    userinput.removeAttribute('disabled')
    startover.removeChild(p)
    playgame=true
})
}
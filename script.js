<<<<<<< HEAD

let c = Math.floor(Math.random()*4)
let a = Math.round(Math.random()*10)
let b = Math.round(Math.random()*10)
let d = 0
let w = 2
let number = 10

setInterval(fn, 1000)
function over(){
    document.querySelector('.over').innerHTML = `GAME OVER SCORE: ${d}`
}
function fn(){
    if(number > 0){
    number = number - 1
    document.querySelector('.timer').innerHTML = `Time: ${number}`
    }
}
setTimeout(() => {
    document.querySelector('.over').innerHTML = `GAME OVER SCORE: ${d}`
    c = 5
    document.body.style.background = "white"
}, 10000);
function reset(){
    if(number > 0){
        w = 2
        for(let p = 0; p < 4; p++) {
        }
    let c = Math.floor(Math.random()*4)
    let a = Math.round(Math.random()*10+1)
    let b = Math.round(Math.random()*10+1)
    document.querySelector('.score').innerHTML = `Score: ${d}`
    setTimeout(() => {
        document.body.style.background = "white"
        let answerDiv = document.createElement('div')
answerDiv.classList.add('answer')
document.querySelector('.answers').replaceChildren(answerDiv)
document.querySelector('.question').innerHTML = `What is ${a} * ${b}?`
let correctAnswerIndex = 0
let e = document.querySelectorAll('.answers')
    

for (let i = 0; i < 4; i++) {

    let answerDiv = document.createElement('div')
    if (i === c) {
    answerDiv.addEventListener('click', () => (
        document.body.style.background = "lime",d = d + 1,reset()
      
    )
    )
   
    answerDiv.innerHTML = a * b
     } else {
        if(Math.random()>0.5){
            answerDiv.innerHTML = a * b + Math.ceil(Math.random()*7)
        }else{
            answerDiv.innerHTML = a * b - Math.ceil(Math.random()*7)
        }

        answerDiv.addEventListener('click', () => (
            document.body.style.background = "red",d = d - 1,reset()
        )
    
        )
    }

    document.querySelector(".answer").appendChild(answerDiv)
    
}

}, 100);

}


}

reset()
//document.querySelector('question').innerHTML = 'Hello'
/*addEventListener('click', () => {document.body.style.background = "red"})
setTimeout(()=>{

},1000)
*/
=======
let number = 1000



setInterval(fn, 1000)

function fn(){
   
    
    
    if(number > 0){
    number = number - 1
    document.querySelector('.timer').innerHTML = number
}


}
for (let i=0; i < 5; i++) { 
    let a = Math.round(Math.random()*50)
    let b = Math.round(Math.random()*10)
    let answer = prompt("ROBO CHECK, what is " + a + " plus " + b + "")
    console.log(answer)
    let correctanswer = a + b

    if(!(parseInt(answer) === correctanswer)){
        break

    }
}
>>>>>>> 1522f05f4e43d6eac462758b384f230906174291

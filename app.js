const boxElements=document.querySelectorAll(".box")
let winningCombination=[
    [0,1,2],[3,4,5],[6,7,8],[0,4,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6]
]

const Message= document.getElementById("message")
const PlayAgain= document.getElementById("button")
const result =document.getElementById("result")

var click=0
let xAttempts=[]
let oAttempts=[]
let wonTheGame=0

//click function 
boxElements.forEach((el,i,arr)=>{
    el.addEventListener("click",handleClick)
    // console.log(el)
    
})

function handleClick(event){
    let id= event.target.id
    // console.log(i)
    let p=document.createElement("p")
    p.setAttribute("id","text")
    boxElements[id-1].append(p)
    if (click%2==0){
        p.innerHTML="X"
        p.style.color="yellow"
        xAttempts.push(parseInt(id-1))
        Result(winningCombination,xAttempts,"X")
    }else{
        p.innerHTML="O"
        p.style.color="red"
        oAttempts.push(parseInt(id-1))
        Result(winningCombination,oAttempts,"O")

    }
    click++
    //tie situation 
    if (click==9&& wonTheGame==0){
        result.style.visibility="visible";
        Message.innerHTML="Tie!!"
    }  
}

//result function
function Result(winningCombination,attempts,player){
    let count=0
    let checker =[]
    for (let i=0; i<winningCombination.length;i++){
    if(Array.isArray(winningCombination[i])){
        Result(winningCombination[i],attempts,player)
    }
    else{
        if(attempts.includes(winningCombination[i])){
            checker.push(true)
            count++
        }else{
            checker.push(false)
        }
    }
    }
    if(checker.every(el=>el===true)&&  count>2){
        result.style.visibility="visible"
        Message.innerHTML=player+" Won the Game!!!"
        wonTheGame=1
        console.log("hi")
    }

}


//restart function
PlayAgain.onclick=()=>{
    history.go(0)
} 
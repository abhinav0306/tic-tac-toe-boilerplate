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

boxElements.forEach((el,i,arr)=>{
    el.addEventListener("click",handleClick)
    // console.log(el)
    
})

function handleClick(event){
    let i= event.target.id
    // console.log(i)
    
}
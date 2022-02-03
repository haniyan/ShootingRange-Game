// wyszukiwanie diva

const viewfinder = document.querySelector(".viewfinder");
const troll = document.querySelector(".troll");
const startBtn = document.querySelector(".start")
const stopBtn = document.querySelector(".stop")
const shotBtn = document.querySelector(".shot")

// const divTenPosition = {
//     left: ,
//     right: ,
//     top: ,
//     bottom: ,
// }
// const divNinePosition = {
//     left: ,
//     right: ,
//     top: ,
//     bottom: ,
// }
// const divEightPosition = {
//     left: ,
//     right: ,
//     top: ,
//     bottom: ,
// }
// const divSevenPosition = {
//     left: ,
//     right: ,
//     top: ,
//     bottom: ,
// }
// const divSixPosition = {
//     left: ,
//     right: ,
//     top: ,
//     bottom: ,
// }
const divFifePosition = {
    left: 473,
    right: 837,
    top: 452,
    bottom: 809,
}

function shotPosition (){


    let currentPositionX = viewfinder.offsetLeft;
    let currentPositionY = viewfinder.offsetTop;

    console.log(currentPositionX,currentPositionY)


    if(currentPositionX>=0 && currentPositionX<=1000 && currentPositionY >=0&& currentPositionY <= 1000){
        console.log("+10 pkt");
    }
    else {
        console.log("looser");
    }
    troll.style.animation = "trollDie 2s infinite linear alternate";


}

function trollMoves(){


}

startBtn.addEventListener("click", ()=>{
    viewfinder.style.animation = "move 8s infinite linear alternate, moveTwo 8s infinite alternate"
    troll.style.animation = "trollBasic 3s infinite linear alternate"
})

stopBtn.addEventListener("click", ()=>{
    viewfinder.style.animation =  "paused";

})

shotBtn.addEventListener("click", shotPosition)


//trzeba znaleźć dobrą pozycję gdzie to wrzucić
// viewfinder.style.animation = "weaponRotate 0.2s infinite linear alternate";

// wyszukiwanie diva

const viewfinder = document.querySelector(".viewfinder");
const troll = document.querySelector(".troll");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const shotBtn = document.querySelector(".shot");
const scoreNumberBox = document.querySelector(".score-number");
const headHitBox = document.querySelector(".head");
const bellyHitBox = document.querySelector(".belly");
const legHitBox = document.querySelector(".leg");
const leftArmHitBox = document.querySelector(".arm-left");
const rightArmHitBox = document.querySelector(".arm-right");

console.log(headHitBox.offsetTop)

const viewfinderPosition = {
    left:,
    right:,
    width: 140,
    height: 160,
}

const headHitBoxPosition = {
    left: headHitBox.offsetLeft,
    top: headHitBox.offsetTop,
    width: 175,
    height: 180,
}
const bellyHitBoxPosition = {
    left: bellyHitBox.offsetLeft,
    top: bellyHitBox.offsetTop,
    width: 175,
    height: 200,
}
const legHitBoxPosition = {
    left: legHitBox.offsetLeft,
    top: legHitBox.offsetTop,
    width: 175,
    height: 100,
}
const leftArmHitBoxPosition = {
    left: leftArmHitBox.offsetLeft,
    top: leftArmHitBox.offsetTop,
    width: 200,
    height: 300,
}
const rightArmHitBoxPosition = {
    left: rightArmHitBox.offsetLeft,
    top: rightArmHitBox.offsetTop,
    width: 150,
    height: 250,
}

let score = 0;

function shotPosition() {


    let currentPositionX = viewfinder.offsetLeft;
    let currentPositionY = viewfinder.offsetTop;

    console.log(currentPositionX, currentPositionY)


    if (currentPositionX >= 0 && currentPositionX <= 1000 && currentPositionY >= 0 && currentPositionY <= 1000) {
        console.log("+10 pkt");
        score = score + 10;
        scoreNumberBox.innerHTML = `${score}`;

    } else {
        console.log("looser");
    }
    troll.style.animation = "trollDie 2s infinite linear alternate";


}


startBtn.addEventListener("click", () => {
    viewfinder.style.animation = "move 8s infinite linear alternate, moveTwo 8s infinite alternate"
    troll.style.animation = "trollBasic 3s infinite linear alternate"
})

stopBtn.addEventListener("click", () => {
    viewfinder.style.animation = "paused";

})

shotBtn.addEventListener("click", shotPosition)


//trzeba znaleźć dobrą pozycję gdzie to wrzucić
// viewfinder.style.animation = "weaponRotate 0.2s infinite linear alternate";

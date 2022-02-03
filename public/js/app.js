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

console.log(headHitBoxPosition.top, bellyHitBoxPosition.top)
function shotPosition() {

    //position in the moment of function call
    let currentX = viewfinder.offsetLeft;
    let currentY = viewfinder.offsetTop;
    let currentHeight = viewfinder.offsetTop - viewfinderPosition.height;
    let currentWidth = viewfinder.offsetLeft + viewfinderPosition.width;

    console.log(currentX, currentY)
    //head - collision detect
    if (currentX < headHitBoxPosition.left + headHitBoxPosition.width && currentX > headHitBoxPosition.left
        && currentY < headHitBoxPosition.top + headHitBoxPosition.height && currentY > headHitBoxPosition.top) {

        score = score + 20;
        scoreNumberBox.innerHTML = `${score}`;

        console.log("head");


    }
    //belly

    else if (currentX < bellyHitBoxPosition.left + bellyHitBoxPosition.width && currentX > bellyHitBoxPosition.left
        && currentY < bellyHitBoxPosition.top + bellyHitBoxPosition.height && currentY > bellyHitBoxPosition.top) {

        score = score + 5;
        scoreNumberBox.innerHTML = `${score}`;

        console.log("belly");
    }
    //leg

    else if (currentX < legHitBoxPosition.left + legHitBoxPosition.width && currentX > legHitBoxPosition.left
        && currentY < legHitBoxPosition.top + legHitBoxPosition.height && currentY > legHitBoxPosition.top) {

        score = score + 10;
        scoreNumberBox.innerHTML = `${score}`;
        console.log("leg");
    }
    //leftarm
    else if (currentX < leftArmHitBoxPosition.left + leftArmHitBoxPosition.width && currentX > leftArmHitBoxPosition.left
        && currentY < leftArmHitBoxPosition.top + leftArmHitBoxPosition.height && currentY > leftArmHitBoxPosition.top) {

        score = score + 7;
        scoreNumberBox.innerHTML = `${score}`;
        console.log("leftarm");
    }
    //rightarm
    else if(currentX < rightArmHitBoxPosition.left + rightArmHitBoxPosition.width && currentX > rightArmHitBoxPosition.left
        && currentY < rightArmHitBoxPosition.top + rightArmHitBoxPosition.height && currentY > rightArmHitBoxPosition.top){

        score = score + 7;
        scoreNumberBox.innerHTML = `${score}`;
        console.log("rightarm");
    }
    else {
        console.log("looser");
    }


}

function TrollIsDead() {
    troll.style.animation = "trollDie 2s infinite linear alternate";
}


startBtn.addEventListener("click", () => {
    viewfinder.style.animation = "move 10s infinite linear alternate, moveTwo 10s infinite alternate"
    // troll.style.animation = "trollBasic 8s infinite linear alternate"
})

stopBtn.addEventListener("click", () => {
    viewfinder.style.animation = "paused";

})

shotBtn.addEventListener("click", shotPosition)


//trzeba znaleźć dobrą pozycję gdzie to wrzucić
// viewfinder.style.animation = "weaponRotate 0.2s 1 linear alternate";

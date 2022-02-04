// wyszukiwanie diva

const viewfinder = document.querySelector(".viewfinder");
const troll = document.querySelector(".troll");
const bloodDiv = document.querySelector(".blood");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const shotBtn = document.querySelector(".shot");

const scoreNumberBox = document.querySelector(".score-number");

const headHitBox = document.querySelector(".head");
const bellyHitBox = document.querySelector(".belly");
const legHitBox = document.querySelector(".leg");
const leftArmHitBox = document.querySelector(".arm-left");
const rightArmHitBox = document.querySelector(".arm-right");


const progressDone = document.querySelector(".progress-done");
const progressBar = document.querySelector(".progress");


let score = 0;
const lifeScore = 600;



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


function shotPosition() {

    //position in the moment of function call
    let currentX = viewfinder.offsetLeft;
    let currentY = viewfinder.offsetTop;
    console.log(currentX,currentY)
    console.log(legHitBoxPosition.left,legHitBoxPosition.top)
    //head - collision detect
    if (currentX < headHitBoxPosition.left + headHitBoxPosition.width && currentX > headHitBoxPosition.left
        && currentY < headHitBoxPosition.top + headHitBoxPosition.height && currentY > headHitBoxPosition.top) {

        score = score + 20;
        scoreNumberBox.innerHTML = `${score}`;

        showBlood()

        console.log("head");


    }
    //belly

    else if (currentX < bellyHitBoxPosition.left + bellyHitBoxPosition.width && currentX > bellyHitBoxPosition.left
        && currentY < bellyHitBoxPosition.top + bellyHitBoxPosition.height && currentY > bellyHitBoxPosition.top) {

        score = score + 5;
        scoreNumberBox.innerHTML = `${score}`;

        showBlood()

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
    else if (currentX < rightArmHitBoxPosition.left + rightArmHitBoxPosition.width && currentX > rightArmHitBoxPosition.left
        && currentY < rightArmHitBoxPosition.top + rightArmHitBoxPosition.height && currentY > rightArmHitBoxPosition.top) {

        score = score + 7;
        scoreNumberBox.innerHTML = `${score}`;


        console.log("rightarm");
    }
    else {
        showLoserMessage()
        console.log("looser");
    }

    TrollIsDead()
    checkLifeScore()
}

function TrollIsDead() {
    if (score >= lifeScore) {
        troll.style.animation = "trollDie 2s 1 linear alternate";

        setTimeout(() => {
            viewfinder.style.animation = "paused";
            troll.style.animation = "paused"
        }, 3000)


    }
// + trollBasic paused + div winner

}

function checkLifeScore() {
    if (score < lifeScore) {

        progressDone.style.width = score + 'px';
        progressDone.innerText = `${score}/${lifeScore}`;

        if (score >= 100) {

            progressDone.style.fontSize = "1.5em";
            progressDone.style.opacity = 1;
        }

    }

    else {
        progressDone.style.width = lifeScore + 'px';
        progressDone.innerText = "WYGRANA!";
    }

}

function showBlood() {
    bloodDiv.style.display = "block";

    setTimeout(()=>{
        bloodDiv.style.display = "none";
    }, 500)

}

function showLoserMessage(){

    let loserMessage = document.createElement("div");
    troll.appendChild(loserMessage);
    loserMessage.style.backgroundImage= "url(../assets/ciapa.png)";
    loserMessage.style.backgroundSize= "contain";
    loserMessage.style.backgroundRepeat= "no-repeat";
    loserMessage.style.position = "absolute";
    loserMessage.style.top= "38%";
    loserMessage.style.left= "15%";

    loserMessage.style.width = "200px";
    loserMessage.style.height = "260px";
    loserMessage.style.zIndex = "2";



    setTimeout(()=>{
        troll.removeChild(loserMessage)

    }, 500)


}

function stopGame(){
    progressDone.style.width = 0 + 'px';
    score = 0;
    progressDone.innerText = "0";
    scoreNumberBox.innerHTML = "0";
}

startBtn.addEventListener("click", () => {
    // viewfinder.style.animation = "move 12s infinite linear alternate, moveTwo 20s infinite alternate"
    troll.style.animation = "trollBasic 2s infinite linear alternate"

})

stopBtn.addEventListener("click", () => {
    viewfinder.style.animation = "paused";
    troll.style.animation = "paused";

    stopGame()

})

shotBtn.addEventListener("click", ()=>{

    shotPosition()

})




//trzeba znaleźć dobrą pozycję gdzie to wrzucić
// viewfinder.style.animation = "weaponRotate 0.2s 1 linear alternate";



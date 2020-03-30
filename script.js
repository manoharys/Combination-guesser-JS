const gameArea = document.querySelector('.game');
const button = document.querySelector('button');
const message = document.querySelector('.message');
btnStyle();
let gamePlay = false;
let score = 0;

button.addEventListener('click', function () {
    if (!gamePlay) {
        gamePlay = true;
        score = 0;
        gameArea.innerHTML = "";
        maker();
        message.innerHTML = "guess the combo"
        button.innerHTML = 'Check Combo';

    } else {
        // console.log('cheker');
        score++;
        message.innerHTML = score + " Guess";
        const k = document.querySelectorAll('.numb');
        //console.log(k);
        let winCondition = 0;
        for (let i = 0; i < k.length; i++) {

            //console.log(k[i].value);
            if (k[i].value == k[i].correct) {
                //console.log("matched");
                k[i].style.backgroundColor = "green";
                k[i].style.color = "white";
                winCondition++;
            } else {
                //console.log("not matched");
                let color = (k[i].value < k[i].correct) ? "blue" : "red";
                k[i].style.backgroundColor = color;

            }
            if (winCondition == k.length) {
                endGame();
            }
        }
    }

});

//function which generate the input fields.
function maker() {
    for (let x = 0; x < 5; x++) {
        let element = document.createElement('input');
        //console.log(element);
        element.setAttribute('type', 'number');
        element.style.width = "100px";
        element.style.fontSize = '2rem';
        element.style.textAlign = 'center';
        element.max = 9;
        element.min = 0;
        element.size = 1;
        element.order = x;
        element.correct = Math.floor(Math.random() * 10);
        element.value = 0;
        element.classList.add('numb');

        //console.log(element.value);
        element.style.marginLeft = '30px';
        gameArea.appendChild(element);
    }
}


//adding styles to the button
function btnStyle() {
    message.style.fontSize = '1.4rem';
    message.style.textAlign = "center";
    gameArea.style.display = 'flex';
    gameArea.style.marginLeft = '350px';
    gameArea.style.marginTop = '50px';
    button.style.border = 'none';
    button.style.borderRadius = '15px';
    button.style.color = '#fffff';
    button.style.fontSize = '1.3rem'
    button.style.width = '200px';
    button.style.padding = '10px';
    button.style.outline = 'none';
    button.style.margin = '250px 0 0 550px';
    button.style.border = '1px solid black';
    button.addEventListener('mouseover', function () {
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
        this.style.cursor = 'pointer';
    })
    button.addEventListener('mouseout', function () {
        this.style.backgroundColor = '#ffff';
        this.style.color = 'black';
        this.style.cursor = 'pointer';

    })
}

//Function which End the Guessing

function endGame() {
    message.innerHTML = "you took " + score + " guesses";
    gamePlay = false;
    button.innerHTML = "restart";
}
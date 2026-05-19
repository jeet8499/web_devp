let boxes = document.querySelectorAll(".box");
let resetb = document.querySelector("#btn");
let newGamebtn = document.querySelector('#new-btn');
let msgcon = document.querySelector('.msg');
let msgi = document.querySelector('#msgnew');


let turnO = true;
let count = 0;

let winpattern= [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetGame = () => {
    turnO = true;
    count=0;

    enableboxes();
    msgcon.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }

        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count===9 && !isWinner){
            gameDraw();
        }
    });
});

const gameDraw = () => {
msgi.innerText = `Game was a Draw !!`;
msgcon.classList.remove('hide');
disableboxes();
};


const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    msgi.innerText = `congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disableboxes();
};



const checkWinner = () => {
    for (let pattern of winpattern) {

        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        );

        let post1Val = boxes[pattern[0]].innerText;
        let post2Val = boxes[pattern[1]].innerText;
        let post3Val = boxes[pattern[2]].innerText;

        if (post1Val !== "" && post2Val !== "" && post3Val !== "") {

            if (post1Val === post2Val && post2Val === post3Val) {
                console.log("winner!",post1Val);
                showWinner(post1Val);
                return true;
            }
        }
    }

    return false;
    
};

newGamebtn.addEventListener("click" ,resetGame);
resetb.addEventListener("click", resetGame);


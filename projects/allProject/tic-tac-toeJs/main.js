let allblocks = document.querySelectorAll("#gameScreen div")
let xPlayer = () => {
        allblocks.forEach((square) => {
            square.addEventListener("click",function () {
                if (square.innerHTML === "") {
                    square.classList.add("xPlayer");
                    square.innerHTML = "x";
                }
            })
        })
}

let oPlayer = () => {
        allblocks.forEach((square) => {
            square.addEventListener("contextmenu",function (e) {
                    e.preventDefault();
                if (square.innerHTML === "") {
                    square.classList.add("oPlayer");
                    square.innerHTML = "o";
                }
            })
        })
}

let clearBoard = () => {
    allblocks.forEach(square => {
        square.innerHTML = "";
        if (square.classList.contains("oPlayer")) {
            square.classList.remove("oPlayer");
        } else {
            square.classList.remove("xPlayer");
        }
    })
}

var ok;
let checkWin = () => {
    let mychecker = window.setInterval(function () {
        for (let i = 0; i < 3; i++) {
            if (allblocks[0+(3*i)].innerHTML === "x" && allblocks[1+(3*i)].innerHTML === "x" && allblocks[2+(3*i)].innerHTML === "x") {
                window.setTimeout(() => ok = alert("player 1 win the game"),300);
                clearBoard();
                clearInterval(mychecker);
            } else if (allblocks[0+(3*i)].innerHTML === "o" && allblocks[1+(3*i)].innerHTML === "o" && allblocks[2+(3*i)].innerHTML === "o") {
                window.setTimeout(() => ok = alert("player 2 win the game"),300);
                clearBoard();
                clearInterval(mychecker);
            } else if (allblocks[0+(1*i)].innerHTML === "o" && allblocks[3+(1*i)].innerHTML === "o" && allblocks[6+(1*i)].innerHTML === "o") {
                window.setTimeout(() => ok = alert("player 2 win the game"),300);
                clearBoard();
                clearInterval(mychecker);
            } else if (allblocks[0+(1*i)].innerHTML === "x" && allblocks[3+(1*i)].innerHTML === "x" && allblocks[6+(1*i)].innerHTML === "x") {
                window.setTimeout(() => ok = alert("player 1 win the game"),300);
                clearBoard();
                clearInterval(mychecker);
            }
        }
        if (allblocks[2].innerHTML === "x" && allblocks[4].innerHTML === "x" && allblocks[6].innerHTML === "x") {
            window.setTimeout(() => ok = alert("player 1 win the game"),300);
            clearBoard();
            clearInterval(mychecker);
        } else if (allblocks[2].innerHTML === "o" && allblocks[4].innerHTML === "o" && allblocks[6].innerHTML === "o") {
            window.setTimeout(() => ok = alert("player 2 win the game"),300);
            clearBoard();
            clearInterval(mychecker);
        } else if (allblocks[0].innerHTML === "o" && allblocks[4].innerHTML === "o" && allblocks[8].innerHTML === "o") {
            window.setTimeout(() => ok = alert("player 2 win the game"),300);
            clearBoard();
            clearInterval(mychecker);
        } else if (allblocks[0].innerHTML === "x" && allblocks[4].innerHTML === "x" && allblocks[8].innerHTML === "x") {
            window.setTimeout(() => ok = alert("player 1 win the game"),300);
            clearBoard();
            clearInterval(mychecker);
        } 
    },200)
}
//here i reset the checkWin function if one of the player win
window.setInterval(() => {
    if (ok === undefined) {
        checkWin();
    }
},400)

//all functions in this game
xPlayer();

oPlayer();

checkWin();


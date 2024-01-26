let btns = document.querySelectorAll(".box");
let reset = document.getElementById("re-set");
let msgcon = document.querySelector(".msg-con");
let new0 = document.querySelector(".newgm");
let msg = document.querySelector(".msg")

let turno = true;
let count = 0;
const winnerP = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (turno) {
            btn.innerText = "0"

            turno = false

        }
        else {
            btn.innerText = "X"
            turno = true
        }
        btn.disabled = true
        count++
        let iswinner = checkWinner()

        if (count === 9 && !iswinner) {
            drawgm()
        }
    })
})
const checkWinner = () => {
    for (const lines of winnerP) {
        let p1 = btns[lines[0]].innerText
        let p2 = btns[lines[1]].innerText
        let p3 = btns[lines[2]].innerText

        if (p1 != "" && p2 != "" && p3 != "") {
            if (p1 == p2 && p2 == p3) {

                showWinner(p1)
                disabled()
            }
        }
    }
}



let drawgm = () => {
    msgcon.classList.remove("hide")
    msg.innerText = `Both Played Well`
}

const showWinner = (winner) => {
    msgcon.classList.remove("hide")
    msg.innerText = `Congratulation the winner is ${winner}`
}


const disabled = () => {
    for (const box of btns) {
        box.disabled = true
    }
}

const enabled = () => {
    for (const box of btns) {
        box.disabled = false;
        box.innerText = ""
    }
}

let resetgm = () => {
    turno = true
    enabled()
    msgcon.classList.add("hide")
    count = 0;

}

reset.addEventListener("click", resetgm)
new0.addEventListener("click", resetgm)




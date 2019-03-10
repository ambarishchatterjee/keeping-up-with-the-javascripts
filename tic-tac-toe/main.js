//gamepad area
const gameBoard = document.getElementById("gameBoard");

function createBoard(){
    for (let i = 0; i < 9; i++) {
        console.log(i);
        
        const gamecell = document.createElement("div");
        gamecell.className("gamecell");
        
    }
    
};
createBoard();

const ticBox = gameBoard.querySelectorAll(".tic");

const winningComb = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

ticBox.forEach((tac,index) => {
    tac.innerHTML = "";
    //console.log(j);
    tac.addEventListener("click",(e,j=0)=>{
        j++;
        let target = e.target;
        console.log(e.target);
        if (target.innerHTML === "") {
            target.innerHTML = "X";
        }else{
            target.innerHTML = "O";
        }
        
        
    })
    
}) 
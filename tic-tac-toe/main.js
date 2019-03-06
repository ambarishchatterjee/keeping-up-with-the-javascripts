//gamepad area
const gameBoard = document.getElementById("gameBoard");

const ticBox = gameBoard.querySelectorAll(".tic");

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
//gamepad area
let gameBoard = document.getElementById("gameBoard");

function createBoard(){
    for (let i = 0; i < 9; i++) {
        
        const gamecell = document.createElement("div");
        gamecell.className = "gamecell";
        gamecell.setAttribute("id","cell-"+i);
        gamecell.setAttribute("dataid",i);
        //gamecell.innerHTML = null;
        gameBoard.appendChild(gamecell);
        
    }

    function createSpan() {
        const gameCells = gameBoard.querySelectorAll(".gamecell");
        gameCells.forEach(function(cell) {
            let i = 0;
            cell.addEventListener("click",function(id){
                console.log(this.id);
                let value = this.innerHTML;
                if (!value) {
                    if (value === "O") {
                        this.innerHTML = "X"
                    } else{
                        this.innerHTML = "O"
                    }
    
                }
            })
        })
    }
    createSpan();
    
};
createBoard();
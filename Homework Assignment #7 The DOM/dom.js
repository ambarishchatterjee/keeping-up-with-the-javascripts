//create element
let rectangleWrapper = document.getElementById("rectangleWrapper");
//let rectangle = rectangleBox.querySelectorAll
function createRectangle(){
    for (let i = 0; i < 10; i++) {
        let rectangleBox = document.createElement("div");
        let colorBg =  document.createElement("div");
        let colorName =  document.createElement("h4");
        rectangleBox.className = "rectangle";
        rectangleBox.setAttribute("id", `rect-${i}`);
        colorBg.className = "colorBg";
        colorName.innerText = `#FF5${i}${i}${i}`;
        colorBg.setAttribute("style", `background-color: #FF5${i}${i}${i}`);
        rectangleBox.appendChild(colorBg);
        rectangleBox.appendChild(colorName);
        rectangleWrapper.appendChild(rectangleBox);
    }
    rectangleWrapper.setAttribute("style","padding: 50px 50px 0");

    function printRectangleId(){
        const newRectangles = rectangleWrapper.querySelectorAll(".rectangle");
        console.log("Here are the rectangle IDs");
        rectangleIds = [];
        newRectangles.forEach(function(rectangleId){
            console.log(rectangleId.id);
            //rectangleIds += rectangleId.id+", ";
        });
        //console.log("Here are the rectangle IDs:" + rectangleIds);
        
    }
    printRectangleId();

    function updateTitle(){
        const h1 = document.getElementsByTagName("h1");
        const heading = h1[0].innerText;
        let title = document.createElement("title");
        title.innerHTML = heading;
        let head = document.getElementsByTagName("head");
        head[0].appendChild(title);
        console.log(heading);
        
    }
    updateTitle();
}
createRectangle();
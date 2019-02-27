/*
Task:
What are the differences between let, const and var? When would each be appropriate too use? In your own words, write 1 - 2 paragraphs explaining the different use-cases for each. If English is not your native language, feel free to write in whatever language you prefer. Just please note which language it is at the top of the assignment, so we know how to translate it.
Create a file called variables.js and add your explanation as comments at the top of the page.
Then, within the document write 3 code examples (1 for var, 1 for const and 1 for let) showcasing the use-cases you explained above.

Extra Credit:
To earn extra credit, add an explanation of "hoisting" to the top of your document. What is hoisting? What does the word mean, and how does hoisting work in Javascript?

*/
/* Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.
In JavaScript, a variable can be declared after it has been used. In other words; a variable can be used before 
it has been declared.*/


console.log("myVariable = " + myVariable); //myVariable is undefined
var myVariable =5;

//var myVariable;
//console.log("myVariable = " + myVariable);
//myVariable = 5;


//Differences between let, const and var

/* A variable declared with the VAR keyword outside a function is a global variable and 
is passed by reference to their descendants.
In the following snippet the varible i has been declared as a global variable that it's values is overwritten
inside the function vare(). In this case we can say that the scope of the varible i is global*/

console.log("Var example");
console.log();

var i = "global";
function vare() {
    i = "local";
    console.log(i); // func vare
}
vare();
console.log(i); // Outside vare()

/* If we declare the i variable with the var keyword inside the vare2() function then it's scope its local to the function where
it has been declared*/

console.log();

var i = "global";
function vare2() {
    var i = "local"; 
    console.log(i); // vare2()
}
vare2();
console.log(i); // global outside vare2()

/* A varible, declared exclusively inside a function, it does not exist outised its scope. For example:*/
console.log();
function vare3(){
    var aVariable = "local";
    console.log(aVariable); //func vare3
}


console.log("let keyword examples");
console.log();
let k = 0; // i =0
function let1(){
    k = 1;
    let j = 2;
    if(true){
        console.log(k); // i = 1
        console.log(j); // j = 2
    }
}
let1();


function let2() {
    let x = 0;
    if(true) {
        let x = 1; // Block scope.
        console.log(x); // 1
    }
    console.log(x); // 0
}
let2();

// const keyword

/* Consts defines a constant and its scope is the same as let. With const you can't reassign it's value to a new value, but 
in case of objets or arrays, it is allowed to change the value of its elements.
const song = "Metallica";
song = 2;  TypeError: Assignment to constant variable
const song ={name: 'Nothing Else Mettar'};
song.name = 'Nothing Else Mettar';
console.log(song.name) //Nothing Else Mettar
*/
/*
Details:
Let's go back to your syllogism (logical argument) examples from Homework #3. Now it's time to turn those loose bits of logic into functions. Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all) without throwing an exception.


Extra Credit:
If you did the extra credit on Homework #3, let's turn that example into a function as well. It should accept in 2 arguments:

1. An array of all cake possibilities (vanilla or chocolate)
2. A boolean representing whether or not the cake is chocolate.

It should return a string indicating the actual flavor of the cake.*/

//set of man & god
const manGod = {
  Socrates: "man",
  Ram: "god",
  Barun: "god",
  Allan: "man",
  Hanuman: "god",
  John: "man",
  Billy: "man"
};

function manChecker(mortalObj){
  var mortal = [];
//mortal array to filter all men
  let i = 0;
  for (let name in mortalObj) {
    if (mortalObj[name] === "man") {
      mortal[i] = name;
      i++;
    }
  }
  return mortal;
}

let manchecker = manChecker(manGod);

//function to chek name is mortal with passing string and array object
function mortalChecker(name, manArray) {
  //check if name and array entered
  if(name && manArray){
    //check if name present in man array
    if(manArray.indexOf(name) > -1){
      //return true if name exists
      console.log(true);
    }else{
      console.log(false);
    }  
  }else{
    console.log("Please enter name and name array")
  }
}
//call mortal checker function 
mortalChecker("Socrates",manchecker);


//Cake flavor checker function 
function cakeFlavor(possibilities, cakeIsChocolate) {
  if (cakeIsChocolate && possibilities.includes("chocolate")) {
    return "chocolate";
  } else if (!cakeIsChocolate && possibilities.includes("vanilla")) {
    return "vanilla";
  } else {
    return "unknown flavour";
  }
}
//call flavor checker function
cakeFlavor(["chocolate", "vanilla"], false);
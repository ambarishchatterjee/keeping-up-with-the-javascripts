/*
Details:
Let's look at a popular logical argument (a syllogism)

All men are mortal
Socrates is a man.
  Therefore, socrates is mortal.

    Using "if statements" and any other logical operators and data - types you see fit, recreate this logical argument.Your code should make clear that "socrates" is part of a collection of items referred to as "men", and that all members of this collection are mortal.You should also then demonstrate that since Socrates is part of this collection, it follows that he is mortal as well.

Extra Credit:
Got the hang of creating a logical argument ? Want to try another one ? Try this one as well:

This cake is either vanilla or chocolate.
This cake is not chocolate.
  Therefore, this cake is vanilla.*/

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

//mortal array to filter all men
var mortal = [];

let i = 0;
for (let name in manGod) {
  if (manGod[name] === "man") {
    mortal[i] = name;
    i++;
  }
}
//check if socrates is mortal
mortal.forEach(function(man) {
  if (man === "Socrates") {
    console.log("socrates is mortal!");
  }
});

//set of cakes
const cakes = {
  cake1: "vanilla",
  cake2: "chocolate",
  cake3: "vanilla",
  cake4: "vanilla",
  cake5: "chocolate",
  cake6: "chocolate",
  cake7: "vanilla"
};

//check the flavour of cake
for(let flavour in cakes){
  if (cakes[flavour] !== "chocolate"){
    console.log(`${flavour} is vanilla`)
  }
  else{
    console.log(`${flavour} is chocolate`)
  }
}
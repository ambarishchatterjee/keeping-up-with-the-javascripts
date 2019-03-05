/*
Details:
You're about to do an assignment called "Fizz Buzz", which is one of the classic programming challenges. It is a favorite for interviewers, and a shocking number of job-applicants can't get it right. But you won't be one of those people. Here are the rules for the assignment (as specified by Imran Gory):
Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
For numbers which are multiples of both three and five print "FizzBuzz".

Extra Credit:
Instead of only printing "fizz", "buzz", and "fizzbuzz", add a fourth print statement: "prime". You should print this whenever you encounter a number that is prime (divisible only by itself and one). As you implement this, don't worry about the efficiency of the algorithm you use to check for primes. It's okay for it to be slow.
*/    

//fizzbuzz
function fizzBuzz(){
    for (let i = 1; i <= 100; i++) {
        //check for multiples of 3 & 5
        if ((i%3===0) && (i%5)===0) {
            console.log("FizzBuzz");
            continue;
        }else if ((i%3)===0) {         //check for multiples of 3
            console.log("Fizz");
            continue;
                        
        }else if ((i%5)===0) {        //check for multiples of 5
            console.log("Buzz");
            continue;
            
        }else if (test_prime(i)) {        //check prime numbers
            console.log("Prime");
            continue;
            
        }
        //output modified series.
        console.log(i);                        
    }
}

//check for prime numbers
function test_prime(n){
    if (n===1){
        return false;
    }else if(n === 2){
        return true;
    }else{
        for(var x = 2; x < n; x++){
            if(n % x === 0){
                return false;
            }
        }
    return true;  
    }
}
//call the function
fizzBuzz();    
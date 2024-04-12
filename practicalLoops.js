//Part 1: Fizz Buzz

/*Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number. */

for (let i = 1; i < 101; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Fizz Buzz.');
    } else if (i % 3 == 0) {
        console.log('Fizz.');
    } else if (i % 5 == 0) {
        console.log('Buzz.');
    } else {
        console.log(i);
    }
}

/*Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop. */
let n = 9;
let i;
let prime;
for (i=n; true; i++)
{
    prime = true;
    for (j = 2; j < i; j++){
        if (i % j == 0){
            prime = false;
            break;
        }
    }

    if (prime) {
        console.log(`Prime number is  ${i}`);
        break;
    }
}



    

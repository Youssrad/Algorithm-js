// Pass in a number to loop up to and add all of the prime numbers. A prime number i a whole number greater than 1 whose only factors are 1 and itself
// ex : sumAllPrime(10) == 17


function sumAllPrime(number) {
    var total = 0; 

    function checkForPrime(i) {
        for (let j = 2; j < i ; j ++) {
            if(i % j == 0) {
                return false; 
            }
        }
        return true; 
    }

    for(let i = 2 ; i <= number; i++)
    {
        if(checkForPrime(i)){
            total += i;
        }
    }
  

    return total;
}

const output = sumAllPrime(10); 

console.log(output);
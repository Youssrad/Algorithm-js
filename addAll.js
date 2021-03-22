// Return the sum of all parameters enterred, regardless of the amount of params - NO ARRAYS


function addAll(...numbers) {
    // Solution ES-5 & for loop 
    // var args = Array.prototype.slice.call(arguments);
    // var total = 0;
    // for(i = 0; i < args.length; i++){
    //     total += args[i];
    // }
    // return total; 

    //// Solution 2: ES6 ...rest & reduce/forEach
    // var total = 0;
    // numbers.forEach(num => total += num)
    // return total;

   return numbers.reduce((acc, curr) => acc + curr);
}

const output = addAll(1,2,3,4,5);

console.log(output);
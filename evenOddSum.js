// function that takes an array and return an array with the sum of even and odd numbers

// ex: 
// evenOddSum([50, 60, 60, 45, 71]) == [170, 116]

function evenOddSum(arr){
    let evenSum = 0; 
    let oddSum = 0; 

    arr.forEach((val) => val % 2 === 0 ? evenSum += val : oddSum += val); 


    return [evenSum, oddSum];
}

const output = evenOddSum([50, 60, 60, 45, 71]); 

console.log(output);
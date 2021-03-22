// given an array of int, return the biggest product of two adjacent elements

// [3,6, -2,-5, 7,3] == 21  -----> 7 * 3


function adjacentElementProduct(arr) {
    let largestProduct = arr[0] * arr[1]; 

    for(let i = 1; i < arr.length - 1; i++){
        let product = arr[i] * arr[i + 1];
        product > largestProduct ? largestProduct = product : largestProduct; 
    }
    return largestProduct;
}


const output = adjacentElementProduct([3,6, -2,-5, 7,3]); 

console.log(output);
// This is a demo task.

// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// Copyright 2009–2021 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     if (!A.includes(1)) return 1; 
//     return A.reduce((acc, curr) => {
//         if (curr <= 0) return acc; 
//         const min = curr + 1; 
//         return !A.includes(min) && acc > min ? min : acc; 
//     }, 10000)
// }



function solution(A) {
    let x = 1
        
    A.filter(x => x >= 1)
    .sort((a, b) => a - b)
    .map((val, i, arr) => {
        if(x < arr[i]) return
        x = arr[i] + 1
    })

    return x
}





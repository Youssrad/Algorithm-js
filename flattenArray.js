function flattenArray(arrays) {
    // Solution 1: 
    // return arrays.reduce((a, b) => a.concat(b));
    //Solution 2: 
    // return [].concat.apply([], arrays);
    //Solution 3: 
    return [].concat(...arrays);
}


const output = flattenArray([[1,2],[3,4],[5,6]]); 

console.log(output);
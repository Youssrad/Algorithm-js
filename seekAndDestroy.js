// Remove from the array whatever is in the following arr and return the leftover array
// ex seekAndDestroy([1,2,3,4,'hello'], 2, 4) == [1,3,'hello']

function seekAndDestroy(arr, ...rest) {
    // Popular solution: arguments, indexOf, filter
    // const args = Array.from(arguments);

    // function filterArr(arr) {
        //Return true if not in array
    //     return args.indexOf(arr) === -1;
    // }

    // return arr.filter(filterArr);

    // Solution 2; ...rest, filter, & includes

    return arr.filter(val => !rest.includes(val));
}

const output = seekAndDestroy([1,2,3,4,'hello'], 2, 4); 

console.log(output);
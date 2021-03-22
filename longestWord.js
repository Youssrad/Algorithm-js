function longestWord(str) {

    // remove coma , ponctuation ... and put in array

    const wordArr = str.toLowerCase().match(/[a-z0-9]+/g);

    // Sort By lenght

    const sorted = wordArr.sort((a, b) => b.length - a.length); 

    // if multiple word put into array 

    const longestWordArr = sorted.filter(word => word.length === sorted[0].length); 

    if (longestWordArr.length === 1) {
        return longestWordArr[0];
    } else return longestWordArr; 
}

const output = longestWord("hello ok baba"); 

console.log(output);      
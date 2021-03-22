// Given a string S of length N, the task is to find the smallest balanced substring in S. 
//If no such substring is present, print -1.

// A string is balanced if every letter in the string appears in both uppercase and lowercase, 
//i.e “AabB” is a balanced string whereas “Ab” is not a balanced string. 
 

// Examples:

// Input: S = “azABaabba” 
// Output: ABaab
// Explanation:
// Substring {S[2], …, S[6]} (0-based indexing) is the smallest substring which is balanced.

// Input: S = “Technocat”
// Output: -1


function findSmallestBalanced(str) {
    const lowerMap = {}; // Map only lowercase
    const upperMap = {}; // Map only upperCase
    const strMap = {}; // Map whole String
    const minChar = []; // non duplicated char to remove


    // Map the whole string
    str.toLowerCase().split('').forEach(char => {
        strMap[char] ? strMap[char]++ : strMap[char] = 1; 
    })

    // Find non duplicated and remove from map
    for (let char in strMap) {
        if(strMap[char] === 1) {
            minChar.push(char); 
            delete strMap[char];
        }
    }

    // clean Str from non duplicated

    const clean = str.split('').filter(char => !minChar.includes(char));

    clean.forEach(char => {
        char === char.toLowerCase() ? 
        lowerMap[char]++ || (lowerMap[char] = 1) 
        : upperMap[char]++ || (upperMap[char] = 1); 
    })


    // check if keys match when lowerCase

    const upperKeys = Object.keys(upperMap).map(key => key.toLowerCase()).join('');
    const lowerKeys = Object.keys(lowerMap).join('');


    if(upperKeys === lowerKeys){
        const windowstr = [...new Set(clean)].join('');

        const windowMap = {};
        [...new Set(windowstr.split(''))].forEach(char => {
        if(windowMap[char]) {
            windowMap[char]++;
        } else {
            windowMap[char] = 1;
        }
       });
        // FINDING THE Substring

   let charCount = windowstr.length; 
   let startIndex = 0; 
   let minLength = Number.MAX_VALUE;


   let i = 0
   let j = 0

   while(i <= str.length) {
            // first pointer
            // windowMap[str[j]] is the number of char left for char 1st pointer
            if(windowMap[str[i]] > 0) charCount--;
            windowMap[str[i]]--;
            i++;

            // second pointer
            while(charCount === 0){
                // check if min window < min length
                if((i - j) < minLength) {
                    minLength = i - j;
                    startIndex = j;
                }

                windowMap[str[j]]++;
                if(windowMap[str[j]] > 0) charCount ++;
                j++;
            }
   }

        return minLength === Number.MAX_VALUE ? -1 : str.substr(startIndex, minLength);

    } else return -1; 
   
}

const output = findSmallestBalanced('azABaabba');

console.log(output);
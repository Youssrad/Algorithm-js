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
    const charMap = {};
    let minChar = '';
   
    // Map string {a: 1} key ==> char, value: number of occurence (case insensitive)
   str.toLowerCase().split('').forEach(char => {
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });
    // remove non duplicated char from map 
    for (let char in charMap) {
        if(charMap[char] === 1) {
            minChar = char; 
            delete charMap[char]
        }
    }

    console.log(charMap);
    
    // Substring we want to find in the given str
    const windowstr = [...new Set(str.replace(minChar, ''))].join('')
    console.log(windowstr);

    // New Window map of duplicates both uppercase and lowercase
    const windowMap = {};
    [...new Set(str.replace(minChar, '').split(''))].forEach(char => {
    if(windowMap[char]) {
        windowMap[char]++;
    } else {
        windowMap[char] = 1;
    }
   });

   console.log(windowMap)

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
}

const output = findSmallestBalanced('Technocat');

console.log(output);
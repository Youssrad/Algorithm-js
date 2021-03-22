function isPalindrome(str) {
    const revStr =  str.toLowerCase().split('').reduce((revString, char) => char + revString, ''); 
    //return revStr == str ?  true : false;
    // toLowerCase to make it case insensitive
    return revStr === str.toLowerCase();
}

const output = isPalindrome("madam")

console.log(output);
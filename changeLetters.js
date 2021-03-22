// Change every letter of the string to the one that follows it and capitalize de vowels
// Z should return A 
// ex. 'hello there' === 'Ifmmp UIfsf'


function letterChange(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, (char) => {
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    })
    newStr = newStr.replace(/[a|e|i|o|u]/gi, vowels => vowels.toUpperCase())
    return newStr;
}


const output = letterChange("hello Therez"); 


console.log(output);
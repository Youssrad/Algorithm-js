function capitalizeLetter(str) {
    // const strArr  = str.toLowerCase().split(' '); 

    // for(var i =  0; i < strArr.length ; i ++) {
    //     strArr[i] = strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
    // }
    // return strArr.join(' ');


    ///////////////////////////  clean method better option
    //  return str.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');

    ////////////////////////// Regex method

    return str.toLowerCase().replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}

const output = capitalizeLetter("i love javaScript"); 

console.log(output);
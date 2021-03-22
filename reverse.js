
function reverseStr(str) {
  //return str.split('').reverse().join(''); (messy way)


  ////////////  ( old schoool)

//   let revStr = ''; 

//   for (let i = str.length - 1; i >= 0 ; i --) {
//       revStr = revStr + str[i];
//   }
//   return revStr;


    //////////// (old schoool)

    // let revStr = ''; 

    // for (let i = 0 ; i <= str.length - 1 ; i ++) {
    //     revStr = str[i] + revStr ;
    // }
    // return revStr;

    /////////// ES6 version

    // let revStr = ''; 

    // for (let char of str) {
    //     revStr = char + revStr ;
    // }
    // return revStr;

    ////////////// ES6 version 2

    // let revStr = ''; 
    // str.split('').forEach(char => revStr = char + revStr);

    // return revStr;


    /////////// Reduce() High order method +++ 

    return str.split('').reduce((revStr, char) => char + revStr, '');
}

const output = reverseStr("Hello"); 

console.log(output); 



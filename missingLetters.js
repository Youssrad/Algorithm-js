// find the missing letter 
// ex: 
// findMissingLetters('abce') == 'd'
//findMissingLetters('abcdefghjklmno') == 'i'
// if no letters missing return undefined
// findMissingLetters('abcdefghijklmnopqrstuvxxyz') == undefined


function findMissingLetters(str) {
    let compare = str.charCodeAt(0);

    let missing;
    str.split('').map((char, i) => {
        if(str.charCodeAt(i) == compare) {
            ++compare; 
        } else {
            missing = String.fromCharCode(compare);
        }
    })

    return missing;
}

const output = findMissingLetters('abcdefghijklmnopqrstuvwxyz'); 

console.log(output);
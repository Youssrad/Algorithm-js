function reverseInt(int){
    const revstr = int.toString().split('').reduce((revString, char) => char + revString, '');
    return parseInt(revstr) * Math.sign(int);
}

const output = reverseInt(-124);

console.log(output);
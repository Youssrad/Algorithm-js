function fizzbuzz(num) {
    const fizzbuzz = [];
    for(let i = 1 ; i <= num; i++) {
        if(i % 15 === 0) {
            fizzbuzz.push(`${i}: fizzbuzz`);
        } else if (i % 3 === 0) {
            fizzbuzz.push(`${i}: fizz`);
        } else if (i % 5 === 0) {
            fizzbuzz.push(`${i}: buzz`);
        }
    }
    return fizzbuzz; 
}


const output = fizzbuzz(100); 
console.log(output); 
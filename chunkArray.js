function chunkArray(arr, len) {
    /// Solution 1 : While loop 
    // const chunckedArr = []; 

    //loop while index < arr.lenght
//     let i = 0;
//   while (i < arr.length){
//        chunckedArr.push(arr.slice(i, i + len)); 
//         i += len;
//     }
//     return chunckedArr;
    /// Solution 2: Foreach

    const chunckedArr = [];

    arr.forEach((val) => {
        const last = chunckedArr[chunckedArr.length - 1]; 
        if(! last || last.length === len) {
            chunckedArr.push([val]); 
        } else {
            last.push(val);
        }
    }); 
    return chunckedArr; 
}


const output = chunkArray([1,2,3,4,5,6], 4); 

console.log(output);
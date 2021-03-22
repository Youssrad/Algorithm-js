//Some people are standing in a row in a park. there are trees between them which cannot be moved. Your task is to
//rearange the people by their height in non decscending order without moving the trees. 

// ex : 
// a = [-1, 150, 190, 170, -1, -1, 160, 180]
// sortByHeight(a) == [-1, 150, 160, 170, -1, -1, 180, 190]

function sortByHeight(arr) {
    const arr1 = []; 
    const arr2 = [];
    arr.forEach((val, i) => 
        // if(val === -1) {
        //     arr1.push(i);
        // } else {
        //     arr2.push(val);
        // }

        val === -1 ? arr1.push(i) : arr2.push(val)
    );

    const sortArr = arr2.sort((a, b) => a - b);
  
    arr1.forEach((val, i) => sortArr.splice(arr1[i], 0, -1));

    return sortArr;
}

const output = sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]); 

console.log(output);
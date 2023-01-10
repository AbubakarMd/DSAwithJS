// // Linear search
// linear search is used in soreted as well as non soreted array

function linear(x, y) {
    for (i = 0; i <= x.length - 1; i++) {
        if (x[i] === y) {
            return i;
        }
    }
    return -1;  //  this will be printed if element is not present in array
}

let x = [23, 56, 73, 95, 40, 83];  // this is array. you can enter as per your neeed in sorted or unsorted 
let y = 40; // This is the array we need to find 

console.log(linear(x, y));

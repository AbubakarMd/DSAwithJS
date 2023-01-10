// Binary search
// Binary only works with sorted array. use only sorted array or sort the array before while loop.


let x = [12, 20, 23, 45, 65, 66, 89, 94, 99]; // Change array as per your need
let y = 89; // Change the value you want to seearch for
console.log(binary(x, y));


function binary(x, y) {
    let high = x.length - 1;
    let low = 0;


    // loop
    while (low <= high) {
        let mid = Math.floor((high + low) / 2); //math.floor is used to perform mathmetical operation
        if (x[mid] === y) {
            return (mid);
            break; // loop will break as soon as condition willbe fullfilled
        } else if (x[mid] > y) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }
    return -1;
}

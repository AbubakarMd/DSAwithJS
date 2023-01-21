function Assecndingbubble(arr) {
    let swap;
    do {
        swap = false;
        for (let x = 0; x < arr.length - 1; x++) {
            if (arr[x] > arr[x + 1]) {
                let temp = arr[x];
                arr[x] = arr[x + 1];
                arr[x + 1] = temp;
                swap = true;
            }
        }
    } while (swap)
}


function descendingbubble(arr) {
    let swap;
    do {
        swap = false;

        for (let x = 0; x < arr.length - 1; x++) {
            if (arr[x + 1] > arr[x]) {
                let temp = arr[x + 1];
                arr[x + 1] = arr[x];
                arr[x] = temp;
                swap = true;
            }
        }
    } while (swap)
}

let arr = [4, 0, 1, 9, 2];
descendingbubble(arr);
console.log(arr)
Assecndingbubble(arr)
console.log(arr)

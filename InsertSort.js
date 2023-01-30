


function sorting(arr) {
    for (let i = 1; i < arr.length; i++) {
        let value = arr[i];
        let sort = i - 1;
        while (sort >= 0 && arr[sort] > value) {
            arr[sort + 1] = arr[sort];
            sort = sort - 1;
        }
        arr[sort + 1] = value;
    }
}
arr = [3, 7, 1, 2, 0]
sorting(arr);
console.log(arr);

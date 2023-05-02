function bubbleSort(arr) {
    var n = arr.length;
    if (n == 0) {
        return [];
    } else if (n == 1) {
        return arr;
    } else {
        for (let i = 0; i < n - 1; i++) {
            var swapped = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    //we need to swap the elements
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }
             // If no swaps were made in this iteration, array is already sorted
            if (!swapped) {
                break;
            }
        }
    }
    return arr;
}

var arr = [23, 45, 13, 35, 20];
console.log(bubbleSort(arr));
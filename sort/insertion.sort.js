const arr = [7, 4, 8, 2, 5, 1];

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;
        let temp = arr[i];
        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;

    }

    return arr;
}
// Độ phức tạp O(n^2) chả khác quái gì bubble sort với selection sort
console.log(insertionSort(arr))


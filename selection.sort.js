let arr = [5, 3, 6, 7, 23, 65, 8]

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] < arr[j])
                minIndex = j;
        }
        if (minIndex !== i) {
            let temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }

    }

    return arr;
}
// Độ phức tạp O(n^2) chả khác quái gì bubble sort

console.log(selectionSort(arr))
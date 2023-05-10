let numbers = [1, 12, -5, -6, 50, 3], k = 4
// tìm giá trị trung bình lớn nhất của mảng con có length=k
// expected (12-5-6+50)/4 = 51/4 = 12.75
function sum(nums, start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += nums[i];
    }
    return sum;
}

function find(numbers, k) {
    let current_sum = sum(numbers, 0, 0 + k - 1);
    let max_sum = current_sum
    for (let i = k; i < numbers.length; i++) {
        current_sum = current_sum + numbers[i] - numbers[i - k]
        if (current_sum > max_sum)
            max_sum = current_sum;
    }

    return max_sum
}

let kq = find(numbers, k)
console.log(kq / k);
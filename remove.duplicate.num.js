const removeDuplicates = function (nums) {
    let m = new Map();
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (!m.get(nums[i])) {
            result.push(nums[i])
            m.set(nums[i], true)
        }
    }
    return result
};

let kq = removeDuplicates([1, 1, 2, 2, 3, 4, 5, 6, 6, 6])
console.log(kq);
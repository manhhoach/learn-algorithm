let nums=[14, 28, 10, 2, 3, 5, 7, 10]
let k=9
// expected result: [0, 1]

function twoPointer(arr, k){
    let start=0, end=arr.length-1;
    while(start<end){
        let res=arr[start]+arr[end]
        if(res===k)
            return [start, end]
        else if(res>k)
            end--;  
        else
            start++;
          
    }
    return null
}

console.log(twoPointer(nums, k))
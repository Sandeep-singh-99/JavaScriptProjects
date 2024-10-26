var missingNumber = function(nums) {
    let n = nums.length;
    let sum = 0;
    for (let i = 0; i <= n-1; i++) {
        sum = sum + nums[i];
    }

    let ActualSum = (n * (n+1))/2;

    let missingnum = ActualSum - sum;
    return missingnum
}

nums = [9,6,4,2,3,5,7,0,1]

console.log(missingNumber(nums)) // 2

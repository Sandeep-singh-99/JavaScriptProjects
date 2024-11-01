// Remove Elements

var removeElement = function(nums, val) {
    let i=0;
    let j=0;
    while(i < nums.length) {
        if (nums[i] !== val) {
            nums[j] = nums[i]
            j++;
        }
        i++;
    }
    return j;
}

nums = [3, 2, 2, 3];
val = 3;

console.log(removeElement(nums, val)); // 2
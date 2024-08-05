// Single Numbers

var SingleNumber = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) return nums[i];
  }
};

console.log("Array = ", SingleNumber([2, 2,2, 1]));

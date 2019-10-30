var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (dif == nums[j]) {
        return [i, j]
      }
    }
  }
}
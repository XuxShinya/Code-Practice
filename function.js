//1.求数组中两数之和的目标数的这两个数的下标
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
};
var twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let dif = target - nums[i]
    for (let j = i + 1; j < nums.length; j++) {
      if (dif == nums[j]) {
        return [i, j]
      }
    }
  }
};
//2.求无重复字符串的最长子串长度
var lengthOfLongestSubstring = function (str) {
  let arr = str.split('')
  let poll = []
  let maxLength = 0
  let flag = 0
  for (let i = 0; i < arr.length; i++) {
    if (poll.length == 0) {
      poll.push(arr[i])
      maxLength++
      // console.log('第一次：', poll)
    } else {
      if (!poll.includes(arr[i])) {   //不含
        poll.push(arr[i])
        maxLength++
        // console.log('没出现重复：', poll)
      } else {                        //含
        if (flag < maxLength) {
          flag = maxLength
        }
        if (poll.indexOf(arr[i]) == poll.length - 1) {
          poll = []
        } else {
          poll = poll.slice(poll.indexOf(arr[i]) + 1)
        }
        maxLength = poll.length
        // console.log('出现重复后的长度：', maxLength)
        poll.push(arr[i])
        maxLength++
        // console.log('出现重复后：', poll)
      }
    }
    if (flag < maxLength) {
      flag = maxLength
    }
    // console.log(flag)
  }

  return flag
}
//3.Z字变换
let convert = function (s, numRows) {
  if (numRows == 1) {
    return s
  }
  let len = Math.min(s.length, numRows)
  let rows = []
  for (let i = 0; i < len; i++) {
    rows[i] = ''
  }
  let loc = 0
  let flag = false
  for (const c of s) {
    rows[loc] += c
    if (loc == 0 || loc == numRows - 1) {
      flag = !flag
    }
    loc += flag ? 1 : -1
  }
  let result = ''
  for (const row of rows) {
    result += row
  }
  return result
}
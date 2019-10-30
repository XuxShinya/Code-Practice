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
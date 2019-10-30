// 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
// 比如输入字符串为 "LEETCODEISHIRING" 行数为 3 时，排列如下：
// L   C   I   R
// E T O E S I I G
// E   D   H   N
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："LCIRETOESIIGEDHN"。
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
console.log(convert('LEETCODEISHIRING', 3))
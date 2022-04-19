// 给你一个字符串 s 和一个字符 c ，且 c 是 s 中出现过的字符。
// 返回一个整数数组 answer ，其中 answer.length == s.length 且 answer[i] 是 s 中从下标 i 到离它 最近 的字符 c 的 距离 。
// 两个下标 i 和 j 之间的 距离 为 abs(i - j) ，其中 abs 是绝对值函数。

// 示例 1：
// 输入：s = "loveleetcode", c = "e"
// 输出：[3,2,1,0,1,0,0,1,2,2,1,0]
// 解释：字符 'e' 出现在下标 3、5、6 和 11 处（下标从 0 开始计数）。
// 距下标 0 最近的 'e' 出现在下标 3 ，所以距离为 abs(0 - 3) = 3 。
// 距下标 1 最近的 'e' 出现在下标 3 ，所以距离为 abs(1 - 3) = 2 。
// 对于下标 4 ，出现在下标 3 和下标 5 处的 'e' 都离它最近，但距离是一样的 abs(4 - 3) == abs(4 - 5) = 1 。
// 距下标 8 最近的 'e' 出现在下标 6 ，所以距离为 abs(8 - 6) = 2 。

// 示例 2：
// 输入：s = "aaab", c = "b"
// 输出：[3,2,1,0]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shortest-distance-to-a-character
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const sLen = s.length;
  const tArr = [];
  for (let i = 0; i < sLen; ++i) {
    if (s[i] === c) {
      tArr.push(i);
    }
  }

  const res = []
  for(let i = 0; i < sLen; ++i) {
    let min = Infinity;
    for (let j = 0; j < tArr.length; ++j ) {
      const num = Math.abs(i - tArr[j]);
      if (num < min) {
        min = num;
      }
    }

    res.push(min);
  }

  return res;
};


console.log(shortestToChar("loveleetcode", "e"))
console.log(shortestToChar("aaab", "b"))
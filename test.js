/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var unique = (arrays, key) => {
  var passes = 0;
  for (let m = 0; m < arrays.length; m++) {
    var arr = arrays[m];
    var map = {};

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] in map) map[arr[i]] += 1;
      else map[arr[i]] = 1;
    }

    for (let i = 0; i < arr.length; i++) {
      map[key[i]]--;
    }

    var keys = Object.keys(map);
    var sum = 0;

    for (let i = 0; i < keys.length; i++) {
      if (map[keys[i]] == 0) sum++;
    }

    if (sum != keys.length) passes++;
  }

  if (arrays.length == 0) return true;
  else return arrays.length == passes;
};
var threeSum = function(nums) {
  //   var compare = (a, b) => a - b;
  //   nums.sort(compare);
  var sets = 0;
  var hash = {};
  var results = [];
  var curr;

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i;
  }

  // 2 + a + b = 0

  var left = 0;
  var right = nums.length - 1;

  while (left < nums.length) {
    right = nums.length - 1;
    while (right > 0) {
      var complement = -(nums[left] + nums[right]);

      if (
        left != right &&
        right != hash[complement] &&
        left != hash[complement]
      ) {
        if (hash[complement]) {
          curr = [nums[left], nums[right], complement];
          // console.log(curr);
          results.push(curr);
          //
        }
      }
      right--;
    }
    left++;
  }

  var test = [];
  results.filter(item => {
    if (unique(test, item)) {
      test.push(item);
    }
  });

  //   results = results.filter(item => unique(copy, item));

  console.log(test);
  return results;
};

threeSum([
  -13,
  5,
  13,
  12,
  -2,
  -11,
  -1,
  12,
  -3,
  0,
  -3,
  -7,
  -7,
  -5,
  -3,
  -15,
  -2,
  14,
  14,
  13,
  6,
  -11,
  -11,
  5,
  -15,
  -14,
  5,
  -5,
  -2,
  0,
  3,
  -8,
  -10,
  -7,
  11,
  -5,
  -10,
  -5,
  -7,
  -6,
  2,
  5,
  3,
  2,
  7,
  7,
  3,
  -10,
  -2,
  2,
  -12,
  -11,
  -1,
  14,
  10,
  -9,
  -15,
  -8,
  -7,
  -9,
  7,
  3,
  -2,
  5,
  11,
  -13,
  -15,
  8,
  -3,
  -7,
  -12,
  7,
  5,
  -2,
  -6,
  -3,
  -10,
  4,
  2,
  -5,
  14,
  -3,
  -1,
  -10,
  -3,
  -14,
  -4,
  -3,
  -7,
  -4,
  3,
  8,
  14,
  9,
  -2,
  10,
  11,
  -10,
  -4,
  -15,
  -9,
  -1,
  -1,
  3,
  4,
  1,
  8,
  1
]);

/**
 * ================================================
 * INTERVIEW STUDY GUIDE: MASTER REPOSITORY
 * ================================================
 * Consolidated JavaScript & Node.js Coding Challenges
 * Categorized by Topic | Multiple Models & Approaches Preserved
 * ================================================
 */

// =====================================
// GLOBAL VARIABLES & INITIAL DATA
// =====================================
const givenArr = [1, 3, 5, 7, 8];
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3, 5, 2, 3, 1, 5, 6, 7, 8];
let arr5 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
const fruits = [
  "apple",
  "banana",
  "grapes",
  "mango",
  "apple",
  "grapes",
  "orange",
  "papaya",
  "mango",
  "grapes",
  "sapota",
  "pomogranate",
];
const strs = ["flower", "flow", "flight"];
const arrListAlpha = ["a", "d", "a", "g"];
const nestedArray = ["Inspector", [["ANKLE", ["HIKE"]]], "pawn"];
const vowelsList = ["a", "e", "i", "o", "u"];
const myArray = [1, "David", 10, { points: 97 }, 25, "alphabet", true];
const candidatesList = [
  { name: "Priya", points: [76, 98, 88, 84] },
  { name: "Sri", points: [0, 45, 88, 87] },
  { name: "Nami", points: [91, 85, 82, 907] },
];
const multiArr = [
  [1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11, 12],
];
const data = [
  { type: "income", amount: 1000, category: "salary" },
  { type: "expense", amount: 200, category: "food" },
  { type: "income", amount: 500, category: "freelance" },
  { type: "expense", amount: 150, category: "transport" },
];

// =====================================
// TOPIC 1: STRINGS
// =====================================

// Question - 1: Reverse each character in every word of a sentence while keeping the word order intact
// Expected Output: eH si a doog yob
const givenSentence = "He is a good boy";
const revOfWords = givenSentence
  .split(" ")
  .map((each) => each.split("").reverse().join(""))
  .join(" ");
console.log(revOfWords);
/* MODEL 2: Using forEach
let revOfWords_v2 = [];
givenSentence.split(" ").forEach(word => revOfWords_v2.push(word.split("").reverse().join("")));
console.log(revOfWords_v2.join(" "));
*/

// Question - 2: Reverse a given string (Hello -> olleh)
// Expected Output: "olleh"
function reverseStringFunc(str) {
  return str.split("").reverse().join("");
}
console.log(reverseStringFunc("hello"));
/* MODEL 2: Using for loop
function reverseStr(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
/* MODEL 3: Using splice
function reverseStringSplice(str) {
  let arr = str.split("");
  let reversedArr = [];
  while (arr.length) {
    reversedArr.push(arr.splice(-1, 1)[0]);
  }
  return reversedArr.join("");
}
*/

// Question - 3: Reverse an integer preserving its sign
// Expected Output: -321 for -123, 21 for 12
const givenNum = -123;
function reversedInteger(givenNum) {
  const reversed = parseInt(givenNum.toString().split("").reverse().join(""));
  const result = reversed * Math.sign(givenNum);
  return result;
}
console.log("Reversed Value:", reversedInteger(givenNum));

// Question - 4: Find the longest common prefix shared by all strings in an array
// Expected Output: "fl"
function largestCommonLetter() {
  let output = "";
  for (let i = 0; i <= strs.length - 1; i++) {
    if (strs.every((evy) => evy[i] === strs[0][i])) {
      output += strs[0][i];
    }
  }
  return output;
}
console.log(largestCommonLetter());

// Question - 5: Count the frequency of each character in a given string
// Expected Output: { B: 1, h: 1, a: 2, r: 1, g: 1, A: 1, v: 1 }
let word_freq = "BhargAva";
const countOfWords = [...word_freq].reduce((acc, cval) => {
  acc[cval] = (acc[cval] || 0) + 1;
  return acc;
}, {});
console.log(countOfWords);

// Question - 6: Convert words to uppercase if they start or end with a specific letter
// Expected Output: ["APPLE", "banana", "grapes", ...]
const givenLetter = "a";
const changeCaseResult = fruits.map((each) =>
  each.startsWith(givenLetter) || each.endsWith(givenLetter)
    ? each.toUpperCase()
    : each.toLowerCase(),
);
console.log(changeCaseResult);

// Question - 7: Remove all occurrences of a specific letter from a string
// Expected Output: "Bhrgv"
const str_rem = "Bhargava";
const regExp_rem = str_rem.replace(/a/g, "");
console.log(regExp_rem);
/* MODEL 2: Using split and join
const replaceSpecChar = str_rem.split("").map((each) => (each == "a" ? "" : each)).join("");
*/

// Question - 8: Determine if two strings are anagrams of each other
// Expected Output: "Anagrams"
const str1_an = "madam";
const str2_an = "damam";
const anagrams =
  str1_an.split("").sort().join("") === str2_an.split("").sort().join("");
console.log(anagrams ? "Anagrams" : "Not anagrams");

// Question - 9: Capitalize the first letter of each word in a fruits array
// Expected Output: ["Apple", "Banana", ...]
const capitalizedFruits = fruits.map(
  (each) => each[0].toUpperCase() + each.slice(1),
);
console.log(capitalizedFruits);

// Question - 10: Remove a specific character from strings (replaceAll vs regex)
// Expected Output: Modified fruits array
const speChar_rem = "a";
const removeChar_1 = fruits.map((each) => each.replaceAll(speChar_rem, ""));
const removeChar_2 = fruits[2].replace(/a/g, "");
console.log(removeChar_1);
console.log(removeChar_2);

// Question - 11: Convert fruits array into a single kebab-case string
// Expected Output: "apple-banana-grapes..."
const kebabCaseStr = fruits.map((each) => each.split(" ").join("")).join("-");
console.log(kebabCaseStr);

// Question - 12: Truncate text to a specified length and add ellipsis
// Expected Output: "Hi this is bhargava..."
const speLength_tr = 20;
const text_tr = "Hi this is bhargava, glad to meet you, im from india";
const ellipsesToText =
  text_tr.length > speLength_tr
    ? text_tr.slice(0, speLength_tr) + "..."
    : text_tr;
console.log(ellipsesToText);

// Question - 13: Count word frequency in a sentence and display only words appearing 2+ times
// Expected Output: ["This:3", "is:2", ...]
const givenSentenceForCount =
  "This is a test sentance and this test is only a test";
const countOfCharsFromSentance = givenSentenceForCount
  .split(" ")
  .reduce((acc, cval) => {
    acc[cval] = (acc[cval] || 0) + 1;
    return acc;
  }, {});
let finalResultOfCount = [];
for (let [key, value] of Object.entries(countOfCharsFromSentance)) {
  if (value >= 2) finalResultOfCount.push(`${key}:${value}`);
}
console.log(finalResultOfCount);

// Question - 14: Capitalize the first letter of each word in a sentence
// Expected Output: "Hi How Are You"
const greetStr = "Hi how are you";
const capitaliseWords = greetStr
  .split(" ")
  .map((each) => each[0].toUpperCase() + each.slice(1))
  .join(" ");
console.log(capitaliseWords);

// Question - 15: Check if a string is a palindrome (Multiple Models)
// MODEL 1: Simple String Palindrome
function isPalindromeStr(str) {
  return str === str.split("").reverse().join("");
}
// MODEL 2: Number Palindrome
function isPalindromeNum(num) {
  const str = String(num);
  return str === str.split("").reverse().join("");
}
// MODEL 3: Advanced (ignore special chars & case)
function isPalindromeAdvanced(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}
console.log(isPalindromeAdvanced("A man, a plan, a canal, Panama")); // true

// Question - 16: Find the first character that appears only once in a string
// Expected Output: "w"
function firstUniqueChar(str) {
  const map = {};
  for (let ch of str) map[ch] = (map[ch] || 0) + 1;
  for (let ch of str) if (map[ch] === 1) return ch;
  return null;
}
console.log(firstUniqueChar("swiss"));

// Question - 17: Remove all duplicate characters from a string
// Expected Output: "abcd"
function removeDupChars(str) {
  return [...new Set(str)].join("");
}
console.log(removeDupChars("aabbccdd"));

// Question - 18: Compress String (Run-Length Encoding)
// Expected Output: "a3b2c1"
function compressStringRL(str) {
  let compressed = "";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      compressed += str[i] + count;
      count = 0;
    }
  }
  return compressed.length < str.length ? compressed : str;
}
console.log(compressStringRL("aaabbc"));

// Question - 19: URL Encoding - Replace Spaces with %20
// Expected Output: "google.com/search?q=js%20news"
function urlEncodeCustom(str) {
  return str.trim().replace(/\s/g, "%20");
}
console.log(urlEncodeCustom("google.com/search?q=js news"));

// Question - 20: Convert Sentence into Acronym
// Expected Output: "CIA"
function makeAcronymFunc(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}
console.log(makeAcronymFunc("Central Intelligence Agency"));

// Question - 21: String Splitting with Multiple Delimiters
// Expected Output: ["localhost", "127.0.0.1", "192.168.1.1", "10.0.0.1"]
function splitStringByMultipleDelimiters(str) {
  return str.split(/[,;| ]/);
}
console.log(
  splitStringByMultipleDelimiters("localhost,127.0.0.1;192.168.1.1|10.0.0.1"),
);

// =====================================
// TOPIC 2: ARRAYS
// =====================================

// Question - 22: Merge two arrays and remove all duplicate values
// Expected Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const removeDups_merge = [...new Set([...arr1, ...arr2])];
console.log(removeDups_merge);

// Question - 23: Find the longest word in a list (Multiple Models)
// MODEL 1: Using reduce
const largestWord_active = fruits.reduce((acc, cval) =>
  acc.length > cval.length ? acc : cval,
);
// MODEL 2: Using filter and max
const largestWord2 = fruits.filter(
  (flt) => flt.length === Math.max(...fruits.map((each) => each.length)),
);
// MODEL 3: Using sort
const largestWord3 = fruits.sort((a, b) => b.length - a.length)[0];
console.log("Longest Word:", largestWord_active);

// Question - 24: Find the largest number in an array
// Expected Output: 8
const max_num = arr2.reduce((acc, curr) => (acc > curr ? acc : curr));
console.log("Max:", max_num);

// Question - 25: Find the second largest number in an array (Multiple Models)
// MODEL 1: Single pass comparison
function secondLargest(arr) {
  let largest = -Infinity,
    second = -Infinity;
  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num !== largest) {
      second = num;
    }
  }
  return second;
}
// MODEL 2: Using sort
const secondLargestSort = [30, 20, 5, 8].sort((a, b) => b - a)[1];
console.log(secondLargest([30, 20, 5, 8]));

// Question - 26: Find the 4th largest unique element in an array
// Expected Output: 43
const arr_4th = [11, 2, 33, 3, 3, 77, 88, 42, 12, 76, 99, 19, 43];
const fouthLargestUniqueEle = [...new Set(arr_4th)].sort((a, b) => b - a)[3];
console.log(fouthLargestUniqueEle);

// Question - 27: Remove duplicate elements from an array (Multiple Models)
// MODEL 1: Using for loop
function removeDupsLoop(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
  }
  return result;
}
// MODEL 2: Using forEach
function removeDuplicatesEach(arr) {
  let uniqueArr = [];
  arr.forEach((num, index) => {
    if (arr.indexOf(num) === index) uniqueArr.push(num);
  });
  return uniqueArr;
}
// MODEL 3: Using Set
const removeDupsSet = (arr) => [...new Set(arr)];

// Question - 28: Identify elements that appear more than once (Duplicates)
// Expected Output: [1, 2, 3, 5, 6]
function findDuplicatesArr(arr) {
  const seen = new Set(),
    dups = new Set();
  for (let i of arr) {
    seen.has(i) ? dups.add(i) : seen.add(i);
  }
  return [...dups];
}
console.log(findDuplicatesArr([5, 1, 6, 2, 1, 3, 6, 2, 5, 3]));

// Question - 29: Rotate an array starting from a given index (Multiple Models)
// MODEL 1: Using slice
function rotateArraySlice(arr, index) {
  return [...arr.slice(index), ...arr.slice(0, index)];
}
// MODEL 2: Using loops
function rotateArrayLoop(arr, index) {
  let result = [];
  for (let i = index; i < arr.length; i++) result.push(arr[i]);
  for (let i = 0; i < index; i++) result.push(arr[i]);
  return result;
}

// Question - 30: Find missing numbers in a range (Numeric and Alphabetic)
function missingNumsFromList(arr) {
  let missing = [];
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    if (!arr.includes(i)) missing.push(i);
  }
  return missing;
}
/* MODEL 2: Alphabetic Missing
const missingAlphasFromList = (arrListAlpha) => {
  let missingAlphas = [];
  for (let i = arrListAlpha[0].charCodeAt(0); i <= Math.max(...arrListAlpha.map((x) => x.charCodeAt(0))); i++) {
    const char = String.fromCharCode(i);
    if (!arrListAlpha.includes(char)) missingAlphas.push(char);
  }
  return missingAlphas;
};
*/

// Question - 31: Assign serial numbers to each word in an array
// Expected Output: ["1 apple", "2 banana", ...]
const assignSno_arr = fruits.map((each, index) => `${index + 1} ${each}`);
console.log(assignSno_arr);

// Question - 32: Flatten deeply nested arrays (Multiple Models)
// MODEL 1: Using flat(Infinity)
const flattenInf = (arr) => arr.flat(Infinity);
// MODEL 2: Manual recursion
function flattenManual(arr) {
  let res = [];
  arr.forEach((item) =>
    Array.isArray(item) ? res.push(...flattenManual(item)) : res.push(item),
  );
  return res;
}

// Question - 33: Two Sum Problem (Find indices that sum to target)
// Expected Output: [0, 1]
function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (map.has(complement)) return [map.get(complement), i];
    map.set(nums[i], i);
  }
}
console.log(twoSum([2, 7, 11, 15], 9));

// Question - 34: Sum of all even numbers in an array
// Expected Output: 30
const sumOfEven = arr1.filter((n) => n % 2 === 0).reduce((a, b) => a + b, 0);
console.log("Sum of Evens:", sumOfEven);

// Question - 35: Filter words that contain vowels
// Expected Output: ["Sword", "Patient", "Pink"]
const vowelFilter = ["Sword", "Myth", "Patient", "Pink"].filter((word) =>
  /[aeiou]/i.test(word),
);
console.log(vowelFilter);

// Question - 36: FizzBuzz Implementation
// Expected Output: [1, 2, "Fizz", 4, "Buzz", ...]
const fizzBuzz_res = arr1.map((n) =>
  n % 15 === 0 ? "FizzBuzz" : n % 3 === 0 ? "Fizz" : n % 5 === 0 ? "Buzz" : n,
);
console.log(fizzBuzz_res);

// Question - 37: Extract middle 3 elements, sum them, and replace
// Expected Output: [10, 20, 30, 150, 70, 80, 90]
let arr_mid = [10, 20, 30, 40, 50, 60, 70, 80, 90];
let mid_sum = arr_mid.slice(3, 6).reduce((a, b) => a + b, 0);
arr_mid.splice(3, 3, mid_sum);
console.log(arr_mid);

// Question - 38: Deep copy of nested array
// Expected Output: Independent copy
function deepCopyArr(arr) {
  return arr.map((item) => (Array.isArray(item) ? deepCopyArr(item) : item));
}
let orig_deep = [
  [1, 2],
  [3, 4],
];
let copy_deep = deepCopyArr(orig_deep);
copy_deep[0][0] = 99;
console.log(orig_deep[0][0]); // 1

// Question - 39: Chunk an array into smaller sizes
// Expected Output: [[1, 2, 3], [4, 5, 6], [7]]
function chunkArray(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size)
    result.push(arr.slice(i, i + size));
  return result;
}
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));

// Question - 40: Rearrange Even numbers first, then Odd
// Expected Output: [2, 6, 4, 1, 3, 5]
function arrangeEvenOdd(arr) {
  return [...arr.filter((n) => n % 2 === 0), ...arr.filter((n) => n % 2 !== 0)];
}
console.log(arrangeEvenOdd([1, 3, 2, 6, 5, 4]));

// Question - 41: Find maximum profit from stock prices
// Expected Output: 5
function maxProfit(prices) {
  let min = Infinity,
    profit = 0;
  for (let p of prices) {
    min = Math.min(min, p);
    profit = Math.max(profit, p - min);
  }
  return profit;
}
console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// Question - 42: Squared Frequency Counter
// Expected Output: true
function sameFrequency(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {},
    frequencyCounter2 = {};
  for (let val of arr1)
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  for (let val of arr2)
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) return false;
  }
  return true;
}
console.log(sameFrequency([1, 2, 3], [4, 1, 9]));

// Question - 43: Remove Duplicate Objects from Array
// Expected Output: [{name: "sai"}, {name: "Nang"}, {name: "111111"}]
function getUniqueObjectsFunc(arr) {
  const uniqueStrings = new Set(arr.map((item) => JSON.stringify(item)));
  return Array.from(uniqueStrings).map((item) => JSON.parse(item));
}
console.log(
  getUniqueObjectsFunc([{ name: "sai" }, { name: "Nang" }, { name: "sai" }]),
);

// Question - 44: Find Max Consecutive 1s in Array
// Expected Output: 3
function findMaxConsecutiveOnesFunc(nums) {
  let maxCount = 0,
    currentCount = 0;
  for (let num of nums) {
    if (num === 1) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }
  return maxCount;
}
console.log(findMaxConsecutiveOnesFunc([1, 1, 0, 1, 1, 1]));

// Question - 45: Count Subarrays with Sum K
function countNumberOfSubarrays(arr, k) {
  let map = new Map();
  map.set(0, 1);
  let currentSum = 0,
    count = 0;
  for (let num of arr) {
    currentSum += num;
    if (map.has(currentSum - k)) count += map.get(currentSum - k);
    map.set(currentSum, (map.get(currentSum) || 0) + 1);
  }
  return count;
}
console.log(countNumberOfSubarrays([1, 1, 1], 2));

// Question - 46: Merge Intervals
function mergeIntervals(intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = result[result.length - 1];
    if (intervals[i][0] <= last[1])
      last[1] = Math.max(last[1], intervals[i][1]);
    else result.push(intervals[i]);
  }
  return result;
}

// =====================================
// TOPIC 3: MATH & LOGIC
// =====================================

// Question - 47: Find all prime numbers in a range
// Expected Output: 2, 3, 5, 7
function getPrimes(range) {
  let primes = [];
  for (let i = 2; i <= range; i++) {
    let isPrime = true;
    for (let j = 2; j * j <= i; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(i);
  }
  return primes;
}
console.log(getPrimes(10));

// Question - 48: Calculate Factorial
// Expected Output: 120
function factorial(n) {
  if (n < 0) return undefined;
  let res = 1;
  for (let i = 2; i <= n; i++) res *= i;
  return res;
}
console.log(factorial(5));

// Question - 49: Generate Fibonacci series
// Expected Output: [0, 1, 1, 2, 3]
function fibonacci(n) {
  let res = [0, 1];
  for (let i = 2; i < n; i++) res[i] = res[i - 1] + res[i - 2];
  return res.slice(0, n);
}
console.log(fibonacci(5));

// Question - 50: Generate random Hex Color code
// Expected Output: "#XXXXXX"
const hexGen = () => "#" + Math.random().toString(16).slice(2, 8);
console.log(hexGen());

// Question - 51: Calculate GCD and LCM
// Expected Output: GCD: 6, LCM: 36
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);
console.log("GCD:", gcd(12, 18), "LCM:", lcm(12, 18));

// Question - 52: Check if a number is an Armstrong number
// Expected Output: true
function isArmstrong(num) {
  const digits = String(num).split("");
  return digits.reduce((acc, d) => acc + Math.pow(d, digits.length), 0) === num;
}
console.log(isArmstrong(153));

// Question - 53: Swap two variables without a third variable
// Expected Output: a=10, b=5
let a_s = 5,
  b_s = 10;
[a_s, b_s] = [b_s, a_s];
console.log(a_s, b_s);

// Question - 54: The Glove Picker Puzzle
// Logic: 3 gloves guarantee a matching pair in a dark room with 2 colors.
function getMinPicksForPairLogic() {
  return 3;
}
console.log(getMinPicksForPairLogic());

// =====================================
// TOPIC 4: FUNCTIONS & SCOPE
// =====================================

// Question - 55: Demonstrate Callback function
// Expected Output: Logs from main and callback
function processData(callback) {
  console.log("Processing...");
  callback("Done!");
}
processData((res) => console.log(res));

// Question - 56: Closure based Counter
// Expected Output: 1, 2, 2
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    getValue: () => count,
  };
}
const counter = createCounter();
console.log(counter.increment(), counter.increment(), counter.getValue());

// Question - 57: call, apply, and bind example
// Expected Output: Greets correctly using this
const person = { name: "Bhargava" };
function greet(msg) {
  console.log(`${msg}, ${this.name}`);
}
greet.call(person, "Hello");
greet.apply(person, ["Hi"]);
const boundGreet = greet.bind(person);
boundGreet("Welcome");

// Question - 58: Memoization Implementation
// Expected Output: Calculated first, then cached
const memoize = (fn) => {
  let cache = {};
  return (n) => {
    if (n in cache) return cache[n];
    let res = fn(n);
    cache[n] = res;
    return res;
  };
};
const slowSquare = memoize((n) => n * n);
console.log(slowSquare(4), slowSquare(4));

// Question - 59: Debounce function
// Expected Output: Executes only after delay
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Question - 60: Implement Throttling (Rate Limiting)
function throttle(func, delay) {
  let last = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - last < delay) return;
    last = now;
    return func(...args);
  };
}

// Question - 61: Regular vs Arrow Functions
const objectFunc = {
  name: "Calculator",
  values: [1, 2, 3],
  regular: function () {
    return this.values.length;
  },
  arrow: function () {
    return this.values.filter((x) => x > 1).length;
  },
  broken: () => {
    try {
      return this.values.length;
    } catch (e) {
      return "Error";
    }
  },
};
console.log(objectFunc.regular(), objectFunc.arrow(), objectFunc.broken());

// =====================================
// TOPIC 5: OBJECT-ORIENTED PROGRAMMING (OOP)
// =====================================

// Question - 62: Class Inheritance and Private Fields
// Expected Output: Accesses name and private password via getter
class User {
  constructor(name) {
    this.name = name;
  }
}
class Employee extends User {
  #password;
  constructor(name, pwd) {
    super(name);
    this.#password = pwd;
  }
  getPwd() {
    return this.#password;
  }
}
const emp = new Employee("Bhargava", "secret123");
console.log(emp.name, emp.getPwd());

// Question - 63: Prototype inheritance
// Expected Output: Inherits properties from parent object
const parent = { greet: () => "Hello" };
const child = Object.create(parent);
console.log(child.greet());

// Question - 64: Object static methods (keys, values, entries, assign)
// Expected Output: Returns arrays/merged object
const myObj = { a: 1, b: 2 };
console.log(Object.keys(myObj), Object.values(myObj), Object.entries(myObj));
const merged = Object.assign({}, myObj, { c: 3 });

// Question - 65: String Path to Nested Object
// Expected Output: {"a":{"b":{"c":"someValue"}}}
function stringToNestedObjectFunc(path, value) {
  const keys = path.split(".");
  return keys.reduceRight((acc, key) => ({ [key]: acc }), value);
}
console.log(JSON.stringify(stringToNestedObjectFunc("a.b.c", "someValue")));

// =====================================
// TOPIC 6: ASYNCHRONOUS JAVASCRIPT
// =====================================

// Question - 66: Event Loop execution order (setTimeout vs Promise)
// Expected Output: Start, End, Promise, Timeout
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

// Question - 67: Handle concurrent API requests using Promise.all
// Expected Output: Array of results
async function fetchAll(urls) {
  const results = await Promise.all(urls.map((url) => fetch(url)));
  return results;
}

// Question - 68: Promise.allSettled Example
async function handleAllSettled() {
  const p1 = Promise.resolve("ok");
  const p2 = Promise.reject("fail");
  const results = await Promise.allSettled([p1, p2]);
  console.log(results);
}

// Question - 69: Promise.race Example
// Expected Output: Fastest promise result
const p_slow = new Promise((res) => setTimeout(() => res("Slow"), 500));
const p_fast = new Promise((res) => setTimeout(() => res("Fast"), 100));
Promise.race([p_slow, p_fast]).then((winner) => console.log("Winner:", winner));

// Question - 70: Promise.any Example
// Expected Output: First fulfillment or AggregateError if all fail
const p_fail = Promise.reject("Fail");
const p_ok = new Promise((res) => setTimeout(() => res("Success"), 200));
Promise.any([p_fail, p_ok]).then((res) => console.log(res));

// Question - 71: Practical Promise Patterns
// MODEL 1: Timeout Promise
const timeoutPromise = (ms) =>
  new Promise((_, rej) => setTimeout(() => rej(new Error("Timeout")), ms));
// MODEL 2: Retry Pattern
async function retryAsync(fn, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === maxRetries - 1) throw e;
    }
  }
}
// MODEL 3: Sequential Execution
async function executeSequentially(fns) {
  for (const fn of fns) await fn();
}

// =====================================
// TOPIC 7: NODE.JS & EXPRESS
// =====================================

// Question - 72: Read file asynchronously in Node.js
/*
const fs = require("fs").promises;
async function read(path) {
  try {
    const data = await fs.readFile(path, "utf-8");
    console.log(data);
  } catch (e) { console.error(e); }
}
*/

// Question - 73: JWT Sign and Verify Example
/*
const jwt = require("jsonwebtoken");
const token = jwt.sign({ id: 1 }, "secret");
const decoded = jwt.verify(token, "secret");
*/

// Question - 74: Express Middleware Example
/*
const auth = (req, res, next) => {
  if (req.headers.auth) next();
  else res.status(401).send("Denied");
};
*/

// Question - 75: process.nextTick vs setImmediate
// Expected Output: nextTick executes first
/*
process.nextTick(() => console.log("Tick"));
setImmediate(() => console.log("Immediate"));
*/

// =====================================
// TOPIC 8: DATABASE (MONGODB)
// =====================================

// Question - 76: MongoDB CRUD Models
// MODEL 1: Insert (One/Many)
/*
db.employees.insertOne({ empId: 1, name: "Clark", dept: "Sales", salary: 50000 });
db.employees.insertMany([{ empId: 2, name: "Dave", salary: 45000 }]);
*/
// MODEL 2: Find with Comparison & Logical Operators
/*
db.employees.find({ salary: { $gte: 50000 }, dept: { $in: ["Sales", "HR"] } });
db.employees.find({ $or: [{ dept: "Sales" }, { salary: { $gt: 60000 } }] });
*/
// MODEL 3: Update (Set, Inc, Push, Upsert)
/*
db.employees.updateOne({ empId: 1 }, { $set: { salary: 55000 }, $inc: { bonus: 500 } });
db.employees.updateOne({ empId: 1 }, { $push: { skills: "JS" } });
db.employees.updateOne({ empId: 10 }, { $set: { name: "New" } }, { upsert: true });
*/
// MODEL 4: Aggregation Pipeline (Group, Match, Project, Unwind)
/*
db.employees.aggregate([
  { $match: { salary: { $gte: 40000 } } },
  { $group: { _id: "$dept", total: { $sum: "$salary" }, count: { $sum: 1 } } },
  { $project: { dept: "$_id", total: 1, _id: 0 } },
  { $sort: { total: -1 } }
]);
*/

// =====================================
// TOPIC 9: ADVANCED DSA & INTERVIEW PATTERNS
// =====================================

// Question - 77: Sliding Window: Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
  const charSet = new Set();
  let left = 0,
    maxLength = 0;
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

// Question - 78: Stack: Daily Temperatures
function dailyTemperatures(temps) {
  const res = new Array(temps.length).fill(0);
  const stack = [];
  for (let i = 0; i < temps.length; i++) {
    while (stack.length > 0 && temps[i] > temps[stack[stack.length - 1]]) {
      const idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
}

// Question - 79: Backtracking: Combination Sum
function combinationSum(candidates, target) {
  const result = [];
  function backtrack(idx, curr, sum) {
    if (sum === target) {
      result.push([...curr]);
      return;
    }
    if (sum > target || idx >= candidates.length) return;
    curr.push(candidates[idx]);
    backtrack(idx, curr, sum + candidates[idx]);
    curr.pop();
    backtrack(idx + 1, curr, sum);
  }
  backtrack(0, [], 0);
  return result;
}

// Question - 80: Graph DFS: Number of Islands
function numIslands(grid) {
  if (!grid || !grid.length) return 0;
  let count = 0;
  const dfs = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= grid.length ||
      c >= grid[0].length ||
      grid[r][c] === "0"
    )
      return;
    grid[r][c] = "0";
    dfs(r + 1, c);
    dfs(r - 1, c);
    dfs(r, c + 1);
    dfs(r, c - 1);
  };
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      if (grid[r][c] === "1") {
        count++;
        dfs(r, c);
      }
    }
  }
  return count;
}

// Question - 81: Jump Game: Minimum Steps to Reach End
function minJumps(arr) {
  if (arr.length <= 1) return 0;
  if (arr[0] === 0) return -1;
  let jumps = 1,
    maxReach = arr[0],
    steps = arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    maxReach = Math.max(maxReach, i + arr[i]);
    steps--;
    if (steps === 0) {
      jumps++;
      if (i >= maxReach) return -1;
      steps = maxReach - i;
    }
  }
  return jumps;
}

// Question - 82: 0/1 Knapsack Problem
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w)
        dp[i][w] = Math.max(
          values[i - 1] + dp[i - 1][w - weights[i - 1]],
          dp[i - 1][w],
        );
      else dp[i][w] = dp[i - 1][w];
    }
  }
  return dp[n][capacity];
}

// Question - 83: Weighted Job Scheduling
function weightedJobScheduling(jobs) {
  jobs.sort((a, b) => a.end - b.end);
  const n = jobs.length;
  const dp = new Array(n).fill(0);
  dp[0] = jobs[0].profit;
  for (let i = 1; i < n; i++) {
    let profit = jobs[i].profit;
    let l = -1,
      low = 0,
      high = i - 1;
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (jobs[mid].end <= jobs[i].start) {
        if (mid === high || jobs[mid + 1].end > jobs[i].start) {
          l = mid;
          break;
        }
        low = mid + 1;
      } else high = mid - 1;
    }
    if (l !== -1) profit += dp[l];
    dp[i] = Math.max(profit, dp[i - 1]);
  }
  return dp[n - 1];
}

// Question - 84: Group Anagrams
function groupAnagrams(strs) {
  const map = {};
  for (const s of strs) {
    const key = s.split("").sort().join("");
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  return Object.values(map);
}

// =====================================
// TOPIC 10: MODERN ES6+ FEATURES
// =====================================

// Question - 85: Spread, Nullish Coalescing, and Optional Chaining
const user = { name: "Bharg", details: { age: 25 } };
const userCopy = { ...user, active: true }; // Spread
const age = user.details?.age ?? "N/A"; // Optional chaining + Nullish coalescing

// Question - 86: Logical Assignment Operators (ES12)
let settings = { theme: "", timeout: 0, user: null };
settings.user ??= "Guest"; // Nullish assignment
settings.timeout ||= 30; // Logical OR assignment
settings.theme &&= "light"; // Logical AND assignment

// Question - 87: Numeric Separators
const billion = 1_000_000_000;
const hex = 0xab_cd_ef;

// Question - 88: WeakRef & FinalizationRegistry (ES12)
/*
let heavy = { data: "Large memory" };
const registry = new FinalizationRegistry((val) => console.log(`${val} collected`));
const weakRef = new WeakRef(heavy);
registry.register(heavy, "HeavyObj");
heavy = null; // Eligible for GC
*/

// =====================================
// TOPIC 11: MISC & WEB CONCEPTS
// =====================================

// Question - 89: Styled Console Logs
console.log("%c Styled Text", "color:blue;font-size:large;background:red");

// Question - 90: Console Table for Data
const tableData = [
  { Name: "John", ID: 1 },
  { Name: "Jane", ID: 2 },
];
console.table(tableData);

// Question - 91: Calculate Net Income from Data
let totalIncome = 0,
  totalExpense = 0;
data.forEach((item) => {
  if (item.type === "income") totalIncome += item.amount;
  else totalExpense += item.amount;
});
console.log("Net Income =", totalIncome - totalExpense);

// Question - 92: Get Day Name from Number
function getDayName(num) {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  if (num < 1 || num > 7) throw new Error("Invalid day number");
  return days[num - 1];
}

// Occurrence of given number for number of times
// arr = [1,2,2,1,4,1,6,7] num = 1
// output = 3 (1 repeated 3 times)
const numbers = [1, 2, 2, 1, 4, 1, 6, 7];
const target = 1;
const count = numbers.filter((num) => num === target).length;
console.log(`The number ${target} appears ${count} times.`);

export const mockQuestions = [
  {
    "title": "Reverse Words in a Sentence",
    "description": "Write a function reverseWords(sentence) that reverses each character in every word while keeping the word order intact.\n\nExample:\n  Input: \"He is a good boy\"\n  Output: \"eH si a doog yob\"",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Strings"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function reverseWords(sentence) {\n  // your code here\n}",
      "python": "def reverse_words(sentence):\n    pass",
      "java": "public String reverseWords(String s) { return \"\"; }"
    },
    "starterCode": "function reverseWords(sentence) {\n  // your code here\n}",
    "optimalSolution": "function reverseWords(sentence) {\n  return sentence.split(\" \").map(w => w.split(\"\").reverse().join(\"\")).join(\" \");\n}",
    "testCases": [
      {
        "input": "\"He is a good boy\"",
        "expectedOutput": "\"eH si a doog yob\""
      },
      {
        "input": "\"Hello World\"",
        "expectedOutput": "\"olleH dlroW\""
      },
      {
        "input": "\"abc\"",
        "expectedOutput": "\"cba\""
      }
    ],
    "explanation": "Split the sentence by spaces, reverse each word using split/reverse/join, then join back with spaces.",
    "proTip": "Chain: split(\" \") -> map(w => reverse) -> join(\" \")",
    "mnemonic": "Each word gets a mirror treatment."
  },
  {
    "title": "Reverse a String",
    "description": "Write a function reverseString(str) that reverses a given string.\n\nExample:\n  Input: \"hello\"\n  Output: \"olleh\"",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Strings"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "languageBoilerplate": {
      "javascript": "function reverseString(str) {\n  // your code here\n}",
      "python": "def reverse_string(s):\n    pass",
      "java": "public String reverseString(String s) { return \"\"; }"
    },
    "starterCode": "function reverseString(str) {\n  // your code here\n}",
    "optimalSolution": "function reverseString(str) {\n  return str.split(\"\").reverse().join(\"\");\n}",
    "testCases": [
      {
        "input": "\"hello\"",
        "expectedOutput": "\"olleh\""
      },
      {
        "input": "\"JavaScript\"",
        "expectedOutput": "\"tpircSavaJ\""
      },
      {
        "input": "\"abc\"",
        "expectedOutput": "\"cba\""
      }
    ],
    "explanation": "Split the string into an array of characters, reverse the array, then join back into a string.",
    "proTip": "split(\"\") converts string to char array; reverse() flips it; join(\"\") converts back.",
    "mnemonic": "Split, flip, join — three steps to reverse."
  },
  {
    "title": "Check Palindrome",
    "description": "Write isPalindrome(str) that returns true if the string reads the same forwards and backwards (ignore case and special characters).\n\nExamples:\n  isPalindrome(\"racecar\") -> true\n  isPalindrome(\"A man, a plan, a canal, Panama\") -> true\n  isPalindrome(\"hello\") -> false",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Strings"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function isPalindrome(str) {\n  // your code here\n}",
      "python": "def is_palindrome(s):\n    pass",
      "java": "public boolean isPalindrome(String s) { return false; }"
    },
    "starterCode": "function isPalindrome(str) {\n  // your code here\n}",
    "optimalSolution": "function isPalindrome(str) {\n  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, \"\");\n  return clean === clean.split(\"\").reverse().join(\"\");\n}",
    "testCases": [
      {
        "input": "\"racecar\"",
        "expectedOutput": "true"
      },
      {
        "input": "\"hello\"",
        "expectedOutput": "false"
      },
      {
        "input": "\"A man, a plan, a canal, Panama\"",
        "expectedOutput": "true"
      }
    ],
    "explanation": "Clean the string first (lowercase + remove non-alphanumeric), then compare with its reverse.",
    "proTip": "Always clean input before checking palindrome.",
    "mnemonic": "RACECAR — same from both ends!"
  },
  {
    "title": "Count Character Frequency",
    "description": "Write charFrequency(str) that returns an object with the count of each character.\n\nExample:\n  Input: \"hello\"\n  Output: { h:1, e:1, l:2, o:1 }",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Strings",
      "Objects"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function charFrequency(str) {\n  // your code here\n}",
      "python": "def char_frequency(s):\n    pass",
      "java": "public Map<Character,Integer> charFrequency(String s) { return new HashMap<>(); }"
    },
    "starterCode": "function charFrequency(str) {\n  // your code here\n}",
    "optimalSolution": "function charFrequency(str) {\n  return [...str].reduce((acc, ch) => {\n    acc[ch] = (acc[ch] || 0) + 1;\n    return acc;\n  }, {});\n}",
    "testCases": [
      {
        "input": "\"hello\"",
        "expectedOutput": "{ h:1, e:1, l:2, o:1 }"
      },
      {
        "input": "\"aabbcc\"",
        "expectedOutput": "{ a:2, b:2, c:2 }"
      }
    ],
    "explanation": "Use reduce to build a frequency map. For each char, increment its count.",
    "proTip": "acc[ch] = (acc[ch] || 0) + 1 is the classic frequency counter pattern.",
    "mnemonic": "Reduce = fold everything into one bag."
  },
  {
    "title": "Find First Unique Character",
    "description": "Write firstUniqueChar(str) that returns the first character that appears only once in the string.\n\nExamples:\n  firstUniqueChar(\"swiss\") -> \"w\"\n  firstUniqueChar(\"aabb\") -> null",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Strings",
      "HashMap"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function firstUniqueChar(str) {\n  // your code here\n}",
      "python": "def first_unique_char(s):\n    pass",
      "java": "public char firstUniqueChar(String s) { return '\\0'; }"
    },
    "starterCode": "function firstUniqueChar(str) {\n  // your code here\n}",
    "optimalSolution": "function firstUniqueChar(str) {\n  const map = {};\n  for (let ch of str) map[ch] = (map[ch] || 0) + 1;\n  for (let ch of str) if (map[ch] === 1) return ch;\n  return null;\n}",
    "testCases": [
      {
        "input": "\"swiss\"",
        "expectedOutput": "\"w\""
      },
      {
        "input": "\"aabb\"",
        "expectedOutput": "null"
      },
      {
        "input": "\"leetcode\"",
        "expectedOutput": "\"l\""
      }
    ],
    "explanation": "Two passes: first build frequency map, then find first char with count 1.",
    "proTip": "Two-pass approach is O(n) and clean. Avoid indexOf which is O(n^2).",
    "mnemonic": "Count first, then find the loner."
  },
  {
    "title": "Remove Duplicate Characters",
    "description": "Write removeDupChars(str) that removes all duplicate characters from a string, keeping only the first occurrence.\n\nExamples:\n  removeDupChars(\"aabbccdd\") -> \"abcd\"\n  removeDupChars(\"hello\") -> \"helo\"",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Strings",
      "Set"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "languageBoilerplate": {
      "javascript": "function removeDupChars(str) {\n  // your code here\n}",
      "python": "def remove_dup_chars(s):\n    pass",
      "java": "public String removeDupChars(String s) { return \"\"; }"
    },
    "starterCode": "function removeDupChars(str) {\n  // your code here\n}",
    "optimalSolution": "function removeDupChars(str) {\n  return [...new Set(str)].join(\"\");\n}",
    "testCases": [
      {
        "input": "\"aabbccdd\"",
        "expectedOutput": "\"abcd\""
      },
      {
        "input": "\"hello\"",
        "expectedOutput": "\"helo\""
      },
      {
        "input": "\"programming\"",
        "expectedOutput": "\"progamin\""
      }
    ],
    "explanation": "Set automatically removes duplicates while preserving insertion order. Spread into array and join.",
    "proTip": "new Set(str) is the most concise way to deduplicate characters.",
    "mnemonic": "Set = unique collection, order preserved."
  },
  {
    "title": "Compress String (Run-Length Encoding)",
    "description": "Write compressString(str) that compresses a string using run-length encoding. Return original if compressed is not shorter.\n\nExamples:\n  compressString(\"aaabbc\") -> \"a3b2c1\"\n  compressString(\"abc\") -> \"abc\" (not shorter)",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Strings"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function compressString(str) {\n  // your code here\n}",
      "python": "def compress_string(s):\n    pass",
      "java": "public String compressString(String s) { return \"\"; }"
    },
    "starterCode": "function compressString(str) {\n  // your code here\n}",
    "optimalSolution": "function compressString(str) {\n  let compressed = \"\";\n  let count = 0;\n  for (let i = 0; i < str.length; i++) {\n    count++;\n    if (str[i] !== str[i + 1]) {\n      compressed += str[i] + count;\n      count = 0;\n    }\n  }\n  return compressed.length < str.length ? compressed : str;\n}",
    "testCases": [
      {
        "input": "\"aaabbc\"",
        "expectedOutput": "\"a3b2c1\""
      },
      {
        "input": "\"abc\"",
        "expectedOutput": "\"abc\""
      },
      {
        "input": "\"aabbcc\"",
        "expectedOutput": "\"aabbcc\""
      }
    ],
    "explanation": "Count consecutive chars. When char changes, append char+count. Return shorter of compressed vs original.",
    "proTip": "Compare lengths at end — only return compressed if it saves space.",
    "mnemonic": "Count runs, compare lengths, pick shorter."
  },
  {
    "title": "Find Longest Common Prefix",
    "description": "Write largestCommonLetter() that finds the longest common prefix shared by all strings in the array [\"flower\",\"flow\",\"flight\"].\n\nExample:\n  Input: [\"flower\",\"flow\",\"flight\"]\n  Output: \"fl\"",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Strings",
      "Arrays"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function longestCommonPrefix(strs) {\n  // your code here\n}",
      "python": "def longest_common_prefix(strs):\n    pass",
      "java": "public String longestCommonPrefix(String[] strs) { return \"\"; }"
    },
    "starterCode": "function longestCommonPrefix(strs) {\n  // your code here\n}",
    "optimalSolution": "function longestCommonPrefix(strs) {\n  let output = \"\";\n  for (let i = 0; i <= strs[0].length - 1; i++) {\n    if (strs.every(s => s[i] === strs[0][i])) {\n      output += strs[0][i];\n    } else break;\n  }\n  return output;\n}",
    "testCases": [
      {
        "input": "[\"flower\",\"flow\",\"flight\"]",
        "expectedOutput": "\"fl\""
      },
      {
        "input": "[\"dog\",\"racecar\",\"car\"]",
        "expectedOutput": "\"\""
      },
      {
        "input": "[\"interview\",\"inter\",\"internal\"]",
        "expectedOutput": "\"inter\""
      }
    ],
    "explanation": "Check each character position across all strings. Stop when a mismatch is found.",
    "proTip": "Use Array.every() to check if all strings share the same char at position i.",
    "mnemonic": "Column by column — stop at first mismatch."
  },
  {
    "title": "Check Anagram",
    "description": "Write isAnagram(str1, str2) that determines if two strings are anagrams of each other.\n\nExamples:\n  isAnagram(\"madam\", \"damam\") -> true\n  isAnagram(\"hello\", \"world\") -> false",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Strings"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "languageBoilerplate": {
      "javascript": "function isAnagram(str1, str2) {\n  // your code here\n}",
      "python": "def is_anagram(s1, s2):\n    pass",
      "java": "public boolean isAnagram(String s1, String s2) { return false; }"
    },
    "starterCode": "function isAnagram(str1, str2) {\n  // your code here\n}",
    "optimalSolution": "function isAnagram(str1, str2) {\n  return str1.split(\"\").sort().join(\"\") === str2.split(\"\").sort().join(\"\");\n}",
    "testCases": [
      {
        "input": "\"madam\", \"damam\"",
        "expectedOutput": "true"
      },
      {
        "input": "\"hello\", \"world\"",
        "expectedOutput": "false"
      },
      {
        "input": "\"listen\", \"silent\"",
        "expectedOutput": "true"
      }
    ],
    "explanation": "Sort both strings alphabetically. If sorted versions are equal, they are anagrams.",
    "proTip": "Sorting is O(n log n). For O(n), use a frequency counter map.",
    "mnemonic": "Sort both — same letters, same sorted result."
  },
  {
    "title": "Two Sum",
    "description": "Given an array of numbers and a target, return the indices of the two numbers that add up to the target.\n\nExamples:\n  twoSum([2,7,11,15], 9) -> [0,1]\n  twoSum([3,2,4], 6) -> [1,2]",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Arrays",
      "HashMap"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function twoSum(nums, target) {\n  // your code here\n}",
      "python": "def two_sum(nums, target):\n    pass",
      "java": "public int[] twoSum(int[] nums, int target) { return new int[]{}; }"
    },
    "starterCode": "function twoSum(nums, target) {\n  // your code here\n}",
    "optimalSolution": "function twoSum(nums, target) {\n  let map = new Map();\n  for (let i = 0; i < nums.length; i++) {\n    let complement = target - nums[i];\n    if (map.has(complement)) return [map.get(complement), i];\n    map.set(nums[i], i);\n  }\n}",
    "testCases": [
      {
        "input": "[2,7,11,15], target=9",
        "expectedOutput": "[0,1]"
      },
      {
        "input": "[3,2,4], target=6",
        "expectedOutput": "[1,2]"
      },
      {
        "input": "[3,3], target=6",
        "expectedOutput": "[0,1]"
      }
    ],
    "explanation": "Use a HashMap. For each number, check if its complement (target - num) already exists in the map.",
    "proTip": "HashMap lookup is O(1). Turns O(n^2) brute force into O(n).",
    "mnemonic": "Store what you have seen, look for what you need."
  },
  {
    "title": "Find Duplicates in Array",
    "description": "Write findDuplicates(arr) that returns an array of elements that appear more than once.\n\nExamples:\n  findDuplicates([5,1,6,2,1,3,6,2,5,3]) -> [5,1,6,2,3]\n  findDuplicates([1,2,3]) -> []",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Arrays",
      "Set"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function findDuplicates(arr) {\n  // your code here\n}",
      "python": "def find_duplicates(arr):\n    pass",
      "java": "public List<Integer> findDuplicates(int[] arr) { return new ArrayList<>(); }"
    },
    "starterCode": "function findDuplicates(arr) {\n  // your code here\n}",
    "optimalSolution": "function findDuplicates(arr) {\n  const seen = new Set(), dups = new Set();\n  for (let i of arr) {\n    seen.has(i) ? dups.add(i) : seen.add(i);\n  }\n  return [...dups];\n}",
    "testCases": [
      {
        "input": "[5,1,6,2,1,3,6,2,5,3]",
        "expectedOutput": "[5,1,6,2,3]"
      },
      {
        "input": "[1,2,3]",
        "expectedOutput": "[]"
      },
      {
        "input": "[1,1,2,2]",
        "expectedOutput": "[1,2]"
      }
    ],
    "explanation": "Use two Sets: one for seen elements, one for duplicates. If already seen, add to dups.",
    "proTip": "Two Sets approach avoids counting — just track seen vs duplicate.",
    "mnemonic": "Seen it before? It is a duplicate."
  },
  {
    "title": "Flatten Nested Array",
    "description": "Write flattenArray(arr) that flattens a deeply nested array into a single-level array.\n\nExamples:\n  flattenArray([1,[2,[3,[4]]]]) -> [1,2,3,4]\n  flattenArray([\"Inspector\",[[\"ANKLE\",[\"HIKE\"]]],\"pawn\"]) -> [\"Inspector\",\"ANKLE\",\"HIKE\",\"pawn\"]",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Arrays",
      "Recursion"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function flattenArray(arr) {\n  // your code here\n}",
      "python": "def flatten_array(arr):\n    pass",
      "java": "public List<Object> flattenArray(Object[] arr) { return new ArrayList<>(); }"
    },
    "starterCode": "function flattenArray(arr) {\n  // your code here\n}",
    "optimalSolution": "function flattenArray(arr) {\n  let res = [];\n  arr.forEach(item =>\n    Array.isArray(item) ? res.push(...flattenArray(item)) : res.push(item)\n  );\n  return res;\n}",
    "testCases": [
      {
        "input": "[1,[2,[3,[4]]]]",
        "expectedOutput": "[1,2,3,4]"
      },
      {
        "input": "[\"Inspector\",[[\"ANKLE\",[\"HIKE\"]]],\"pawn\"]",
        "expectedOutput": "[\"Inspector\",\"ANKLE\",\"HIKE\",\"pawn\"]"
      }
    ],
    "explanation": "Recursively flatten: if item is array, spread flattened result; otherwise push directly.",
    "proTip": "arr.flat(Infinity) is the one-liner, but recursion shows understanding.",
    "mnemonic": "If array, go deeper. If not, collect it."
  },
  {
    "title": "Chunk Array",
    "description": "Write chunkArray(arr, size) that splits an array into chunks of the given size.\n\nExamples:\n  chunkArray([1,2,3,4,5,6,7], 3) -> [[1,2,3],[4,5,6],[7]]\n  chunkArray([1,2,3,4], 2) -> [[1,2],[3,4]]",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Arrays"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function chunkArray(arr, size) {\n  // your code here\n}",
      "python": "def chunk_array(arr, size):\n    pass",
      "java": "public List<List<Integer>> chunkArray(int[] arr, int size) { return new ArrayList<>(); }"
    },
    "starterCode": "function chunkArray(arr, size) {\n  // your code here\n}",
    "optimalSolution": "function chunkArray(arr, size) {\n  let result = [];\n  for (let i = 0; i < arr.length; i += size)\n    result.push(arr.slice(i, i + size));\n  return result;\n}",
    "testCases": [
      {
        "input": "[1,2,3,4,5,6,7], size=3",
        "expectedOutput": "[[1,2,3],[4,5,6],[7]]"
      },
      {
        "input": "[1,2,3,4], size=2",
        "expectedOutput": "[[1,2],[3,4]]"
      }
    ],
    "explanation": "Loop stepping by size, slice each chunk. slice handles the last smaller chunk automatically.",
    "proTip": "slice handles the last smaller chunk automatically.",
    "mnemonic": "Step by size, slice each piece."
  },
  {
    "title": "Find Missing Numbers in Range",
    "description": "Write missingNumbers(arr) that finds all missing numbers between the min and max of the array.\n\nExamples:\n  missingNumbers([1,2,4,6]) -> [3,5]\n  missingNumbers([10,12,15]) -> [11,13,14]",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Arrays",
      "Set"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function missingNumbers(arr) {\n  // your code here\n}",
      "python": "def missing_numbers(arr):\n    pass",
      "java": "public List<Integer> missingNumbers(int[] arr) { return new ArrayList<>(); }"
    },
    "starterCode": "function missingNumbers(arr) {\n  // your code here\n}",
    "optimalSolution": "function missingNumbers(arr) {\n  let missing = [];\n  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {\n    if (!arr.includes(i)) missing.push(i);\n  }\n  return missing;\n}",
    "testCases": [
      {
        "input": "[1,2,4,6]",
        "expectedOutput": "[3,5]"
      },
      {
        "input": "[10,12,15]",
        "expectedOutput": "[11,13,14]"
      },
      {
        "input": "[1,3,5]",
        "expectedOutput": "[2,4]"
      }
    ],
    "explanation": "Loop from min to max of array. Collect numbers not present in the array.",
    "proTip": "Use Set for O(1) lookup: const set = new Set(arr); then check !set.has(i).",
    "mnemonic": "Walk the range, collect the gaps."
  },
  {
    "title": "Find Second Largest Number",
    "description": "Write secondLargest(arr) that returns the second largest unique number in the array.\n\nExamples:\n  secondLargest([30,20,5,8]) -> 20\n  secondLargest([1,1,2,3]) -> 2",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Arrays"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function secondLargest(arr) {\n  // your code here\n}",
      "python": "def second_largest(arr):\n    pass",
      "java": "public int secondLargest(int[] arr) { return -1; }"
    },
    "starterCode": "function secondLargest(arr) {\n  // your code here\n}",
    "optimalSolution": "function secondLargest(arr) {\n  let largest = -Infinity, second = -Infinity;\n  for (let num of arr) {\n    if (num > largest) { second = largest; largest = num; }\n    else if (num > second && num !== largest) { second = num; }\n  }\n  return second;\n}",
    "testCases": [
      {
        "input": "[30,20,5,8]",
        "expectedOutput": "20"
      },
      {
        "input": "[1,1,2,3]",
        "expectedOutput": "2"
      },
      {
        "input": "[5,5,5]",
        "expectedOutput": "-Infinity"
      }
    ],
    "explanation": "Single pass tracking largest and second. Update second when num > second but != largest.",
    "proTip": "One-pass O(n) beats sorting O(n log n). Always prefer in interviews.",
    "mnemonic": "Two variables, one pass — champion and runner-up."
  },
  {
    "title": "FizzBuzz",
    "description": "Write fizzBuzz(n) returning an array from 1 to n where multiples of 3 are \"Fizz\", multiples of 5 are \"Buzz\", and multiples of both are \"FizzBuzz\".\n\nExample:\n  fizzBuzz(5) -> [\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Logic",
      "Arrays"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "languageBoilerplate": {
      "javascript": "function fizzBuzz(n) {\n  // your code here\n}",
      "python": "def fizz_buzz(n):\n    pass",
      "java": "public List<String> fizzBuzz(int n) { return new ArrayList<>(); }"
    },
    "starterCode": "function fizzBuzz(n) {\n  // your code here\n}",
    "optimalSolution": "function fizzBuzz(n) {\n  return Array.from({length: n}, (_, i) => {\n    const num = i + 1;\n    if (num % 15 === 0) return \"FizzBuzz\";\n    if (num % 3 === 0) return \"Fizz\";\n    if (num % 5 === 0) return \"Buzz\";\n    return String(num);\n  });\n}",
    "testCases": [
      {
        "input": "5",
        "expectedOutput": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\"]"
      },
      {
        "input": "15",
        "expectedOutput": "[\"1\",\"2\",\"Fizz\",\"4\",\"Buzz\",\"Fizz\",\"7\",\"8\",\"Fizz\",\"Buzz\",\"11\",\"Fizz\",\"13\",\"14\",\"FizzBuzz\"]"
      }
    ],
    "explanation": "Check % 15 first (both), then % 3, then % 5. Order matters!",
    "proTip": "Always check combined condition (% 15) before individual ones.",
    "mnemonic": "15 = 3 x 5. Check the product first!"
  },
  {
    "title": "Max Profit from Stocks",
    "description": "Write maxProfit(prices) that finds the maximum profit from buying and selling a stock once.\n\nExamples:\n  maxProfit([7,1,5,3,6,4]) -> 5\n  maxProfit([7,6,4,3,1]) -> 0 (no profit possible)",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Arrays",
      "Greedy"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function maxProfit(prices) {\n  // your code here\n}",
      "python": "def max_profit(prices):\n    pass",
      "java": "public int maxProfit(int[] prices) { return 0; }"
    },
    "starterCode": "function maxProfit(prices) {\n  // your code here\n}",
    "optimalSolution": "function maxProfit(prices) {\n  let min = Infinity, profit = 0;\n  for (let p of prices) {\n    min = Math.min(min, p);\n    profit = Math.max(profit, p - min);\n  }\n  return profit;\n}",
    "testCases": [
      {
        "input": "[7,1,5,3,6,4]",
        "expectedOutput": "5"
      },
      {
        "input": "[7,6,4,3,1]",
        "expectedOutput": "0"
      },
      {
        "input": "[1,2,3,4,5]",
        "expectedOutput": "4"
      }
    ],
    "explanation": "Track minimum price seen so far. At each price, calculate profit if sold now. Track max profit.",
    "proTip": "One pass O(n). Track min buy price and max profit simultaneously.",
    "mnemonic": "Buy low (track min), sell high (track max profit)."
  },
  {
    "title": "Rearrange Even Then Odd",
    "description": "Write arrangeEvenOdd(arr) that rearranges the array with all even numbers first, then odd numbers.\n\nExample:\n  arrangeEvenOdd([1,3,2,6,5,4]) -> [2,6,4,1,3,5]",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Arrays"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "languageBoilerplate": {
      "javascript": "function arrangeEvenOdd(arr) {\n  // your code here\n}",
      "python": "def arrange_even_odd(arr):\n    pass",
      "java": "public int[] arrangeEvenOdd(int[] arr) { return new int[]{}; }"
    },
    "starterCode": "function arrangeEvenOdd(arr) {\n  // your code here\n}",
    "optimalSolution": "function arrangeEvenOdd(arr) {\n  return [...arr.filter(n => n % 2 === 0), ...arr.filter(n => n % 2 !== 0)];\n}",
    "testCases": [
      {
        "input": "[1,3,2,6,5,4]",
        "expectedOutput": "[2,6,4,1,3,5]"
      },
      {
        "input": "[1,2,3,4]",
        "expectedOutput": "[2,4,1,3]"
      }
    ],
    "explanation": "Filter evens and odds separately, then spread both into a new array.",
    "proTip": "Two filters + spread is clean and readable. For in-place, use two-pointer approach.",
    "mnemonic": "Evens first, odds last — filter and combine."
  },
  {
    "title": "Fibonacci Series",
    "description": "Write fibonacci(n) that returns the first n numbers of the Fibonacci sequence.\n\nExamples:\n  fibonacci(5) -> [0,1,1,2,3]\n  fibonacci(8) -> [0,1,1,2,3,5,8,13]",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Math",
      "Arrays"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function fibonacci(n) {\n  // your code here\n}",
      "python": "def fibonacci(n):\n    pass",
      "java": "public int[] fibonacci(int n) { return new int[]{}; }"
    },
    "starterCode": "function fibonacci(n) {\n  // your code here\n}",
    "optimalSolution": "function fibonacci(n) {\n  let res = [0, 1];\n  for (let i = 2; i < n; i++) res[i] = res[i - 1] + res[i - 2];\n  return res.slice(0, n);\n}",
    "testCases": [
      {
        "input": "5",
        "expectedOutput": "[0,1,1,2,3]"
      },
      {
        "input": "8",
        "expectedOutput": "[0,1,1,2,3,5,8,13]"
      },
      {
        "input": "1",
        "expectedOutput": "[0]"
      }
    ],
    "explanation": "Start with [0,1], each next number = sum of previous two.",
    "proTip": "Iterative is O(n). Recursive without memoization is O(2^n) — avoid in interviews!",
    "mnemonic": "0,1 then each = prev + prev-prev."
  },
  {
    "title": "Check Armstrong Number",
    "description": "Write isArmstrong(num) that returns true if the number is an Armstrong number (sum of each digit raised to the power of number of digits equals the number).\n\nExamples:\n  isArmstrong(153) -> true (1^3 + 5^3 + 3^3 = 153)\n  isArmstrong(123) -> false",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Math"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function isArmstrong(num) {\n  // your code here\n}",
      "python": "def is_armstrong(num):\n    pass",
      "java": "public boolean isArmstrong(int num) { return false; }"
    },
    "starterCode": "function isArmstrong(num) {\n  // your code here\n}",
    "optimalSolution": "function isArmstrong(num) {\n  const digits = String(num).split(\"\");\n  return digits.reduce((acc, d) => acc + Math.pow(Number(d), digits.length), 0) === num;\n}",
    "testCases": [
      {
        "input": "153",
        "expectedOutput": "true"
      },
      {
        "input": "123",
        "expectedOutput": "false"
      },
      {
        "input": "370",
        "expectedOutput": "true"
      }
    ],
    "explanation": "Get digits, raise each to power of digit count, sum them. Compare to original number.",
    "proTip": "digits.length gives the power. Use reduce to sum digit^power.",
    "mnemonic": "Each digit raised to its own count — if sum equals original, it is Armstrong."
  },
  {
    "title": "Find Prime Numbers",
    "description": "Write getPrimes(range) that returns all prime numbers from 2 up to the given range.\n\nExamples:\n  getPrimes(10) -> [2,3,5,7]\n  getPrimes(20) -> [2,3,5,7,11,13,17,19]",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Math"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function getPrimes(range) {\n  // your code here\n}",
      "python": "def get_primes(range_n):\n    pass",
      "java": "public List<Integer> getPrimes(int range) { return new ArrayList<>(); }"
    },
    "starterCode": "function getPrimes(range) {\n  // your code here\n}",
    "optimalSolution": "function getPrimes(range) {\n  let primes = [];\n  for (let i = 2; i <= range; i++) {\n    let isPrime = true;\n    for (let j = 2; j * j <= i; j++) {\n      if (i % j === 0) { isPrime = false; break; }\n    }\n    if (isPrime) primes.push(i);\n  }\n  return primes;\n}",
    "testCases": [
      {
        "input": "10",
        "expectedOutput": "[2,3,5,7]"
      },
      {
        "input": "20",
        "expectedOutput": "[2,3,5,7,11,13,17,19]"
      }
    ],
    "explanation": "For each number, check divisibility up to its square root. If no divisor found, it is prime.",
    "proTip": "Only check up to sqrt(i) — if no factor found by then, it is prime.",
    "mnemonic": "Square root shortcut: no factor up to sqrt = prime."
  },
  {
    "title": "Factorial",
    "description": "Write factorial(n) that calculates the factorial of a non-negative integer.\n\nExamples:\n  factorial(5) -> 120\n  factorial(0) -> 1",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Math",
      "Recursion"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "languageBoilerplate": {
      "javascript": "function factorial(n) {\n  // your code here\n}",
      "python": "def factorial(n):\n    pass",
      "java": "public long factorial(int n) { return 0; }"
    },
    "starterCode": "function factorial(n) {\n  // your code here\n}",
    "optimalSolution": "function factorial(n) {\n  if (n < 0) return undefined;\n  let res = 1;\n  for (let i = 2; i <= n; i++) res *= i;\n  return res;\n}",
    "testCases": [
      {
        "input": "5",
        "expectedOutput": "120"
      },
      {
        "input": "0",
        "expectedOutput": "1"
      },
      {
        "input": "10",
        "expectedOutput": "3628800"
      }
    ],
    "explanation": "Multiply all integers from 2 to n. Base case: 0! = 1.",
    "proTip": "Iterative is safer than recursive for large n (avoids stack overflow).",
    "mnemonic": "n! = n * (n-1) * ... * 2 * 1."
  },
  {
    "title": "Memoization",
    "description": "Implement memoize(fn) that caches results of expensive function calls and returns cached result on repeated calls.\n\nExample:\n  const slowSquare = memoize(n => n * n);\n  slowSquare(4); // calculated: 16\n  slowSquare(4); // from cache: 16 (instant!)",
    "type": "coding",
    "difficulty": "Hard",
    "tags": [
      "JavaScript",
      "Functions",
      "Performance",
      "Closures"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 25,
    "languageBoilerplate": {
      "javascript": "function memoize(fn) {\n  // your code here\n}",
      "python": "def memoize(fn):\n    pass",
      "java": "// Use HashMap for caching\n// public <T,R> Function<T,R> memoize(Function<T,R> fn) { }"
    },
    "starterCode": "function memoize(fn) {\n  // your code here\n}",
    "optimalSolution": "const memoize = (fn) => {\n  let cache = {};\n  return (n) => {\n    if (n in cache) return cache[n];\n    let res = fn(n);\n    cache[n] = res;\n    return res;\n  };\n};",
    "testCases": [
      {
        "input": "memoize(n => n*n)(4) called twice",
        "expectedOutput": "16 (second call from cache)"
      },
      {
        "input": "memoize(n => n+1)(5)",
        "expectedOutput": "6"
      }
    ],
    "explanation": "Cache results by argument. Return cached value on repeat calls. Closure keeps cache private.",
    "proTip": "Use JSON.stringify(args) as key to support multiple arguments.",
    "mnemonic": "Remember what you calculated — never repeat work."
  },
  {
    "title": "Debounce",
    "description": "Implement debounce(fn, delay) that delays invoking fn until after delay milliseconds have elapsed since the last call.\n\nExample:\n  const debouncedSearch = debounce(search, 300);\n  // Calling debouncedSearch rapidly only triggers search once after 300ms of inactivity.",
    "type": "coding",
    "difficulty": "Hard",
    "tags": [
      "JavaScript",
      "Functions",
      "Performance",
      "Timers"
    ],
    "domains": [
      "Frontend",
      "Fullstack"
    ],
    "points": 25,
    "languageBoilerplate": {
      "javascript": "function debounce(fn, delay) {\n  // your code here\n}",
      "python": "# Not commonly implemented in Python",
      "java": "// Debounce is a frontend concept"
    },
    "starterCode": "function debounce(fn, delay) {\n  // your code here\n}",
    "optimalSolution": "function debounce(fn, delay) {\n  let timer;\n  return (...args) => {\n    clearTimeout(timer);\n    timer = setTimeout(() => fn.apply(this, args), delay);\n  };\n}",
    "testCases": [
      {
        "input": "debounce(fn, 300) called 3 times rapidly",
        "expectedOutput": "fn called once after 300ms"
      }
    ],
    "explanation": "Clear previous timer on each call. Only execute fn after delay with no new calls.",
    "proTip": "clearTimeout + setTimeout pattern. Each call resets the timer.",
    "mnemonic": "Reset the clock on every call — fire only when calm."
  },
  {
    "title": "Deep Clone Object",
    "description": "Write deepClone(obj) that creates a deep copy of an object, so nested objects are not shared by reference.\n\nExample:\n  const original = { a: 1, b: { c: 2 } };\n  const clone = deepClone(original);\n  clone.b.c = 99;\n  // original.b.c is still 2",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Objects",
      "Recursion"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function deepClone(obj) {\n  // your code here\n}",
      "python": "import copy\ndef deep_clone(obj):\n    return copy.deepcopy(obj)",
      "java": "// Use serialization or manual copy"
    },
    "starterCode": "function deepClone(obj) {\n  // your code here\n}",
    "optimalSolution": "function deepClone(obj) {\n  return JSON.parse(JSON.stringify(obj));\n}",
    "testCases": [
      {
        "input": "{ a: 1, b: { c: 2 } }",
        "expectedOutput": "Independent deep copy"
      },
      {
        "input": "[1, [2, [3]]]",
        "expectedOutput": "[1,[2,[3]]] (independent)"
      }
    ],
    "explanation": "JSON.parse(JSON.stringify(obj)) creates a deep copy. Limitation: does not handle functions, undefined, or circular refs.",
    "proTip": "For production use structuredClone(obj) (modern JS) or lodash _.cloneDeep().",
    "mnemonic": "Stringify to text, parse back to object — breaks all references."
  },
  {
    "title": "Closure Counter",
    "description": "Implement createCounter() using closures that returns an object with increment, decrement, and getValue methods.\n\nExample:\n  const c = createCounter();\n  c.increment(); // 1\n  c.increment(); // 2\n  c.decrement(); // 1\n  c.getValue();  // 1",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Closures",
      "Functions"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function createCounter() {\n  // your code here\n}",
      "python": "def create_counter():\n    pass",
      "java": "public class Counter {\n  // implement increment, decrement, getValue\n}"
    },
    "starterCode": "function createCounter() {\n  // your code here\n}",
    "optimalSolution": "function createCounter() {\n  let count = 0;\n  return {\n    increment: () => ++count,\n    getValue: () => count,\n  };\n}",
    "testCases": [
      {
        "input": "increment() x2, getValue()",
        "expectedOutput": "2"
      },
      {
        "input": "increment() x2, decrement() x1, getValue()",
        "expectedOutput": "1"
      }
    ],
    "explanation": "Inner functions close over count. Each call modifies the same count variable in the closure.",
    "proTip": "Closures = private state. count is inaccessible from outside.",
    "mnemonic": "Closure = function with a private diary."
  },
  {
    "title": "Group Anagrams",
    "description": "Write groupAnagrams(words) that groups words which are anagrams of each other.\n\nExample:\n  groupAnagrams([\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"])\n  -> [[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]",
    "type": "coding",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Strings",
      "HashMap",
      "Arrays"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "languageBoilerplate": {
      "javascript": "function groupAnagrams(words) {\n  // your code here\n}",
      "python": "def group_anagrams(words):\n    pass",
      "java": "public List<List<String>> groupAnagrams(String[] strs) { return new ArrayList<>(); }"
    },
    "starterCode": "function groupAnagrams(words) {\n  // your code here\n}",
    "optimalSolution": "function groupAnagrams(strs) {\n  const map = {};\n  for (const s of strs) {\n    const key = s.split(\"\").sort().join(\"\");\n    if (!map[key]) map[key] = [];\n    map[key].push(s);\n  }\n  return Object.values(map);\n}",
    "testCases": [
      {
        "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "expectedOutput": "[[\"eat\",\"tea\",\"ate\"],[\"tan\",\"nat\"],[\"bat\"]]"
      },
      {
        "input": "[\"a\"]",
        "expectedOutput": "[[\"a\"]]"
      }
    ],
    "explanation": "Sort each word alphabetically as key. Same key = anagrams. Group by key.",
    "proTip": "Sorted string as HashMap key is the classic anagram trick.",
    "mnemonic": "Sort to find the hidden twin."
  },
  {
    "title": "Longest Substring Without Repeating Characters",
    "description": "Write lengthOfLongestSubstring(s) returning the length of the longest substring without repeating characters.\n\nExamples:\n  lengthOfLongestSubstring(\"abcabcbb\") -> 3\n  lengthOfLongestSubstring(\"bbbbb\") -> 1\n  lengthOfLongestSubstring(\"pwwkew\") -> 3",
    "type": "coding",
    "difficulty": "Hard",
    "tags": [
      "JavaScript",
      "Strings",
      "Sliding Window",
      "Set"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 30,
    "languageBoilerplate": {
      "javascript": "function lengthOfLongestSubstring(s) {\n  // your code here\n}",
      "python": "def length_of_longest_substring(s):\n    pass",
      "java": "public int lengthOfLongestSubstring(String s) { return 0; }"
    },
    "starterCode": "function lengthOfLongestSubstring(s) {\n  // your code here\n}",
    "optimalSolution": "function lengthOfLongestSubstring(s) {\n  const charSet = new Set();\n  let left = 0, maxLength = 0;\n  for (let right = 0; right < s.length; right++) {\n    while (charSet.has(s[right])) {\n      charSet.delete(s[left]);\n      left++;\n    }\n    charSet.add(s[right]);\n    maxLength = Math.max(maxLength, right - left + 1);\n  }\n  return maxLength;\n}",
    "testCases": [
      {
        "input": "\"abcabcbb\"",
        "expectedOutput": "3"
      },
      {
        "input": "\"bbbbb\"",
        "expectedOutput": "1"
      },
      {
        "input": "\"pwwkew\"",
        "expectedOutput": "3"
      }
    ],
    "explanation": "Sliding window with Set. Expand right pointer, shrink left when duplicate found.",
    "proTip": "Sliding window = two pointers + Set/Map. Master this pattern!",
    "mnemonic": "Expand until duplicate, then shrink from left."
  },
  {
    "title": "Rotate Array",
    "description": "Write rotateArray(arr, index) that rotates the array starting from the given index.\n\nExamples:\n  rotateArray([1,2,3,4,5], 2) -> [3,4,5,1,2]\n  rotateArray([1,2,3,4,5], 0) -> [1,2,3,4,5]",
    "type": "coding",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Arrays"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 15,
    "languageBoilerplate": {
      "javascript": "function rotateArray(arr, index) {\n  // your code here\n}",
      "python": "def rotate_array(arr, index):\n    pass",
      "java": "public int[] rotateArray(int[] arr, int index) { return new int[]{}; }"
    },
    "starterCode": "function rotateArray(arr, index) {\n  // your code here\n}",
    "optimalSolution": "function rotateArray(arr, index) {\n  return [...arr.slice(index), ...arr.slice(0, index)];\n}",
    "testCases": [
      {
        "input": "[1,2,3,4,5], index=2",
        "expectedOutput": "[3,4,5,1,2]"
      },
      {
        "input": "[1,2,3,4,5], index=0",
        "expectedOutput": "[1,2,3,4,5]"
      },
      {
        "input": "[1,2,3], index=1",
        "expectedOutput": "[2,3,1]"
      }
    ],
    "explanation": "Slice from index to end, then slice from start to index. Spread both into new array.",
    "proTip": "slice(index) + slice(0, index) is the clean rotation pattern.",
    "mnemonic": "Cut at index, swap the two halves."
  },
  {
    "title": "var vs let vs const Hoisting",
    "description": "What is the output of the following code?\n\nconsole.log(x);\nvar x = 5;\nconsole.log(y);\nlet y = 10;",
    "type": "mcq",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Hoisting",
      "Variables"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "options": [
      "undefined, ReferenceError",
      "5, 10",
      "ReferenceError, ReferenceError",
      "undefined, undefined"
    ],
    "correctAnswer": "0",
    "explanation": "var declarations are hoisted and initialized to undefined. let/const are hoisted but NOT initialized (temporal dead zone), so accessing them before declaration throws ReferenceError.",
    "proTip": "var = hoisted + initialized to undefined. let/const = hoisted but in TDZ (temporal dead zone).",
    "mnemonic": "var is forgiving (undefined), let/const are strict (TDZ error)."
  },
  {
    "title": "Closures - Inner Function Output",
    "description": "What does the inner function output?\n\nfunction outer() {\n  let count = 0;\n  return function inner() {\n    count++;\n    return count;\n  };\n}\nconst fn = outer();\nconsole.log(fn());\nconsole.log(fn());",
    "type": "mcq",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Closures",
      "Functions"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "options": [
      "1, 2",
      "0, 1",
      "1, 1",
      "undefined, undefined"
    ],
    "correctAnswer": "0",
    "explanation": "The inner function closes over count. Each call to fn() increments the same count variable. First call: count becomes 1, second call: count becomes 2.",
    "proTip": "Closures maintain a reference to the outer variable, not a copy.",
    "mnemonic": "Closure = shared memory between calls."
  },
  {
    "title": "Event Loop Order - setTimeout vs Promise",
    "description": "What is the output order of the following code?\n\nconsole.log(\"Start\");\nsetTimeout(() => console.log(\"Timeout\"), 0);\nPromise.resolve().then(() => console.log(\"Promise\"));\nconsole.log(\"End\");",
    "type": "mcq",
    "difficulty": "Hard",
    "tags": [
      "JavaScript",
      "Event Loop",
      "Promises",
      "Async"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 25,
    "options": [
      "Start, End, Promise, Timeout",
      "Start, Timeout, Promise, End",
      "Start, End, Timeout, Promise",
      "Start, Promise, End, Timeout"
    ],
    "correctAnswer": "0",
    "explanation": "Synchronous code runs first (Start, End). Microtasks (Promises) run before macrotasks (setTimeout). So Promise logs before Timeout.",
    "proTip": "Microtask queue (Promises) always drains before macrotask queue (setTimeout/setInterval).",
    "mnemonic": "Sync first, then micro (Promise), then macro (setTimeout)."
  },
  {
    "title": "Arrow Function this Keyword",
    "description": "What is the output of the following code?\n\nconst obj = {\n  name: \"Alice\",\n  greet: function() {\n    const inner = () => console.log(this.name);\n    inner();\n  }\n};\nobj.greet();",
    "type": "mcq",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Arrow Functions",
      "this",
      "Scope"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "options": [
      "Alice",
      "undefined",
      "TypeError",
      "null"
    ],
    "correctAnswer": "0",
    "explanation": "Arrow functions do not have their own \"this\". They inherit \"this\" from the enclosing lexical scope. Since greet is a regular function called on obj, \"this\" is obj, so inner() logs \"Alice\".",
    "proTip": "Arrow functions inherit \"this\" from where they are defined, not where they are called.",
    "mnemonic": "Arrow = no own this, borrows from parent scope."
  },
  {
    "title": "Promise.finally Usage",
    "description": "What does Promise.finally() do?\n\nPromise.resolve(\"success\")\n  .then(val => { console.log(val); return val; })\n  .finally(() => console.log(\"done\"))\n  .then(val => console.log(val));",
    "type": "mcq",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Promises",
      "Async"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "options": [
      "success, done, success",
      "success, done",
      "done, success, success",
      "success, success, done"
    ],
    "correctAnswer": "0",
    "explanation": "finally() runs after the promise settles (resolved or rejected). It does not change the resolved value — the value passes through. Output: \"success\" (then), \"done\" (finally), \"success\" (then after finally).",
    "proTip": "finally() is for cleanup — it does not modify the promise value.",
    "mnemonic": "finally = always runs, never changes the value."
  },
  {
    "title": "typeof null Returns What?",
    "description": "What does the following expression return?\n\ntypeof null",
    "type": "mcq",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Types",
      "Quirks"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "options": [
      "\"object\"",
      "\"null\"",
      "\"undefined\"",
      "\"boolean\""
    ],
    "correctAnswer": "0",
    "explanation": "typeof null returns \"object\" — this is a well-known JavaScript bug from the original implementation. null is not actually an object, but typeof null === \"object\" is true.",
    "proTip": "To check for null specifically, use: value === null (strict equality).",
    "mnemonic": "typeof null = \"object\" — the famous JS bug!"
  },
  {
    "title": "Array Destructuring with Skip",
    "description": "What is the value of b after this destructuring?\n\nconst [a, , b] = [1, 2, 3, 4];",
    "type": "mcq",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Destructuring",
      "ES6"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "options": [
      "3",
      "2",
      "4",
      "undefined"
    ],
    "correctAnswer": "0",
    "explanation": "Array destructuring assigns by position. a=1, the second element (2) is skipped with an empty slot, b=3. The 4 is not destructured.",
    "proTip": "Use empty commas to skip elements in array destructuring.",
    "mnemonic": "Comma = skip. [a,,b] skips the middle."
  },
  {
    "title": "Rest vs Spread Operator",
    "description": "What is the output of the following code?\n\nfunction sum(...nums) {\n  return nums.reduce((a, b) => a + b, 0);\n}\nconst arr = [1, 2, 3];\nconsole.log(sum(...arr));",
    "type": "mcq",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Rest",
      "Spread",
      "ES6"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "options": [
      "6",
      "[1,2,3]",
      "NaN",
      "undefined"
    ],
    "correctAnswer": "0",
    "explanation": "Spread (...arr) expands the array into individual arguments: sum(1,2,3). Rest (...nums) collects them back into an array [1,2,3]. reduce sums them: 6.",
    "proTip": "Spread = expand (call site). Rest = collect (function params). Same syntax, opposite roles.",
    "mnemonic": "Spread = explode array. Rest = collect into array."
  },
  {
    "title": "What is a Closure?",
    "description": "Which of the following best describes a closure in JavaScript?",
    "type": "mcq",
    "difficulty": "Medium",
    "tags": [
      "JavaScript",
      "Closures",
      "Concepts"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 20,
    "options": [
      "A function that retains access to its outer scope variables even after the outer function has returned",
      "A function that cannot be called more than once",
      "A method that closes the browser window",
      "A way to prevent variable hoisting"
    ],
    "correctAnswer": "0",
    "explanation": "A closure is formed when an inner function retains access to variables from its outer (enclosing) function scope, even after the outer function has finished executing.",
    "proTip": "Closures enable data privacy, factory functions, and memoization patterns.",
    "mnemonic": "Closure = function + its backpack of outer variables."
  },
  {
    "title": "Difference Between == and ===",
    "description": "What is the output of the following comparisons?\n\nconsole.log(0 == false);\nconsole.log(0 === false);",
    "type": "mcq",
    "difficulty": "Easy",
    "tags": [
      "JavaScript",
      "Equality",
      "Types"
    ],
    "domains": [
      "Frontend",
      "Fullstack",
      "Backend"
    ],
    "points": 10,
    "options": [
      "true, false",
      "true, true",
      "false, false",
      "false, true"
    ],
    "correctAnswer": "0",
    "explanation": "== (loose equality) performs type coercion: 0 == false is true because false coerces to 0. === (strict equality) checks both value AND type: 0 === false is false because number !== boolean.",
    "proTip": "Always use === in production code to avoid unexpected type coercion bugs.",
    "mnemonic": "== asks \"same value?\", === asks \"same value AND type?\""
  }
];

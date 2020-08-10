// Given a string, return the length of the longest substring without
// repeating characters.
// --- Example
// lengthOfLongestSubstring("abcabcbb") --> 3 since length of "abc"
// lengthOfLongestSubstring("bbbbb") --> 1 since length of "b"

function lengthOfLongestSubstring(s) {
    let start = 0;
    let max = 0;
    let charMap = new Map();
    for(let i=0; i<s.length; i++) {
    const currentChar = s[i];
    if(charMap.get(currentChar) >= start) {
        start = charMap.get(currentChar) + 1;
    }
    charMap.set(currentChar, i);
    max = Math.max(max, i - start +1);
    }
    return max;
}

module.exports = lengthOfLongestSubstring;

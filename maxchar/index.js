// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let charMap = {};
    let maxChar = '';
    let maxCount = 0; 
    for (let char of str) {
       charMap[char] = charMap[char] + 1 || 1;
        // if(charMap[char]) {
        //     charMap[char]++;
        // } else {
        //     charMap[char] = 1;
        // }
    }
   
//looping through Map to find the characted with max count
   for (let char in charMap) {
       if(charMap[char] > maxCount) {
           maxCount++;
           maxChar=char;
       }
   }

   return maxChar;
}

module.exports = maxChar;

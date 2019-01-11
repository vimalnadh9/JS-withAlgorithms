// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams_V1(strA, strB) {

    if (sortString(strA) === sortString(strB)) {
        return true;
    } else {
        return false;
    }
}

function sortString(strIn) {
    return strIn.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


function anagrams_V2(stringA, stringB) {

    stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
    stringB = stringB.replace(/[^\w]/g, '').toLowerCase()

    if (stringA.length !== stringB.length) {
        return false;
    }

    const charMapA = createCharMap(stringA);
    const charMapB = createCharMap(stringB);

    for (let char in charMapA) {

        if (charMapA[char] !== charMapB[char]) {
            return false;
        }
    }

    return true;

}

function createCharMap(strIn) {
    const charMap = {};
    console.log(strIn);
    for (let char of strIn) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}



module.exports = {
    anagrams_V1: anagrams_V1,
    anagrams_V2: anagrams_V2
};

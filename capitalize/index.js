// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize_v2(str) {
    let result = str[0].toUpperCase();

    for(let i=1 ; i < str.length; i++) {

        if(str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }

    return result;

}

function capitalize_v1(str) {

    const result=[];

    for(let word of str.split(' ')) {
        result.push(word[0].toUpperCase() + word.slice(1));
    }

    return result.join(' ');

}

module.exports = {
    capitalize_v1: capitalize_v1,
    capitalize_v2: capitalize_v2
};

// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {    
    return str.split('').reverse().join('');
}

function reverse2(str) {    
    let revStr = '';
    for(const a of str) {
        revStr = a + revStr;
    }
    return   revStr;
}


function reverse3(str) {
    return str.split('').reduce(
        (revStr, char) => char + revStr + ''        
    );
}
module.exports = {    
    reverse1: reverse1,
    reverse2: reverse2,
    reverse3: reverse3
};

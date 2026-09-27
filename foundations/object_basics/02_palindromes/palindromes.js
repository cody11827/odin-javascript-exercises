const palindromes = function (word) {
    let reversed = word.split('').reverse().join('');
    return reversed === word;
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = function(phrase) {
    let reversedPhrase = '';

    for (let i = phrase.length - 1; i >= 0; i--) {
        reversedPhrase += phrase[i]
    }
    return reversedPhrase;
};

// Do not edit below this line
module.exports = reverseString;

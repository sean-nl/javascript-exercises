const removeFromArray = function(arrayIn, ...values) {
    for (const value of values) {
        //get one index
        const index = arrayIn.indexOf(value);

        if (index > -1) {
            arrayIn.splice(index,1);
        }
    }

    return arrayIn;
};

// Do not edit below this line
module.exports = removeFromArray;

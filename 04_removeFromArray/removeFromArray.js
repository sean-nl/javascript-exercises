const removeFromArray = function(arrayIn, ...values) {
    for (const value of values) {
        let index = arrayIn.indexOf(value);     //Get first occurrence of this value.
        while (index !== -1) {  
            arrayIn.splice(index,1);
            index = arrayIn.indexOf(value);     //After splicing out, check if there are more occurrences.
        }
    }
    return arrayIn;
};

//From Odin solution, for reference:
//I decided not to use a filter because I thought that in my way I wouldn't have to iterate over the array, which would be cleaner.
//But I did consider using a filter. So I can feel smug.

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.
// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;

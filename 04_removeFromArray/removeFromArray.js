const removeFromArray = function(arrayIn, ...values) {
    let removedArray = [];


    //old method
    // for (const value of values) {
    //     const index = arrayIn.indexOf(value);
    //     if (index > -1) {
    //         let a = arrayIn.slice(0,index); //Naming these for debug
    //         let ra = removedArray.concat(arrayIn.slice(0,index)); //Naming these for debug

    //         //slice the original array up until the occurence of the value, and concat it to the removedArray.
    //         removedArray = removedArray.concat(arrayIn.slice(0,index)); //Is there a way of doing this without concat?
            
    //         //remove that chunk of the original array.
    //         arrayIn = arrayIn.slice(index+1);
    //     }
    // }

    // return removedArray.concat(arrayIn);

    //   new method
    for (const value of values) {

        //get one index
        const index = arrayIn.indexOf(value);

        if (index > -1) {
            arrayIn.splice(index,1);
        }
    }

    return removedArray.concat(arrayIn); //Append the remaining piece of arrayIn
};

// Do not edit below this line
module.exports = removeFromArray;

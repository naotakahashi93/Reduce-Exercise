/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractValue(arr, key) {
    return arr.reduce(function(accum, next){
        // console.log(next["name"]); // consoles the value of the key "name" in each obj
        accum.push(next[key]);
        return accum;
    },[]); // empty bracket to initialize an empty arr?? 
}




/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    const vowels = "aeiou";
    let strArr = str.split(""); // split the inputted string to an array
     return strArr.reduce(function(accum, next){ 
        let lowerStrArr = next.toLowerCase();
        if(vowels.indexOf(lowerStrArr) !== -1){// if the lowercased string array is found in the vowels string (aka does not equal -1)
            if (accum[lowerStrArr]){
                accum[lowerStrArr]++; // if the accum arr has the lower cased letter in the object then add 1
            } else {
                accum[lowerStrArr] = 1; // if not then initialize the letter to 1
            }
        } 
        return accum;
     },{}); // initialize empty object arr 
}


/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(accum, next, idx){
        console.log("accum", accum, "next",next, "index", idx)
// accum.push(next[key], next[value])
accum[idx][key] = value; // adding the key and value object into each index in the arr
return accum;
    }, arr); // initializing arr as we are adding the vlaues into the existing arr
}   

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) {

    console.log("callback", callback);

    return arr.reduce(function(accum, next){
        console.log("accum", accum, "next", next)
        if(callback(next)) { // if the values in the callback function (isEven or isLongerThanThreeCharacters) is truthy 
            // console.log("first", next);
            accum[0].push(next); // we are pushing the truthy values into the first array 
        }
        else {
            // console.log("second", next);
            accum[1].push(next);// we are pushing the flasy values into the second array 
        }
        return accum;

    }, [[], []]) // [[], []] is essensially a nested list/sub list - multiple arrays within one array

}
             
// const evenArr = arr.reduce(function(accum, next){
//         if (next % 2 === 0){
//             accum.push(next)
//         }; 
//         return accum;
//     },[]);

//     const oddArr = arr.reduce(function(accum, next){
//         if (next % 2 !== 0){
//             accum.push(next)
//         }; 
//         return accum;
//     },[]);
//  console.log (evenArr, oddArr)

/// <----- ??

//Array reverse function
function reverseJsonArray(str){
    try {
        const arr = JSON.parse(str);
        arr.reverse();
        return JSON.stringify(arr);
    } catch (e){
        return false;
        //console.log(e);
        
    }
}

//Test cases
console.log(reverseJsonArray('["Dog","Cat","MOuse","Fox"]'));        // ["Fox","MOuse","Cat","Dog"]
console.log(reverseJsonArray('["11","22","33","44"]'));               // ["44","33","22","11"]
console.log(reverseJsonArray(12345));                                    // false
console.log(reverseJsonArray());                                         // false 
console.log(reverseJsonArray('[]'))                                     // []
console.log(reverseJsonArray(true));                                     // false
console.log(reverseJsonArray([1, 2, 3, 4, 5, 6]));                      // false   
console.log(reverseJsonArray('["a"],s'));                               //false
console.log(reverseJsonArray('[{"name":"Kido"},{age:2}]'));             //false
console.log(reverseJsonArray(true, false, true));                       // false
console.log(reverseJsonArray(1,2,3,4,5,6));                             // false   
console.log(reverseJsonArray(reverseJsonArray('["a","b","c","d"]')));   //["a","b","c","d"]
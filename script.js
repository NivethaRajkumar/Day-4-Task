//1.print odd numbers in an array using anonymous function
//--------------------------------------------------------
/*
const odd = function(numbers)
{
    var result =[]
    for(var i=0;i<numbers.length;i++)
    {
        if(numbers[i]%2!==0)
        {
            result.push(numbers[i])
        }
    }
    return result;
}
console.log(odd([1,2,3,4,5,6,7,8,9,10]))


//print odd numbers in an array using IIFE function

const odd=(function(numbers){
    var result=[]
    for(var i=0;i<numbers.length;i++)
    {
        if(numbers[i]%2!==0)
        {
            result.push(numbers[i])
        }
    }
    return result;

})([1,2,3,4,5,6,7,8,9,10])
console.log(odd);


//print odd numbers in an array using arrow function

const numbers = [1,2,3,4,5,6,7,8,9,10]
const odd=numbers.filter(num=>num%2!==0)
odd.forEach(num=>console.log(num))

//-----------------------------------------------------------------
//2. Convert all the strings to title caps in a string array
//-----------------------------------------------------------------

// Anonymous Function
const titleCase = function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

console.log(titleCase("never give up"));

//IIFE Function
const titleCase =(function(str){
    return function(str){
        str = str.toLowerCase().split(' ');
        for(i=0;i<str.length;i++){
            str[i]=str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join(' ')
    }
})();
console.log(titleCase("never give up"))

//Arrow Function
const titleCase = str => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
};

console.log(titleCase("never give up"))
 
//----------------------------------------------------------------
//3. Sum of all numbers in an array using anonymous function
//----------------------------------------------------------------
const sum = function(numbers){
    var total=0
    for(var i=0;i<numbers.length;i++)
    {
        total=total+numbers[i]
    }
    return total
    }
    console.log(sum([1,2,3,4,5]))


//Sum of all numbers in an array using IIFE function
const sum = (function(numbers){
    var total=0
    for(var i=0;i<numbers.length;i++)
    {
        total=total+numbers[i]
    }
    return total
    })([1,2,3,4,5])
    console.log(sum)

//Sum of all numbers in an array using Arrow function

const numbers = [1,2,3,4,5,6,7,8,9,10]
const odd=numbers.reduce((sum,i)=>{
    return sum+i
},1)
console.log(odd)

//----------------------------------------------------------------------
//4.Remove duplicates from an array
//----------------------------------------------------------------------

//IIFE function
const array=(function(numbers){
    return Array.from(new Set(numbers))
})([1,2,3,2,5,4,3,5,7,8,9,10]);
console.log(array);

//Arrow Function
const array = ((numbers) => Array.from(new Set(numbers)))([1,2, 5, 4, 3, 5, 7, 8, 9, 10]);
console.log(array);

//Anonymous Function
const array = (function(numbers) {
    return Array.from(new Set(numbers));
})([1, 2, 3, 2, 5, 4, 3, 5, 7, 8, 9, 10]);

console.log(array);

//------------------------------------------------------------------------------
//5. palindrome
//------------------------------------------------------------------------------
//Anonymous function
const palindrome = function(arr){
    var result = []
    for (var i=0;i<arr.length;i++) {
        const cleanStr = arr[i].toLowerCase().replace(/[^a-z0-9]/g, '');
        var reversedStr= cleanStr.split("").reverse().join("");
        if (cleanStr===reversedStr) {
            result.push(arr[i]);
        }
    }
    return result
}

console.log(palindrome(["malayalam","madam","this"]));

//IIFE Function
const palindrome = (function(arr) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        const cleanStr = arr[i].toLowerCase().replace(/[^a-z0-9]/g, '');
        var reversedStr = cleanStr.split("").reverse().join("");
        if (cleanStr === reversedStr) {
            result.push(arr[i]);
        }
    }
    return result;
})(["madam", "this"]);

console.log(palindrome);



//Arrow Function
const palindrome = ((arr) => {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const cleanStr = arr[i].toLowerCase().replace(/[^a-z0-9]/g, '');
        const reversedStr = cleanStr.split("").reverse().join("");
        if (cleanStr === reversedStr) {
            result.push(arr[i]);
        }
    }
    return result;
})(["malayalam", "madam", "this"]);

console.log(palindrome);

//-----------------------------------------------------------------------------------
//6.prime numbers
//-----------------------------------------------------------------------------------
// Anonymous function
var result=[]
const prime=function(arr){
    for(var i=0;i<arr.length;i++){
        var count = 0
        for(var j=2;j<arr[i];j++){
            if(arr[i]%j===0)
            {
                count = 1;
            }
        }
        if(count===0)
        {
            result.push(arr[i])
        }

    }
    return result;
}
console.log(prime([1,2,3,4,5,6,7,8,9,10]))

//IIFE Function
const result = [];

const prime = (function(arr) {
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                count = 1;
            }
        }
        if (count === 0) {
            result.push(arr[i]);
        }
    }
    return result;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,13,15]);

console.log(prime);

//Arrow function
const result = [];

const prime = ((arr) => {
    for (var i = 0; i < arr.length; i++) {
        var count = 0;
        for (var j = 2; j < arr[i]; j++) {
            if (arr[i] % j === 0) {
                count = 1;
            }
        }
        if (count === 0) {
            result.push(arr[i]);
        }
    }
    return result;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(prime);

//------------------------------------------------------------------
//7.Rotate an array by k times
//------------------------------------------------------------------
//Anonymous Function
const rotateArray = function(arr, k) {
    const rotationIndex = k % arr.length;
    const rotatedArray = arr.slice(rotationIndex).concat(arr.slice(0, rotationIndex));
    return rotatedArray;
};

const arr = [1, 2, 3, 4, 5];
const k = 3;
console.log(rotateArray(arr, k)); 

//IIFE function
const rotateArray = ((arr, k) => {
    const rotationIndex = k % arr.length;
    const rotatedArray = arr.slice(rotationIndex).concat(arr.slice(0, rotationIndex));
    return rotatedArray;
})([1, 2, 3, 4, 5], 2);

console.log(rotateArray); 
*/














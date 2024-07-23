let numbers=[1,2,3,4,5,6,7,8,9,10]
let aray=[]
let numArr=(odd)=>{
for(let i=0;i<odd.length;i++)
    if(odd[i]%2==1){
        aray.push(odd[i])  
}
console.log(aray)
return aray
}
let Podd=numArr(numbers)
document.getElementById("demo").innerHTML="The value of an array were "+Podd

// Anonymous Function:
const printOddNumbers = function(arr) {
    return arr.filter(num => num % 2 !== 0);
};
console.log(printOddNumbers([1, 2, 3, 4, 5])); 
// IIFE:
(function(arr) {
    console.log(arr.filter(num => num % 2 !== 0));
})([1, 2, 3, 4, 5]); // Output: [1, 3, 5]

// Convert All Strings to Title Caps in a String Array
// Anonymous Function:
const toTitleCaps = function(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
};
console.log(toTitleCaps(["hello", "world"])); 
// IIFE:
(function(arr) {
    console.log(arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()));
})(["hello", "world"]);

// Sum of All Numbers in an Array anonyms function:
const sumArray = function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

// IIFE:
(function(arr) {
    console.log(arr.reduce((acc, num) => acc + num, 0));
})([1, 2, 3, 4, 5]); 

// Return All Prime Numbers in an Array
const isPrime = num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

const primeNumbers = function(z) {
    return z.filter(isPrime);
};
console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7])); // Output: [2, 3, 5, 7]

// iife function
(function(arr) {
    const isPrime = num => {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    console.log(arr.filter(isPrime));
})([1, 2, 3, 4, 5, 6, 7]); 


// Return All Palindromes in an Array
const isPalindrome = str => {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
};

const palindromes = function(arr) {
    return arr.filter(isPalindrome);
};
console.log(palindromes(["madam", "hello", "racecar", "world"])); 


(function(arr) {
    const isPalindrome = str => {
        const reversed = str.split('').reverse().join('');
        return str === reversed;
    };

    console.log(arr.filter(isPalindrome));
})(["madam", "hello", "racecar", "world"]); 

// Return Median of Two Sorted Arrays of the Same Size
const findMedian = function(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = merged.length / 2;
    return (merged[mid - 1] + merged[mid]) / 2;
};
console.log(findMedian([1, 3], [2, 4])); // Output: 2.5

(function(arr1, arr2) {
    const merged = [...arr1, ...arr2].sort((a, b) => a - b);
    const mid = merged.length / 2;
    console.log((merged[mid - 1] + merged[mid]) / 2);
})([1, 3], [2, 4]); // Output: 2.5

// Remove Duplicates from an Array
const removeDuplicates = function(arr) {
    return [...new Set(arr)];
};
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

(function(arr) {
    console.log([...new Set(arr)]);
})([1, 2, 2, 3, 4, 4, 5]); // Output: [1, 2, 3, 4, 5]

// Rotate an Array by k Times
const rotateArray = function(arr, k) {
    const n = arr.length;
    k = k % n;
    return arr.slice(-k).concat(arr.slice(0, -k));
};
console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]

(function(arr, k) {
    const n = arr.length;
    k = k % n;
    console.log(arr.slice(-k).concat(arr.slice(0, -k)));
})([1, 2, 3, 4, 5], 2); 


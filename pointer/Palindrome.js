// Coding Practice - Palindrome
/** 
 * Write a function that checks if the input string is a palindrome.
 * Palindrome is a word that can be read forwards and backwards.
 * --------------------------------------------
 * 
 * Ex. 
 * isPalindrome('awesome') false
 * isPalindrome('foobar') false
 * isPalindrome('tacobat') true
 * isPalindrome('amanaplanacanalpanama')  true
 */
// let word = 'amy';
// let word = "amanaplanacanalpanama"
let word = "tacocat"
function isPalindrome(str){
    let arr = str.split('')
    console.log(arr);
    let left = 0;
    let right = arr.length - 1;
    let results = [];
    while(left <= right){
        if(arr[left] !== arr[right]){
            console.log(false);
            return false
        }else{
            left ++;
            right --;
            console.log(arr[left],arr[right])
        }
    }
    console.log(true)
    return true;

}

isPalindrome(word);

// Write your code below

const isPalindrome = w => {
    let x;
    x = w.split('').reverse().join('');
    if(w === x){
        return true;
    }
    else{
        return false;
    }
}
console.log(isPalindrome('racecar'));
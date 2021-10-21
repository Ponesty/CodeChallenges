// Write your code below

//Without loop
// const isPalindrome = w => {
//     let x;
//     x = w.split('').reverse().join('');
//     if(w === x){
//         return true;
//     }
//     else{
//         return false;
//     }
// }


//With loop
const isPalindrome = w => {
    let y = [];
    for(let i = w.length -1; i>= 0; i--){
        y.push(w[i]);
    }
    y = y.join('');
    if(w === y){
        return true;
    }
    else{
        return false;
    }
    
}


console.log(isPalindrome('racecar'));
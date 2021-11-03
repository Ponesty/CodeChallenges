// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."

// Write your solution below:

let has_balanced_parens = word => {
    let arr;
    let jC =1;
    let count1=0;
    let count2=0;
    for (let i=0; i<word.length;i++){
        if(word[i]==='('){
            count1++;
        }
        if(word[i] === ')'){
            count2++;
        }
    }
    if (count1===count2){
        return true;
    }
    else{
        return false;
    }
}

console.log(`Sample 1 is ${has_balanced_parens(sample1)}.`);
console.log(`Sample 2 is ${has_balanced_parens(sample2)}.`);
console.log(`Sample 3 is ${has_balanced_parens(sample3)}.`);
console.log(`Sample 4 is ${has_balanced_parens(sample4)}.`);
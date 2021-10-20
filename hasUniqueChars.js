// Write your code below
function hasUniqueChars(word){
    let boo = true;
    let count = 1;
    for(let i=0; i<word.length; i++){
        for(let j= count; j<word.length; j++){
            if(word[i] === word[j]){
                boo = false;
                
            }

        }
        count++;
        
    }
    return boo;
}

console.log(hasUniqueChars('Monday'));
console.log(hasUniqueChars('Mondday'));
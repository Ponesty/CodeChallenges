const hasMoreVowels = (word) => {
    let jj =1;
    let vC = 0;
    let cC=0;
    const vowels =['a','e','i','o','u'];
    for(let n of word){
        if(vowels.includes(n)){
            vC++;
        }
        else{
            cC++;
        }
    }
    if(vC > cC){
        return true;
        
    }
    else{
        return false;
    }
}

console.log(hasMoreVowels('mice'));
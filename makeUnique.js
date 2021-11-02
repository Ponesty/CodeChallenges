// Write your solution below:

const makeUnique = word => {
    let jC=1;
    word = word.split('');
    for(let i = 0; i<word.length; i++){
        for(let j = jC; j<word.length;j++){
            if(word[i]=== word[j]){
                word.splice(j,1);
            }

        }
        jC++;
    }
    word =word.join('');
    return word;
}

console.log(makeUnique('helloworld'));


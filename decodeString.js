// Write your code below this line

let decode = (word) => {
    let num = Number(word[0]);
    let arr = [];
    for(let i = 1; i<word.length;i++){
        let letter = String.fromCharCode(word[i].charCodeAt(0) + num);
        arr.push(letter);
    }
    arr = arr.join('');
    return arr;
}

console.log(decode('2fcjjm'));
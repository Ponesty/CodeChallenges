// Write your code below this line.
function luckyNumbers(n){
    let num =[];
    for(let i =0; i< n; i++){
        num.push(Math.floor(Math.random() * 10) + 1);
        
    }
    return num;
}
console.log(luckyNumbers(3));
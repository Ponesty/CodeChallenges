// Starting array
let array = [28, 43, -12, 30, 4, 0, 12];


// Write your solution below:
function out(array){
    let answer = false;
    let count = 1;
    for(let i = 0; i< array.length; i++){
        for(let j =count; j< array.length; j++){
            if(array[i]+array[j]===0){
                answer = true;
            }
        }
        count++;
        
    }
    return answer;
    
}
console.log(out(array));
// Write your solution below:
const pigLatin = (word) =>{
    let first;
    let trip = [];
    let vowel = ['a','e','i','o','u'];
    word = word.split(' ');
    for(let i =0; i<word.length; i++){
        if(!word[i][0].includes('a','e','i','o','u')){
            trip = word[i].split('');
            first = trip.shift();
            trip.push(first, 'ay')
            trip =trip.join('');
            word[i] = trip;
        }
        else{
            trip = word[i].split('');
            trip.push('yay')
            trip =trip.join('');
            word[i] = trip;
        }
    }
    word = word.join(' ');
    
    return word;
}

console.log(pigLatin('give me an apple'));


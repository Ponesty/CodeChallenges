// Write your solution below:

let tshirtSorter = shirt => {
    shirt = shirt.split('');
    shirt.sort().reverse();
    shirt =shirt.join('');
    return shirt;
}

console.log(tshirtSorter('slsmmsllsmsmlmsls'));

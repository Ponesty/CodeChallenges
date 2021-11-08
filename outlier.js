const outlier = arr =>{
    let oCount = [];
    let eCount = [];
    oCount = arr.filter((number) => number%2!==0)
    eCount = arr.filter((number) => number%2===0)
    if(eCount.length > oCount.length){
        return oCount[0];
    } else{
        return eCount[0];
    }
}

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(outlier([160, 3, 1719, 19, 11, 13, -21]));
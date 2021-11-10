//Using a while loop

const nbYear = (p0,per,aug,p) =>{
    let count =0;
    per = per/100;
    while(p0 < p){
        p0=p0+(p0*per)+aug;
        count++;
    }
    return count;
}


console.log(nbYear(1500, 5, 100, 5000));

console.log(nbYear(1500000, 2.5, 10000, 2000000));



//Using a for loop(uncomment below to try out loop)

// const nnbYear = (p0,per,aug,p) =>{
//     let count =0;
//     per = per/100;
//     for(let i=1; p0<p; i++){
//         p0=p0+(p0*per)+aug
//         count=i;
//     }
//     return count;
// }

// console.log(nnbYear(1500, 5, 100, 5000));
// console.log(nbYear(1500000, 2.5, 10000, 2000000));
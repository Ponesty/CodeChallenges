const missingNumber = (arr,max) =>{
    let count =1;
    for(let i =0; i<max;i++){
        if(!arr.includes(count)){
            console.log(count);
        }
        count++;
    }
}

missingNumber([1,2,3,4,6,7,8,9,10],3);
const perfectSquare = num => {
    if(Math.sqrt(num) % 1 !== 0){
        return -1;
    } else{
        let next = num+1;
        let isSquare = Math.sqrt(next) % 1;
        while(isSquare !== 0){
            next++;
            isSquare = Math.sqrt(next) % 1;
        };
        return next;

    };
};

console.log(perfectSquare(3000));
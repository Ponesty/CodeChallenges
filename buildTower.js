const tower = num => {
    let arr = [];
    let count = num;
    let starNum = 0;
    for(let i=0; i<num; i++){
        arr[i] = '';
        for(j = 0; j<= count-1; j++){
            arr[i] +=' ';
        };
        for(k = 0; k <= starNum; k++){
            arr[i] +="*";
        };
        for(let l = 0; l <=count-1; l++){
            arr[i] +=' '; 
        }
        count--;
        starNum += 2;
    };
    return arr.join('\r\n');
};
  
  console.log(tower(6));
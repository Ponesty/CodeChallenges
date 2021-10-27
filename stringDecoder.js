const decoder = (code) =>{
    let arr =[];
    let num =0;
    code = code.split('');
    for(let i=0;i<code.length;i++){
        if(Number(code[i]) || code[i] == 0){
            num = parseInt(code[i]);
            arr.push(code[(i+num)+1]);
        }
    }
    arr=arr.join('');
    return arr;
    
}

console.log(decoder('2bna0p1mp2osl0e'));
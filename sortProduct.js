const sortProduct = arr => {
    let product = [];
    for(let i =0; i<arr.length; i++){
        product.push(arr[i]*(i+1))
    }
    product.sort(function(a, b) {
        return a - b;
      });
    for(let j=0;j<arr.length;j++){
        for(let k=0; k<arr.length;k++){
            if(arr[j]*(j+1) === product[k]){
                product[k] = arr[j];
            }
            
        }
    }

    return product;
}

console.log(sortProduct([23,2,3,4,5]));
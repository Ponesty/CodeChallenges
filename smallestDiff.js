const smallest = (arr1,arr2) => {
    let min = Math.abs(arr2[0]-arr1[0]);
    for(let i =0; i<arr2.length; i++){
        for(let j = 0; j<arr1.length; j++){
            if((Math.abs(arr2[i]-arr1[j]))< min){
                min = Math.abs(arr2[i]-arr1[j]);
            }
        }
    }
    return min;
};

console.log(smallest([10, 20, 14, 16, 18],[30, 23, 54, 33, 96]));
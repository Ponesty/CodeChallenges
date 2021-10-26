const best = (arr) => {
    let jC = 1;
    let profit = 0;
    let buy;
    let sell;
    for(let i = 0;i<arr.length; i++){
        for(let j =jC;j<arr.length;j++){
            if(arr[j]-arr[i]> profit){
                profit = arr[j]-arr[i];
                buy = arr[i];
                sell = arr[j];
            }
        }
        jC++;
    }
    if(profit > 0){
        return `${profit} - buy at $${buy}, sell at $${sell}`;

    }
    else{
        return profit;
    }
}
console.log(best([15, 10, 20, 22, 1, 9]));
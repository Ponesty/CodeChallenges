const printDigits = num =>{
    while(num){
        let num2 = num%10;
        console.log(num2);
        num = (num-num2)/10;

    }
}


printDigits(1);
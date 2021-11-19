const maskify = yup => {
    //console.log(yup.length)
    if(yup.length >= 5){
        let index =0;
        while(index != yup.length-4){
            yup = yup.replace(yup[index],"#");
            index++;
        };
        return yup;
    } else{
        return yup;
    };
};
console.log(maskify("4556364607935616"));
console.log(maskify("skippy"));
console.log(maskify("1"));
console.log(maskify(""));
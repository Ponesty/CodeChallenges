const createPhoneNumber = num =>{
    let res = '';
    num = num.map(String);
    res += `(${num[0]+num[1]+num[2]}) `;
    res += `${num[3] + num[4] + num[5]}-`;
    res += num[6] + num[7] + num[8] + num[9];
    return res;
    
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.log(createPhoneNumber([9,8,7,6,5,4,3,2,1,0]));
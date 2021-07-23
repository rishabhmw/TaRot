// Rishabh Maheshwari @M521837

const {getRequiredIndexs1, getRequiredIndexs2} = require('./util')

let datalist = [1,3,4,5,6,7,5,4,3,6,4,4,5];

// Math Method
console.log(getRequiredIndexs1(datalist, 0, 4));
console.log(getRequiredIndexs1(datalist, 4, 4));
console.log(getRequiredIndexs1(datalist, 3, 2));
// Two Pointer Method
console.log(getRequiredIndexs2(datalist, 0, 4));
console.log(getRequiredIndexs2(datalist, 4, 4));
console.log(getRequiredIndexs2(datalist, 3, 2));
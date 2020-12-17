let arr = [1, 2, 'dsfsd', 3, 4, 5, 'dfvtr', 'gfbda', 5.5, 4.8, 9, 1.5, 7.6, 8, 9, 'sdsdc', 'scdsc'];

const addToArray = function (arr) {
    let responseArr = [];
    responseArr['int'] = [];
    responseArr['float'] = [];
    responseArr['string'] = [];
    for (let item of arr) {
        if (Number.isInteger(item)) {
            responseArr['int'].push(item);
        }
        
        else if (item % 1 !== 0 && typeof item === 'number') {
            responseArr['float'].push(item);
        }
        else if (typeof item === 'string') {
            responseArr['string'].push(item);
        }
    }
    return responseArr;
}
console.log(addToArray(arr));

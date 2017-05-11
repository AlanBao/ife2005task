// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    console.log(arr instanceof Array);
}
isArray([]);

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    if (typeof fn === 'function') {
        console.log(true);
    }
}
isFunction(isArray);

// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    console.log(arr instanceof Array);
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    if (typeof fn === 'function') {
        console.log(true);
    }
}

// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    if (!(src instanceof Object)) {
        console.log('the argument you inputed is ' + src + '.');
        return;
    }

    var tempObj = new Object();
    for (var prop in src) {
        var value = src[prop];
        if (typeof value === 'object'){
            tempObj[prop] = cloneObject(src[prop]);
        }
        else {
            tempObj[prop] = value;
        }
    }
    return tempObj;
}

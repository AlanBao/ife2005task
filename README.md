## JavaScript数据类型及语言基础
- 任务要求：判断 arr 是否为一个数组，返回一个 bool 值。  
原先使用的代码为
```
function isArray(arr) {
    if (typeof arr = 'array') {
        console.log(true);
    }
}
```
结果控制台未输入任何结果，因为 typeof operand 只可能返回6种结果——"undefined", "boolean", "string", "number", "function", "object", 数组属于对象，所以调用函数会返回"object"。  
除 typeof 之外，判断变量数据类型的方法还有
1. instancesof
``` 
arr instanceof Array; // 当变量arr保存的值是数组时，返回true。
```
2. toString()  
```
var toString = Object.prototype.toString(); // 避免每次使用toString（）方法时都要访问Object的原型对象。
toString.call(arr); // 相当于arr.toString()。
```
- 任务要求：使用递归来实现一个深度克隆，被克隆的对象限制为数字、字符串、布尔值、日期、数组、对象，不包括函数和正则对象。
```
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
```
1. if 语句检测传入函数的参数是否为对象，即使是以对象字面量形式创建的对象，instanceof 操作符仍然会返回 true。
2. 30行声明一个临时变量 tempObj，接下来要将原对象的所有属性一一赋值给临时变量，最后将临时变量赋值给新对象。
3. for...in 循环语句会迭代src的所有非原型对象上的可枚举属性，每次循环都会将符合要求的属性名赋值给变量 prop。
4. 32行很关键，变量 value是用于保存本次循环中，对象 src 对应的 prop 属性（而非仅仅是属性名）。
5. 34行更关键，如果本次循环中的属性是对象（引用类型值，而非原始类型值），那么应进行递归操作——以该属性（即对象）为参数，传递给克隆函数 cloneObject（），重复之前的步骤，将该属性（对象）内的所有属性依次迭代，即便属性中还嵌套了其他对象。
6. 最后将返回值赋给新对象。

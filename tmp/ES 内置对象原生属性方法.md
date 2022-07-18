# String

### String.prototype.split
<span style="color: #FF4F4F">**功能**</span>  
+ 使用指定的分隔符字符串将一个字符串分割成子字符串数组，以一个指定的分割字符串来决定每个拆分的位置

> 分隔符，会从字符串中删除。

<span style="color: green">**语法**</span>
+ String.prototype.split([separator[, limit]])
    + separator（**可选**）: <u>指定表示每个拆分应发生的点的字符串</u>
        + 可以是一个字符串或正则表达式
        + 若没指定它，则返回的数组包含一个由整个字符串组成的元素
        + 纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点
        + 分隔符为空字符串，则将 str 原字符串中每个字符的数组形式返回
    + limit（**可选**）: <u>一个整数，限定返回的分割片段数量</u>

<span style="color: #C28014">**示例**</span>

```js
    var str = 'That is good';
    str.split();            // ['That is good']
    str.split('');          // ['T', 'h', 'a', 't', ' ', 'i', 's', ' ', 'g', 'o', 'o', 'd']
    str.split(' ');         // ['That', 'is', 'good']
    str.split('o');         // ['That is g', '', 'd']
```


### String.prototype.charAt
<span style="color: #FF4F4F">**功能**</span>  
+ 从一个字符串中返回指定索引的字符

<span style="color: green">**语法**</span>
+ String.prototype.charAt(index)
    + index（**可选**）: <u>索引</u>
        + 值为介于 0 和字符串长度减 1 之间的整数
        + 若不指定它，则默认为 0
        + 若指定的值超过字符串长度 - 1，则返回一个空字符串

<span style="color: #C28014">**示例**</span>

```js
    var str = 'abcdef';
    str.charAt();       // 'a'
    str.charAt(2);      // 'c'
    str.charAt(10);     // ''
```


### String.prototype.trim
<span style="color: #FF4F4F">**功能**</span>  
+ 从一个字符串的两端删除空白字符

> 返回一个两端去掉空白的新字符串。

> 另有 4 个功能一样的方法：String.prototype.trimStart(别名: trimLeft)、String.prototype.trimEnd(别名: trimRight)，分别是仅去掉字符串左/右两边的空白

<span style="color: green">**语法**</span>
+ String.prototype.trim()

<span style="color: #C28014">**示例**</span>

```js
    var str = '   Hello world!   ';
    str.trim();     // 'Hello world!'
```


### String.prototype.replace
<span style="color: #FF4F4F">**功能**</span>  
+ 返回一个由替换值，替换部分或全局匹配项后的新字符串

> String.prototype.replaceAll 与其功能一样，只是 replaceAll 不用刻意设置，默认全局匹配。

<span style="color: green">**语法**</span>
+ String.prototype.replace(regexp|substr, newSubstr|function)
    + regexp: <u>匹配项，一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉，全局匹配要加 g 修饰符</u>
    + substr: <u>匹配项，一个字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换</u>
    + newSubstr: <u>替换项，一个字符串。用于替换掉第一个参数在原字符串中的匹配部分</u>
    + function: <u>替换项，一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果，有 4 个参数</u>
        + match: 匹配的子串
        + p1,p2, ...: 
        + offset: 匹配到的子字符串在原字符串中的偏移量
        + string: 被匹配的原字符串

<span style="color: #C28014">**示例**</span>

```js
    var str = 'this is a testing text';
    str.replace(/t/g, 'd');     // 'dhis is a desding dexd'
```


<br />

# Number

### Number.prototype.toFixed
<span style="color: #FF4F4F">**功能**</span>  
+ 指定一个数字应该保留几位小数

> 该数值在必要时进行四舍五入，另外在必要时会用 0 来填充小数部分，以便小数部分有指定的位数。  

> 返回值是字符串。

<span style="color: green">**语法**</span>
+ Number.prototype.toFixed(digits)
    + digits（**可选**）: <u>小数点后数字的个数</u>
        + 其值介于 0 到 20 之间（包括）
        + 若不指定它，默认为 0

<span style="color: #C28014">**示例**</span>

```js
    var num = 123.4251;
    num.toFixed();      // '123'
    num.toFixed(2);     // '123.43'
    num.toFixed(3);     // '123.425'
    num.toFixed(6);     // '123.425100'
```


### Number.prototype.toString
<span style="color: #FF4F4F">**功能**</span>  
+ 返回指定 Number 对象的字符串表示形式

<span style="color: green">**语法**</span>
+ Number.prototype.toString([radix])
    + radix（**可选**）: <u>指定要用于数字到字符串的转换的进制</u>
        + 其值介于 2 到 36 之间（包括）
        + 若不指定它，默认为 10

<span style="color: #C28014">**示例**</span>

```js
    var num = 123.4251;
    num.toString();     // '123.4251'
    num.toString(2);    // '1111011.0110110011010011010110101000010110000111100101'
    num.toString(12);   // 'a3.5126a596b7758'
```


<br />

# Array

### Array.prototype.reduce
<span style="color: #FF4F4F">**功能**</span>  
+ 对数组中每个元素按序执行一个调用者提供的 reducer 函数
+ 每一次运行 reducer，会将上一步的计算结果作为参数传入，最后将结果汇总为单个返回值  

> reduce 不会直接改变调用它的对象，但对象可被调用的 callbackFn 所改变。  

> 遍历的元素范围是在第一次调用 callbackFn 之前确定的。所以即使有元素在调用开始后被追加到数组中，这些元素也不会被 callbackFn 访问。

<span style="color: green">**语法**</span>
+ Array.prototype.reduce(callbackFn[, initialValue])
    + callbackFn: <u>reducer 函数，有 4 个参数</u>
        + previousValue --- 上一次调用 callbackFn 的返回值
        + currentValue --- 数组中正在处理的元素
        + currentIndex --- 数组中正在处理的元素的索引
        + array --- 要遍历的数组
    + initialValue（**可选**）: <u>作为第一次调用 callbackFn 时参数 previousValue 的值</u>
        + 若指定了它，则 currentValue 则将使用数组第一个元素
        + 若没指定它，previousValue 将使用数组第一个元素，而 currentValue 将使用数组第二个元素

<span style="color: #C28014">**示例**</span>

```js
    function reducer(pv, cv, ci, arr) {
        var sum = pv;
        if(ci !== 1) sum = pv + cv;
        return sum;
    }

    let arr = [1, 2, 3, 4];
    arr.reduce(reducer);        // 8 <-- 1 + 3 + 4
    arr.reduce(reducer, 2);     // 10 <-- 2 + 1 + 3 + 4
```


### Array.prototype.concat
<span style="color: #FF4F4F">**功能**</span>  
+ 合并两个或多个数组

> 此方法不会更改现有数组，而是返回一个新数组。

<span style="color: green">**语法**</span>
+ Array.prototype.concat([arr[, arr1[, arr2[, ...[, arrN]]]]])
    + arr*（**可选**）: <u>要合并到数组当中的值</u>
        + 若不指定该参数，则 concat 直接返回调用它的数组的一个浅拷贝

<span style="color: #C28014">**示例**</span>

```js
    var arr = [1, '2', true],
        arr1 = ['3', 4, 5],
        arr2 = [['name', 123], 6];
    
    arr.concat();               // [1, '2', true]
    arr.concat(arr1);           // [1, '2', true, '3', 4, 5]
    arr.concat(arr1, arr2);     // [1, '2', true, '3', 4, 5, ['name', 123], 6]
```


### Array.prototype.map
<span style="color: #FF4F4F">**功能**</span>  
+ 创建一个新数组，新数组由原数组的每一项调用提供的函数后的返回值组成

> 此方法不会更改现有数组，而是返回一个新数组。

<span style="color: green">**语法**</span>
+ Array.prototype.map(callback[, thisArg])
    + callback: <u>生成新数组元素要调用的函数，有 3 个参数</u>
        + currentValue --- 数组中正在处理的当前元素
        + index（**可选**） --- 数组中正在处理的当前元素的索引
        + array（**可选**） --- 调用 map 方法的数组
    + thisArg（**可选**）: <u>执行 callback 函数时值被用作 this</u>
        + 若没指定它，则 undefined 会被用作 callback 的 this 值

<span style="color: #C28014">**示例**</span>

```js
    var arr = [1, 4, 9];
    arr.map(Math.sqrt);     // [1, 2, 3]
```


### Array.prototype.slice
<span style="color: #FF4F4F">**功能**</span>  
+ 根据 begin 和 end，返回一个原数组的浅拷贝子数组

> 此方法不会更改现有数组，而是返回一个新数组。 

> 包括 begin，不包括 end。

<span style="color: green">**语法**</span>
+ Array.prototype.slice([begin[, end]])
    + begin（**可选**）: <u>提取起始处的索引</u>
        + 若指定为负数，则表示从原数组中的倒数第几个元素开始提取
        + 若不指定它，则 slice 从索引 0 开始
        + begin 超出原数组的索引范围，则返回空数组
    + end（**可选**）: <u>提取终止处的索引</u>
        + 若指定为负数，则表示在原数组中的倒数第几个元素结束抽取
        + 若不指定它，则 slice 会一直提取到原数组末尾
        + end 超出原数组的索引范围，也会一直提取到原数组末尾

<span style="color: #C28014">**示例**</span>

```js
    var arr = ['a', 'b', 'c', 'd', 'e'];
    arr.slice();        // ['a', 'b', 'c', 'd', 'e']
    arr.slice(-3);      // ['c', 'd', 'e']
    arr.slice(2, 4);    // ['c', 'd']
    arr.slice(7);       // []
    arr.slice(4, 1);    // []
```


### Array.prototype.join
<span style="color: #FF4F4F">**功能**</span>  
+ 将一个数组的所有元素以提供的连接字符连接成一个字符串并返回

> 如果数组只有一个项目，那么将返回该项目而不使用分隔符。  

> 原数组为空数组，则返回空数组。  

> 如果一个元素为 undefined 或 null，它会被转换为空字符串。

<span style="color: green">**语法**</span>
+ Array.prototype.join([separator])
    + separator（**可选**）: <u>每个元素间的连接字符</u>
        + 若不指定它，数组元素用逗号（,）分隔
        + 若它是空字符串 ("")，则所有元素之间都没有任何字符
        + 若它为 undefined，效果和不指定一样；不过若它为 null，则相当于以 'null' 作连接符

<span style="color: #C28014">**示例**</span>

```js
    var arr = [1, "name", true, undefined, 456];
    arr.join();             // '1,name,true,,456'
    arr.join("");           // '1nametrue456'
    arr.join("&");          // '1&name&true&&456'
    arr.join(undefined);    // '1,name,true,,456'
```


<br />

# Object

### Object.create
<span style="color: #FF4F4F">**功能**</span>  
+ 以现有对象为原型，创建一个新对象

<span style="color: green">**语法**</span>
+ Object.create(proto[, propertiesObject])
    + proto: <u>新创建对象的原型对象</u>
        + 值为 null 或除基本类型包装对象以外的对象，否则抛错
        + 为 null 时，产出的对象没有原型
    + propertiesObject（**可选**）: <u>为新创建的对象添加指定的属性值和对应的属性描述符</u>
        + 语法对应 Object.defineProperties() 的第二个参数

<span style="color: #C28014">**示例**</span>

```js
    var origin = {
        fun: function() {console.log('function')},
        age: 123
    }
    Object.create({});      // {}
    Object.create(origin);  // {} --> [[Prototype]]: fun、age

    Object.create(origin, {
        "name": {value: 'duskStar', writable: false},
        "interest": {value: 'something', configurable: true}
    }); 
    // {name: 'duskStar', interest: 'something'} --> [[Prototype]]: fun、age                    
```


### Object.freeze
<span style="color: #FF4F4F">**功能**</span>  
+ 冻结一个对象，使其再也不能被修改，这意味着：
    + 不能向这个对象添加新的属性，不能删除已有属性，不能修改已有属性的值
    + 不能修改该对象已有属性的可枚举性、可配置性、可写性
    + 该对象的原型也不能被修改

> freeze 返回的对象和传入的对象是同一个。

<span style="color: green">**语法**</span>
+ Object.freeze(obj)
    + obj: <u>要被冻结的对象</u>

<span style="color: #C28014">**示例**</span>

```js
    var obj = {};
    Object.freeze(obj);     // {}                 
```


<br />

# Date

### Date.now
<span style="color: #FF4F4F">**功能**</span>  
+ 返回自 1970 年 1 月 1 日 00:00:00 (UTC) 到当前时间的毫秒数

<span style="color: green">**语法**</span>
+ Date.now()
        
<span style="color: #C28014">**示例**</span>

```js
    Date.now();     // 1657868955454
```


### Date.prototype.toUTCString
<span style="color: #FF4F4F">**功能**</span>  
+ 把一个日期转换为一个使用 UTC 时区的字符串

<span style="color: green">**语法**</span>
+ Date.prototype.toUTCString()
        
<span style="color: #C28014">**示例**</span>

```js
    new Date().toUTCString();   // 'Fri, 15 Jul 2022 07:14:20 GMT'
```


<br />

# Math



<br />

# Other

### isNaN
<span style="color: #FF4F4F">**功能**</span>  
+ 确定一个值是否为 NaN

> 它和 Number.isNaN 作用一样。  

> 如果 isNaN 的参数不是 Number 类型，函数会首先尝试将这个参数转换为数值再进行判断，而 Number.isNaN 不会。

<span style="color: green">**语法**</span>
+ isNaN(value)
    + value: <u>要检测的值</u>
        
<span style="color: #C28014">**示例**</span>

```js
    isNaN(NaN);                 // true
    isNaN(2);                   // false
    isNaN(Infinity);            // false
    isNaN(true);                // false
    isNaN(false);               // false
    isNaN('');                  // false
    isNaN(Infinity / Infinity); // true
```


###  isFinite

<span style="color: #FF4F4F">**功能**</span>  
+ 判断被传入的参数值是否为一个有限数值

> 它和 Number.isFinite 作用一样。  

> 如果 isFinite 的参数不是 Number 类型，函数会首先尝试将这个参数转换为数值再进行判断，而 Number.isFinite 不会。

<span style="color: green">**语法**</span>
+ isFinite(value)
    + value: <u>要检测的值</u>
        
<span style="color: #C28014">**示例**</span>

```js
    isFinite(Infinity);     // false
    isFinite(NaN);          // false
    isFinite(-Infinity);    // false
    isFinite(123);          // true
    isFinite(1 / 0);        // false
```
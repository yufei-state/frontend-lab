# String


<br />

# Number

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






<br />

# Object

<br />

# Date
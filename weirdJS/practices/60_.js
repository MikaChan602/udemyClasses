// 60.觀念小叮嚀：內建的函數建構子

// 字串

String.prototype.isLengthGreaterThan = function(limit) {
    return this.length > limit; // 這邊的this透過原型練上去找到他的值。
}


console.log('John'.isLengthGreaterThan(3));

// 數字

Number.prototype.isPositive = function() {
    return this > 0
}

// console.log(3.isPositive()) // 無法使用因為js 會自動將3轉成字串

// 要改成以下內容
// 但使用new 這種函數建構子建立起來的東西並不是純值，不是真的number，是物件然後裡面包著數值。
var a = new Number(3);
var b = new Number(-1)
console.log('Number a',a.isPositive())
console.log('Number b ',b.isPositive())

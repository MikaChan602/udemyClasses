// 55. 所有東西都是物件（或純值）

var a = {};
var b = function(){};
var c = [];

// Questions : 原型鍊是用來儲存物件共用的方法嗎？
// 原型鏈就是為什麼所有函數都可以取用原型的屬性
// 原型鏈就是為什麼所有函數都可以取用原型的屬性
// 他們的原型被設定是物件的內建東西


// 所以function可以取用這些方法，比如apply，他會先在物件找，找不到就會在原型找，Javascript幫我們設定好了。
b.apply() // b function沒有此方法，所以他往原型鍊上找。
c.push() // js會自動幫array加上prototype，就能自由的使用這些原型鍊上的方法。

// prototype的prototype是object
c.__proto__.__proto__ // object 是prototype的最底層，是物件。
// 原型鏈的最底層都是物件
// 這就是我們取用方法的原理。




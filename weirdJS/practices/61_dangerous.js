// 61. 危險小叮嚀：內建的函數建構子

var a = 3; // 純值
var b = new Number(3); // 物件
var c = Number ('3'); // 沒有new的話，會將傳進function中的字串做轉型，轉成數字。
console.log('check c',c)

console.log(a == b); // 為什麼純值會等於物件？因為兩個等號的判斷JS會做轉型。
console.log(a === b); // 會確認型別。


// 純值的話不使用建構子比較好，因為會有判斷的問題。
// 純值指的是string, number, boolean。
// 要使用日期的話不要使用javascript內建的建構子Date，建議使用moment.js

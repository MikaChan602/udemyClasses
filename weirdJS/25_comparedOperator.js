// 25. 比較運算子

console.log( 1 < 2 < 3 ); // true


// 為什麼下面這串判斷的答案也是true?
console.log( 3 < 2 < 1 ); // true

/**
 * 有兩個相等的運算子，決定優先順序的會是相依性
 * Less than 小於 ＝> 相依性是left to right
 * 3<2 先回傳 false
 * false < 1 的判斷，javascript會強制型轉false
 * 他會做以下的動作 Number(false) => 回傳結果為0
 * 0<1 => 回傳結果為true
 */
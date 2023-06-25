// const q = $('ul.people li');
// console.log('q',q); //jQuery.fn.init[3]

// jquery.fn其實就是jquery.prototype，jquery.fn是他的別名，他們指向同一個物件
// 因為物件=物件是參考同一個記憶體。 by reference
// 詳情請見jquery line 162

const q = $('ul.people').addClass("newClass").removeClass('people');
console.log(q)
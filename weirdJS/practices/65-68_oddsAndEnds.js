// 65. 初始化

// 66. 

// typeof
// 1. 告訴你type

// instanceof
// 1. 告訴你原型鏈上有什麼


const a = 3;
console.log(typeof a);

const b = 'Hello';
console.log(typeof b);

const c = {};
console.log(typeof c);

const d = [];
console.log(typeof d); // got object
console.log(Object.prototype.toString.call(d)); // 真正能拿到array結果的判斷

function Person(name){
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e);
console.log(e instanceof Person); // e的原型練上是否有Person，有的話回傳true;

console.log(typeof undefined);  // undefined
console.log(typeof null); // JS bug 結果為物件
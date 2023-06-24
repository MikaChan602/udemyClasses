// 63. Object.create與純粹的原型繼承


/** 較舊的瀏覽器不支援Object.create，這時候可以使用Polyfill */ 

// !Object.create 一元運算子 unary operator 需要一個參數
//  arguments.length > 1 二元運算子 binary operator 兩個參數
// 三元運算子 ternary operator 三個參數

// polyfill
if(!Object.create) {
    Object.create = function (o) {
        if(arguments.length > 1) {
            throw new Erroe('Object.create implementation' 
            + ' only accepts the first parameter.');
        }
        // 模擬Object.create在做的事情
        function F() {}; 
        F.prototype = o;
        return new F();
        
    }
}


// js純粹的原型繼承
// 在物件上之上建立物件
var person = {
    firstname: 'Default',
    lastname: 'Default',
    greet: function(){
        return 'Hi ' + this.firstname;
    }
}
var john = Object.create(person);
john.firstname = 'John';
john.lastname = 'Doe';
console.log(john)




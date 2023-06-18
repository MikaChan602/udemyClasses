// 原型繼承

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname : 'John',
    lastname: 'Don'
}

// don't do this EVER! for demo purposes only!!!
// 絕對不要這麼作
// 會做如此奇特的命名是因為要確保不會不小心被打出來
// console.log(john.__proto__)
john.__proto__ = person;
console.log(john.getFullName())
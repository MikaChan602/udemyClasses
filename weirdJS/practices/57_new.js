// 57. 函數建構子

function Person(firstname,lastname) {
    // console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;

    // console.log('This function is involked.')
    // 創建時及呼叫
    // return console.log('hi returned')
}

var john = new Person('John','Doe');
console.log(john);
// 如果沒有return的話，this會指向這個物件本身。
// console.log('chk',john)

var jane = new Person('Jane','Doe');
console.log(jane);


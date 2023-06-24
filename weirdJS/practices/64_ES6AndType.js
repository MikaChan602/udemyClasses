// 64. ES6 與類別

class Person {

    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    };

    greet() {
        return 'Hi' + this.firstname;
    };

}

// 在別的程式語言中calass是一個樣板，不是物件，值得使用new 關鍵字之前，你不會得到物件。

// 但在JavaScript中 上面的class是一個物件！
var john = new Person ('John','Doe');
console.log(john);


// 設定prototype

// Sets the Prototype(__proto__)
class InformalPerson extends Person {

    constructor(firstname, lastname) {
        super(firstname, lastname);
    }

    greet() {
        return 'Yo ' + this.firstname;
    }

};

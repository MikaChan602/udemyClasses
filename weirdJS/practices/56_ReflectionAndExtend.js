/** 56. Reflection與Extend........................ */

let person = {
    firstname : 'Default',
    lastname:'Default',
    getFullname: function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'Doe'
}

// Don't do this EVER! for demo purposes only!!
john.__proto__ = person; 

for (var prop in john){
    // 可以檢視john物件看他的屬性。
    if(john.hasOwnProperty(prop)) {
        console.log(prop + ': ' + john[prop]);
    }
}

let jane = {
    address:'111 Main St.',
    getFormalFullName:function(){
        return this.lastname + ', ' + this.firstname;
    }
}

let jim = {
    getFirstName : function(){
        return firstname;
    }
}

// 將jane,jim作為john的原型加進去。
 _.extend(john, jane, jim);
console.log('after extend',john)

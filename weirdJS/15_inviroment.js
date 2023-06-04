// 15. 函數、環境與變數環境

function b(){
    var myVar;
    console.log('in b',myVar);
}

function a(){
    var myVar = 2;
    console.log('in a',myVar);
    b();
}

var myVar = 1;
console.log('soto',myVar);
a();
// console.log(myVar);
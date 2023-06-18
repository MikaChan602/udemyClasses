// Functional Programming

function mapForEach(arr , fn){
    var newArr = [];
    for(var i = 0; i < arr.length; i++) {
        newArr.push(
            fn(arr[i])
        )
    }; 
    return newArr;
};

var arr1 = [1,2,3];
console.log(arr1);

var arr2 = mapForEach(arr1 , function(item) {
    return item * 2;
})
console.log(arr2)


var arr3 = mapForEach(arr1,function(item) {
    return item > 2;
});
console.log(arr3);

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var checkPastLimit = function(limiter, item) {
    return item > limiter;
}

var arr4 = mapForEach(arr1,checkPastLimit.bind(this,1))
console.log('arr4',arr4);




// 改寫checkPastLimit成只傳一個參數的函數
var checkPastLimitSimplifier = function(limiter){
    return function(limiter, item) {
        return item > limiter;
    }.bind(this,limiter);
}
var arr5 = mapForEach(arr1,checkPastLimit)
console.log('arr5',arr5)


// 1+2+3+4.....=sum
/**
 需執行的operations 
 f(n)=3n;
*/
function fun1(n){
    let sum = 0;
    for(let i =1;i<=n;i++){
        sum += i;
        console.log(i)
    }
    console.log('results',sum)
    return sum;
}
// 測試fun1執行時間
let time1 = window.performance.now();
fun1(10)
let time2 = window.performance.now();
let timeDiff = (time2 - time1)/1000;
console.log(`It takes ${timeDiff} seconds on fun1.`)
/**
 需執行的operations 
 f(n)=3;
*/
function fun2(n){
    return (( 1 + n ) * n ) / 2
}

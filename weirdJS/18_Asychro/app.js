// 關於非同步回呼

// long running function

function waitThreeSeconds(){
    var ms = 3000 + new Date().getTime();
    // console.log(new Date());
    // console.log(new Date().getTime());
    // console.log(ms)
    while (new Date() < ms){}
    console.log('finished function')
}

function clickHandler(){
    console.log('click event!')
}

// listen for the click handler
document.addEventListener('click',clickHandler); // click 事件會放到事件佇列
waitThreeSeconds(); // 放進執行堆
console.log('finished execution');

// Javascript engine 會直到執行堆是空的才會看事件佇列
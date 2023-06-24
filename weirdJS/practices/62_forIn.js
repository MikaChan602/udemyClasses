// 62. 危險小叮嚀：陣列與for in

Array.prototype.myCustomFeature = 'cool!';

var arr = ['John','Jane','Jim'];

for (var prop in arr) {
    console.log(prop + ': ' + arr[prop]);
}

// 上面的for迴圈會遍歷陣列中所有的屬性，包括加入proptotype中的屬性。
// 而array在javascript中是屬於物件，所以一定會將加入的prototype屬性印出來。
// 建議在跑陣列迴圈的時候，不要使用跑prop的方式去跑陣列中的每一個值。

// 陣列的迴圈應該相下面的方式跑回捐才對

console.log('-------正確的跑迴圈方式--------')
for (var i = 0; i < arr.length; i++){
    console.log(i + ': ' +arr[i]);
}
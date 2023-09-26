// 演算法：Pointer
// 題目：Average Pair


// 此方法一定要有一個sorted array , 沒有排序的無法使用。
const numberArr = [-11,0,1,2,3,9,14,17,21];
const avg = 1.5;

function averagePair(arr,avg){
let left = 0;
let right = arr.length - 1;
let result =[];
while(right > left){
    let temp_avg = (arr[right] + arr[left]) / 2;
    if(temp_avg > avg){
        right -- ;
    }else if (temp_avg < avg){
        left ++;
    }else if (temp_avg == avg){
        result.push([arr[right],arr[left]]);
        right --;
    }
}
console.log(result)
}
averagePair(numberArr,avg);
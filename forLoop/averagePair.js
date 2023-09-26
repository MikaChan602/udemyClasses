// Average Pair
// 時間複雜度 O（n^2)
// 此方法若改成Pointer 時間複雜度可降到 O(n)

const numberArr = [-11,0,1,2,3,9,14,17,21];
const avg = 1.5;

/** 
 * @param {Array} arr 
*/
function averagePair(arr,avg){
 let results =[];
//  let count = 0; // 驗證總次數是否正確。
 for (let i = 0 ; i< arr.length - 1 ; i++){
    for (let j = i + 1 ;j < arr.length; j++){
        // count++;
        const addAvg = (arr[i] + arr[j])/2
        if(addAvg == avg){
            let ans = arr[i] + ' and ' + arr[j];
            results.push([arr[i],arr[j]]);
        }
    }
 }
//  console.log(count)
console.log(results); 
}
averagePair(numberArr,avg)
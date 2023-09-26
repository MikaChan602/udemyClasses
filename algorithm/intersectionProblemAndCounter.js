/** Intersection Problem 求交集 */
// O(n^2)

const arr1 = [15,3,6,8,24,16];
const arr2 = [11,3,9,6,15,8];

function getIntersection(arr1,arr2){
    let result =[];
    for (let i = 0; i < arr1.length; i++){
        for(let j = 0; j<arr2.length; j++){
            if(arr1[i] == arr2[j]){
                result.push(arr2[j]);
            }
        }
    }
    return result;
}

let interResults = getIntersection(arr1,arr2);
console.log('雙迴圈解法',interResults)

/** Intersection Counter解法 */

function counter(arr1,arr2){
    let results=[];
    let newArr = arr1.concat(arr2);
    let counterObj = {};
    for(let i = 0; i < newArr.length; i++){
        if(!counterObj[newArr[i]]){
            counterObj[newArr[i]] = 1;
        }else{
            counterObj[newArr[i]]++;
        }
    
    }
    // 物件跑法
    for(let property in counterObj){
        if(counterObj[property] >= 2){
            results.push(property);
        }
    }
    return results;

}

let counterResults = counter(arr1,arr2);
console.log('counter',counterResults)
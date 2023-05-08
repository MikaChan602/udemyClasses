/** Coding Practice - Frequency Problem */  
// 判斷字串是否一樣，是否有一樣的字母總數，不包括順序一致。

function sameFrequency(str1,str2){
    let arr1 = str1.split("");
    let arr2 = str2.split("");
console.log(str1,arr1)
    if(arr1.length !== arr2.length){
        return false;
    }

    let counter1 = {};
    let counter2 = {};

    for (let i = 0; i < arr1.length; i++){
        if(counter1[arr1[i]]){
            counter1[arr1[i]]++;
        }else{
            counter1[arr1[i]]=1;
        }
    }

    for (let i = 0; i < arr2.length; i++){
        if(counter2[arr2[i]]){
            counter2[arr2[i]]++;
        }else{
            counter2[arr2[i]]=1;
        }
    }
    for ( let property in counter1){
        if(!counter2[property]){
            return false;
        }
        if(counter2[property] !== counter1[property]){
            return false;
        }
    }
    console.log(counter1,counter2)
    return true;
}

const aaa = sameFrequency('aabs','baa')
console.log(aaa)
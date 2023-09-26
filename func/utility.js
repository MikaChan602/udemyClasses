
const animal = ['cat','dog','cat']

// 組fqs參數
function fqsArrToString(arr){
    let newArr =[];
    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element);        
        }
    })
    const arrString = newArr.join('&');
return arrString
}

const fqs = fqsArrToString(animal);
console.log(fqs);

// 解fqs參數
function fqsStringToArr(str){
    const newStr = str.split('&');
    return newStr;
}

const fqsString = fqsStringToArr(fqs);
console.log(fqsString)

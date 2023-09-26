const stringValue = 'fildType=0=books%26keyword=0=林白%26condition=0=and%26fildType=1=publisherYear%26keyword=1=1994~%26condition=1=and%26';

function handleStringToObj(string) {
    let firstArr = string.split('&');
    let objectArr = [];
  
    console.log('第一切',firstArr)
    for (let i = 0; i < firstArr.length; i++) {
      let splitString = firstArr[i];
      const valueArr = splitString.split('=');
      console.log('after splits',valueArr)
  
  
      if (valueArr && valueArr.length > 0 && valueArr[0]) {
        const index = valueArr[1]; // array index
        const key = valueArr[0]; // object key
        let value = valueArr[2]; // object value
        if (valueArr.length == 3) {
          if (valueArr[1] == 'and') value = valueArr[1] + ' ' + valueArr[2];
          if (
            valueArr[1] == 'item' ||
            valueArr[1] == 'isbn' ||
            valueArr[1] == 'classification'
          ) {
            value = valueArr[1] + '_' + valueArr[2];
          }
        } else {
          value = valueArr[1];
        }
  
        if (!objectArr[index]) {
          objectArr[index] = {};
        }
        objectArr[index][key] = value;
        console.log('object', objectArr)
      }
      if (objectArr.length < 3) {
        if (objectArr.length == 1) {
          objectArr.push({
            fildType: 'books',
            keyword: '',
            condition: 'and',
          });
          objectArr.push({
            fildType: 'books',
            keyword: '',
            condition: 'and',
          });
        } else if (objectArr.length == 2) {
          objectArr.push({
            fildType: 'books',
            keyword: '',
            condition: 'and',
          });
        }
      }
    }
    console.log('+u',objectArr)
    return objectArr;
  }


  handleStringToObj(stringValue);
  
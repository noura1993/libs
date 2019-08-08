const _ = {
    clamp(number, lowerBound, upperBound) {
      let lowerNum = Math.max(number, lowerBound);
      return  Math.min(lowerNum, upperBound); 
    },
  
    inRange(number, startValue, endValue) {
      if (endValue === undefined) {
        endValue = startValue;
        startValue = 0;
      }
      
      if (startValue > endValue) {
        let temp = startValue;
        startValue = endValue;
        endValue = temp;
      }
      
      if (number < startValue) {
        return false;
      } else if (number >= endValue) {
        return false;
      } else{
        return true;
      } 
    },
    
    words(str) {
      let words = str.split(' ');
      return words;
    },
    
    pad(str, length) {
       if (length <= str.length) {
         return str;
       } 
      let startPaddingLength = Math.floor((length - str.length)/2);
      let endPaddingLength = length - str.length - startPaddingLength;
      startPaddingLength = ' '.repeat(startPaddingLength);
      endPaddingLength = ' '.repeat(endPaddingLength);
      return startPaddingLength + str + endPaddingLength;
    },
    
    has(obj, key) {
    return  obj.hasOwnProperty(key)
    },
    
    invert(obj) {
      let invertedObject = {};
  
     const entries = Object.entries(obj);
     for (let i = 0; i < entries.length; i++) {
          invertedObject[entries[i][1]] = entries[i][0];
     }
     return invertedObject;   
    },
    
    findKey(obj, predicate) {
     const entries = Object.entries(obj);
      for (let i = 0; i < entries.length; i++) {
         let value = predicate(entries[i][1]);
         if (value == true) {
             return entries[i][0];
         } 
      }
      return undefined;
    },
    
    drop(arr, num) {
      if (num === undefined) {
        num = 1;
      }
      return arr.slice(num);
    },
    
    dropWhile(arr, predicate) {
       for (let i = 0; i < arr.length; i++) {
         if (!predicate(arr[i], i)){
           return arr.slice(i);
         } 
      }
    },
    
    chunk(arr, size) {
      if ( size === undefined) {
          size = 1;
      }
      let nestedArr = [];
      for (let i = 0; i < arr.length; i += size) {
          nestedArr.push(arr.slice(i, size +i));
      }
      return nestedArr;
    }
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;
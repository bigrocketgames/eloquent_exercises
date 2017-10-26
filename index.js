// Chapter 2 exercises

hash_triangle = () => {
  let string = "";
  for(let i = 0; i < 7; i++) {
    string += "#";
    console.log(string);
  }
}

hash_triangle();

fizzbuzz = () => {
  for(let i = 1; i<= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      console.log("FizzBuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz")
    } else if (i % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(i);
    }
  } 
}

fizzbuzz();

chessBoardGrid = (size) => {
  var board = "";
  for (i = 1; i <= size; i++) {
    for (j = 1; j <= size; j++) {
      if (i % 2 === 0) {
        if (j % 2 === 0) {
          if (j === size) {
            board += " \n";
          } else {
            board += " ";
          }
        } else {
          if (j === size) {
            board += "#\n";
          } else {
            board += "#";
          }
        }
      } else {
        if (j % 2 === 0) {
          if (j === size) {
            board += "#\n";
          } else {
            board += "#";
          }
        } else {
          if (j === size) {
            board += " \n";
          } else {
            board += " ";
          }
        }
      }
    }
  }
  console.log(board);
}

chessBoardGrid(8);


// Chapter 3 exercises

min = (a, b) => {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

console.log(min(0, 10));
console.log(min(0, -10));



isEven = (n) => {
  if (n === 0) {
    return true;
  } else if (n === -1 || n === 1) {
    return false;
  } else {
    if (n < 0) {
      return isEven(n + 2);
    } else {
      return isEven(n - 2);
    }
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-100));
console.log(isEven(-5));



countChar = (word, char) => {
  count = 0;
  for (i = 0; i < word.length; i++) {
    if (word.charAt(i) === char) {
      count++;
    }
  }
  return count;
}

countBs = (word) => {
  return count = countChar(word, "B");
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));


// Chapter 4 Exercises

range = (start, end, step = 1) => {
  newArray = [];
  if (step < 0) {
    for (i = start; i >= end; i += step) {
      newArray.push(i);
    }
  } else {
    for (i = start; i <= end; i += step) {
      newArray.push(i);
    }
  }
  return newArray;
}
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));

sum = (numArray) => {
  total = 0;
  for ( i = 0; i < numArray.length; i++) {
    total += numArray[i];
  }
  return total;
}

console.log(sum(range(1, 10)));



reverseArray = (array) => {
  newArray = [];
  while(array.length > 0) {
    newArray.push(array.pop());
  }
  return newArray;
}

testArray = [1, 2, 3, 4];
console.log(reverseArray(testArray));

reverseArrayInPlace = (array) => {
  arrayValue = null;
  for (i = 0; i <= Math.floor(array.length / 2); i++){
    arrayValue = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = arrayValue;
  }
  return array;
}

testArray1 = [2, 3, 4, 5, 6];
console.log(reverseArrayInPlace(testArray1));
console.log(testArray1);

prepend = (element, list) => {
  return list = {value: element, rest: list};
}

arrayToList = (array) => {
  list = null;
  while (array.length > 0) {
    list = prepend(array.pop(), list);
  }
  return list;
}

console.log(arrayToList([10, 20]));

listToArray = (list) => {
  array = [];
  for (node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

console.log(listToArray(arrayToList([10, 20, 30])));

nth = (list, index) => {
  count = 0;
  for (node = list; node; node = node.rest) {
    if (count === index) {
      return node.value;
    } else if (node.rest === null) {
      return undefined;
    } else {
      count ++;
    }
  }
}

console.log(nth(arrayToList([10, 20, 30]), 1));

deepEqual = (value1, value2) => {
  if ((typeof value1 == "object" && value1 != null) && (typeof value2 == "object" && value2 != null)) {
    for (var event in value1) {
      if ((typeof value1[event] === "object" && value1[event] != null) && (typeof value2[event] === "object" && value2[event] != null)) {
        deepEqual(value1[event], value2[event]);
      } else if (value1[event] !== value2[event]) {
        return false;
      }
    }
  } else {
    if (value1 !== value2) {
      return false;
    }
  }
  return true;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));



// Chapter 5 exercises


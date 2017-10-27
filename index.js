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

flatten = (arrays) => {
  newArray = arrays.reduce((a, b) => {
    return a.concat(b);
  }, []);
  return newArray;
}

var arrays = [[1, 2, 3], [4, 5], [6]];
console.log(flatten(arrays));


// Mother-Child Age Difference

// average = (array) => {
//   function plus(a, b) { return a + b; }
//   return array.reduce(plus) / array.length;
// }

// var byName = {};
// ancestry.forEach(function(person) {
//   byName[person.name] = person;
// });

// ageDiff = () => {

// }





//  Every And Then Some

every = (array, matcher) => {
  for (i = 0; i < array.length; i++) {
    if (!matcher(array[i])) {
      return false;
    }
  }
  return true;
}

some = (array, matcher) => {
  for (i = 0; i < array.length; i++) {
    if (matcher(array[i])) {
      return true;
    }
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));


const ANCESTRY_FILE = [
  {"name": "Carolus Haverbeke", "sex": "m", "born": 1832, "died": 1905, "father": "Carel Haverbeke", "mother": "Maria van Brussel"},
  {"name": "Emma de Milliano", "sex": "f", "born": 1876, "died": 1956, "father": "Petrus de Milliano", "mother": "Sophia van Damme"},
  {"name": "Maria de Rycke", "sex": "f", "born": 1683, "died": 1724, "father": "Frederik de Rycke", "mother": "Laurentia van Vlaenderen"},
  {"name": "Jan van Brussel", "sex": "m", "born": 1714, "died": 1748, "father": "Jacobus van Brussel", "mother": "Joanna van Rooten"},
  {"name": "Philibert Haverbeke", "sex": "m", "born": 1907, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Jan Frans van Brussel", "sex": "m", "born": 1761, "died": 1833, "father": "Jacobus Bernardus van Brussel", "mother":null},
  {"name": "Pauwels van Haverbeke", "sex": "m", "born": 1535, "died": 1582, "father": "N. van Haverbeke", "mother":null},
  {"name": "Clara Aernoudts", "sex": "f", "born": 1918, "died": 2012, "father": "Henry Aernoudts", "mother": "Sidonie Coene"},
  {"name": "Emile Haverbeke", "sex": "m", "born": 1877, "died": 1968, "father": "Carolus Haverbeke", "mother": "Maria Sturm"},
  {"name": "Lieven de Causmaecker", "sex": "m", "born": 1696, "died": 1724, "father": "Carel de Causmaecker", "mother": "Joanna Claes"},
  {"name": "Pieter Haverbeke", "sex": "m", "born": 1602, "died": 1642, "father": "Lieven van Haverbeke", "mother":null},
  {"name": "Livina Haverbeke", "sex": "f", "born": 1692, "died": 1743, "father": "Daniel Haverbeke", "mother": "Joanna de Pape"},
  {"name": "Pieter Bernard Haverbeke", "sex": "m", "born": 1695, "died": 1762, "father": "Willem Haverbeke", "mother": "Petronella Wauters"},
  {"name": "Lieven van Haverbeke", "sex": "m", "born": 1570, "died": 1636, "father": "Pauwels van Haverbeke", "mother": "Lievijne Jans"},
  {"name": "Joanna de Causmaecker", "sex": "f", "born": 1762, "died": 1807, "father": "Bernardus de Causmaecker", "mother":null},
  {"name": "Willem Haverbeke", "sex": "m", "born": 1668, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Pieter Antone Haverbeke", "sex": "m", "born": 1753, "died": 1798, "father": "Jan Francies Haverbeke", "mother": "Petronella de Decker"},
  {"name": "Maria van Brussel", "sex": "f", "born": 1801, "died": 1834, "father": "Jan Frans van Brussel", "mother": "Joanna de Causmaecker"},
  {"name": "Angela Haverbeke", "sex": "f", "born": 1728, "died": 1734, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Elisabeth Haverbeke", "sex": "f", "born": 1711, "died": 1754, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Lievijne Jans", "sex": "f", "born": 1542, "died": 1582, "father":null, "mother":null},
  {"name": "Bernardus de Causmaecker", "sex": "m", "born": 1721, "died": 1789, "father": "Lieven de Causmaecker", "mother": "Livina Haverbeke"},
  {"name": "Jacoba Lammens", "sex": "f", "born": 1699, "died": 1740, "father": "Lieven Lammens", "mother": "Livina de Vrieze"},
  {"name": "Pieter de Decker", "sex": "m", "born": 1705, "died": 1780, "father": "Joos de Decker", "mother": "Petronella van de Steene"},
  {"name": "Joanna de Pape", "sex": "f", "born": 1654, "died": 1723, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Daniel Haverbeke", "sex": "m", "born": 1652, "died": 1723, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Lieven Haverbeke", "sex": "m", "born": 1631, "died": 1676, "father": "Pieter Haverbeke", "mother": "Anna van Hecke"},
  {"name": "Martina de Pape", "sex": "f", "born": 1666, "died": 1727, "father": "Vincent de Pape", "mother": "Petronella Wauters"},
  {"name": "Jan Francies Haverbeke", "sex": "m", "born": 1725, "died": 1779, "father": "Pieter Bernard Haverbeke", "mother": "Livina de Vrieze"},
  {"name": "Maria Haverbeke", "sex": "m", "born": 1905, "died": 1997, "father": "Emile Haverbeke", "mother": "Emma de Milliano"},
  {"name": "Petronella de Decker", "sex": "f", "born": 1731, "died": 1781, "father": "Pieter de Decker", "mother": "Livina Haverbeke"},
  {"name": "Livina Sierens", "sex": "f", "born": 1761, "died": 1826, "father": "Jan Sierens", "mother": "Maria van Waes"},
  {"name": "Laurentia Haverbeke", "sex": "f", "born": 1710, "died": 1786, "father": "Jan Haverbeke", "mother": "Maria de Rycke"},
  {"name": "Carel Haverbeke", "sex": "m", "born": 1796, "died": 1837, "father": "Pieter Antone Haverbeke", "mother": "Livina Sierens"},
  {"name": "Elisabeth Hercke", "sex": "f", "born": 1632, "died": 1674, "father": "Willem Hercke", "mother": "Margriet de Brabander"},
  {"name": "Jan Haverbeke", "sex": "m", "born": 1671, "died": 1731, "father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"},
  {"name": "Anna van Hecke", "sex": "f", "born": 1607, "died": 1670, "father": "Paschasius van Hecke", "mother": "Martijntken Beelaert"},
  {"name": "Maria Sturm", "sex": "f", "born": 1835, "died": 1917, "father": "Charles Sturm", "mother": "Seraphina Spelier"},
  {"name": "Jacobus Bernardus van Brussel", "sex": "m", "born": 1736, "died": 1809, "father": "Jan van Brussel", "mother": "Elisabeth Haverbeke"}
]
// const ancestry = JSON.parse(ANCESTRY_FILE);
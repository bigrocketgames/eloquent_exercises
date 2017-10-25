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
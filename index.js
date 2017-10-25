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
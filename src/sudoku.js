class Sudoku {
  constructor() {
    this.board = [
      [6,3,9,5,7,4,1,8,2],
      [5,4,1,8,2,9,3,7,6],
      [7,8,2,6,1,3,9,5,4],
      [1,9,8,4,6,7,5,2,3],
      [3,6,5,9,8,2,4,1,7],
      [4,2,7,1,3,5,8,6,9],
      [9,5,6,7,4,8,2,3,1],
      [8,1,3,2,9,6,7,4,5],
      [2,7,4,3,5,1,6,9,8]
    ];
  }

  horizontalCheck(){
    let i = 0;
    for (var j = 0; j < this.board[i].length; j++) {
      this.board[i][j];
      for (var k = 0; k < this.board[i].length; k++) {
        this.board[i][k];
        if (j != k) {
          if (this.board[i][j] == this.board[i][k]) {
            return false
          }
          else {
            i++;
          }
        }
      }
    }
  }


    // if each value of a single array is {1: 1-9, 2:unique}
    //   return true


  // verticalCheck(){
  //   if a single element of each array is {1: 1-9, 2:unique}
  //     return true
  // }


}

export {Sudoku}


// board[0] = [6,3,9,5,7,4,1,8,2]
// board[0][0] = 6
//
// for (var i = 0; i <= 2; i++) {
//   let arrayCheck = [];
//
// }

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
    for (var j = 0; j <= 8; j++) {
      for (var k = 0; k <= 8; k++) {
        if (j != k) {
          if (this.board[i][j] == this.board[i][k]) {
            return false;
          }
        }
      }
      i++;
    }
    return true;
  }

  verticalCheck(){
    let i = 0; //array element being checked against
    for (var j = 0; j <= 8; j++) {
      for (var k = 0; k <= 8; k++) {
        if(j != k){
          if (this.board[j][i] == this.board[k][i]) {
            return false;
          }
        }
      } //j = row
      i++;
    }
    return true;
  }

  checkSection(){
    let i = 0;
    let j = 0;
    let k = 0;
    let l = 0;
    let sectionArray = [];
    let totalArray = [];

    for (let i = i; i < 3; i++) {
      for (let j = j; j < 3; j++) {
        for (let k = k; k < 3; k++) {
          for (let l = l; l < 3; l++) {
            sectionArray.push(this.board[k][l]);
          } // l
        }
        totalArray.push(sectionArray);
        sectionArray = []; //k
        a += 3;
      } //j
      a = 0;
      b += 3;
      debugger;
    } //i
    for (let m = 0; m <=8; m++) {
      for (let n = 0; n <= 8; n++) {
        for (let o = 0; o <= 8; o++) {
          if (n != o) {
            if (totalArray[m][n] == totalArray[m][o]) {
              return false;
            }
          }
        }
      }
    }
    return true;
  }
}

export {Sudoku};

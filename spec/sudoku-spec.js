import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function(){

  it('should test if there is a board', function(){
    let newBoard = new Sudoku();
    expect(newBoard.board).toEqual(
      [[6,3,9,5,7,4,1,8,2],
      [5,4,1,8,2,9,3,7,6],
      [7,8,2,6,1,3,9,5,4],
      [1,9,8,4,6,7,5,2,3],
      [3,6,5,9,8,2,4,1,7],
      [4,2,7,1,3,5,8,6,9],
      [9,5,6,7,4,8,2,3,1],
      [8,1,3,2,9,6,7,4,5],
      [2,7,4,3,5,1,6,9,8]
    ]);
  });

  it('should test there are matches in the same row', function(){
    let newBoard = new Sudoku();
    expect(newBoard.horizontalCheck()).toEqual(true);
  });

  it('should test there are matches in the same column', function(){
    let newBoard = new Sudoku();
    expect(newBoard.verticalCheck()).toEqual(true);
  });

  it('should return true if the first box has no duplicates', function(){
    let newBoard = new Sudoku();
    expect(newBoard.checkSection()).toEqual(true);
  });
});

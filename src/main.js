import { Sudoku } from './sudoku'
import './styles.css';

$(document).ready(function(){
  const newBoard = new Sudoku;
  if (newBoard.horizontalCheck()) {
    // if (board.verticalCheck()) {
    //   console.log("Vertical is good")
    // }
  }
});

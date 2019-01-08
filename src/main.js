import { Sudoku } from './sudoku'
import './styles.css';

$(document).ready(function(){
  const board = new Sudoku;

  if (board.horizontalCheck()) {
    console.log("Horizontal is good")
    if (board.verticalCheck()) {
      console.log("Vertical is good")
    }
  }
});

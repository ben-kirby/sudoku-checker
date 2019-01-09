import { Sudoku } from './sudoku';
import './styles.css';

$(document).ready(function(){
  const newBoard = new Sudoku;
  newBoard.horizontalCheck();
  newBoard.verticalCheck();
  newBoard.checkSection();
});

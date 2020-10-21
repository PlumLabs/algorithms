// Just another sudoku validator.
// To run this take a look on the rust homepage. https://www.rust-lang.org/learn/get-started

// To validate a sudoku board we must check 3 steps:
//   - If the rows contain values 1-9, without repetition.
//   - If the columns contain values 1-9, without repetition.
//   - If each of the 9 sub-squares contains values 1-9, without repetition.
//
// If they do the Sudoku board is valid; otherwise, it is invalid.

let board = vec![]

fn verifyRow(board: Vec<i32, i32>, row: i32) -> bool {
  board[row].unique()
}

fn validateSudoku() -> bool {

  verifyRow
}

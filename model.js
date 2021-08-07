// Model
//

export class Model {
  constructor() {
    this.board = [[], [], [], [], [], [], []];
    this.consecutiveSlots = 0;
    this.playersTurn = null;
    this.isPlayer2Human = null;
    this.lastColumnSelected = null;
    this.lastRowSelected = null;
    this.winner = null;
    this.randomlySelectedColumn = null;
  }

  // ---------------------
  // --------------------- RESET DATA ------------------------------------------
  // ---------------------
  // resets data in the constructor
  // when the game is over
  //
  //
  resetData() {
    this.board = [[], [], [], [], [], [], []];
    this.consecutiveSlots = 0;
    this.playersTurn = null;
    this.isPlayer2Human = null;
    this.lastColumnSelected = null;
    this.lastRowSelected = null;
    this.winner = null;
  }

  // ---------------------
  // --------------------- CREATE BOARD ------------------------------------------
  // ---------------------
  // create null slots for each column
  //
  //
  create_board() {
    for (let column of this.board) {
      //
      const slotsInColumn = [null, null, null, null, null, null];
      slotsInColumn.forEach((whoOwnsSlot) => column.push(whoOwnsSlot));
    }
  }

  // ---------------------
  // --------------------- SELECT RANDOM COLUMN FOR CPU ------------------------------------------
  // ---------------------
  // select a random column
  // NOTE: doesn't change anything in array - see turn_player
  //
  //
  playersMove_randomlySelectColumn() {
    this.randomlySelectedColumn = Math.floor(Math.random() * this.board.length);
  }

  // ---------------------
  // --------------------- UPDATE THE BOARD WITH SLOT ------------------------------------------
  // ---------------------
  // select a column and then go to
  // lowest row in the column
  // technically it's the highest row in the array
  //
  //
  playersMove_updateBoardWithSlot(columnSelected) {
    for (let slot = this.board[columnSelected].length - 1; slot >= 0; slot--) {
      if (this.board[columnSelected][slot] == null) {
        this.board[columnSelected][slot] = this.playersTurn;
        this.lastColumnSelected = columnSelected;
        this.lastRowSelected = slot;
        break;
      }
    }
    console.log(
      `last col ${this.lastColumnSelected}, row ${this.lastRowSelected}`
    );
  }

  // ---------------------
  // --------------------- CHANGE PLAYERS TURN ------------------------------------------
  // ---------------------
  // change players turn to the opposite
  // because it's a true/false value
  //
  //
  changeData_playersTurn() {
    this.consecutiveSlots = 0;
    this.playersTurn = !this.playersTurn;
  }

  // ---------------------
  // --------------------- CHECK CONSECUTIVE SLOTS ------------------------------------------
  // ---------------------
  // check if consecutive slots == 4
  //
  //
  checkData_ConsecutiveSlots(slotsNumber) {
    if (slotsNumber == 4) {
      this.winner = this.playersTurn;
    }
  }

  // ---------------------
  // --------------------- CHECK VERTICAL ------------------------------------------
  // ---------------------
  // check if consecutive slots in vertical direction
  //
  //
  checkData_Vertical() {
    for (
      let individualSlot = this.board[this.lastColumnSelected].length - 1;
      individualSlot >= 0;
      individualSlot--
    ) {
      if (
        this.board[this.lastColumnSelected][individualSlot] !== this.playersTurn
      ) {
        this.consecutiveSlots = 0;
      } else {
        this.consecutiveSlots = this.consecutiveSlots + 1;
        this.checkData_ConsecutiveSlots(this.consecutiveSlots);
      }
    }
  }

  // ---------------------
  // --------------------- CHECK HORIZONTAL ------------------------------------------
  // ---------------------
  // check if consecutive slots in horizontal direction
  //
  //
  checkData_Horizontal() {
    for (let column in this.board) {
      if (this.board[column][this.lastRowSelected] !== this.playersTurn) {
        this.consecutiveSlots = 0;
      } else {
        this.consecutiveSlots = this.consecutiveSlots + 1;
        this.checkData_ConsecutiveSlots(this.consecutiveSlots);
      }
    }
  }

  // ---------------------
  // --------------------- CHECK INCLINE ------------------------------------------
  // ---------------------
  // check if consecutive slots in incline direction
  //
  //
  checkData_Incline() {
    // --------------------- USING STARTING POSTION - INCLINE
    // using starting position
    // loop through to see if consecutive slots
    // in incline direction
    //
    //
    const useStartingPosition_InclineDiagonal = (
      ColToStartAt,
      RowToStartAt
    ) => {
      for (
        let column = ColToStartAt, row = RowToStartAt;
        column < this.board.length;
        column++, row--
      ) {
        if (this.board[column][row] !== this.playersTurn) {
          this.consecutiveSlots = 0;
        } else {
          this.consecutiveSlots = this.consecutiveSlots + 1;
          this.checkData_ConsecutiveSlots(this.consecutiveSlots);
        }
      }
    };

    // --------------------- UNDERSTAND POSITON - INCLINE
    // find starting postion to start loop
    // by using this.lastColumnSelected and this.lastRowSelected
    //
    //
    const understandPosition_InclineDiagonal = () => {
      if (this.lastRowSelected == 5 || this.lastColumnSelected == 0) {
        useStartingPosition_InclineDiagonal(
          this.lastColumnSelected,
          this.lastRowSelected
        );
      } else {
        for (
          let lastColumn = this.lastColumnSelected,
            lastRow = this.lastRowSelected;
          lastColumn > 0;

        ) {
          lastColumn--;
          lastRow++;
          if (
            this.board[lastColumn][lastRow] !== this.playersTurn ||
            lastColumn == 0 ||
            lastRow == 0
          ) {
            useStartingPosition_InclineDiagonal(lastColumn + 1, lastRow - 1);
            break;
          }
        }
      }
    };
    understandPosition_InclineDiagonal();
  }

  // ---------------------
  // --------------------- CHECK DECLINE ------------------------------------------
  // ---------------------
  // check if consecutive slots in decline direction
  //
  //
  checkData_Decline() {
    console.log(this.consecutiveSlots);
    // --------------------- USING STARTING POSTION - DECLINE
    // using starting position
    // loop through to see if consecutive slots
    // in decline direction
    //
    //
    const useStartingPosition_DeclineDiagonal = (
      ColToStartAt,
      RowToStartAt
    ) => {
      for (
        let column = ColToStartAt, row = RowToStartAt;
        column < this.board.length, row < this.board[0].length;
        column++, row++
      ) {
        if (
          this.board[column] == undefined ||
          this.board[column][row] !== this.playersTurn
        ) {
          this.consecutiveSlots = 0;
        } else {
          this.consecutiveSlots = this.consecutiveSlots + 1;
          this.checkData_ConsecutiveSlots(this.consecutiveSlots);
        }
      }
    };

    // --------------------- UNDERSTAND POSITON - DECLINE
    // find starting postion to start loop
    // by using this.lastColumnSelected and this.lastRowSelected
    //
    //
    const understandPosition_DeclineDiagonal = () => {
      if (
        this.lastRowSelected == 0 ||
        this.lastRowSelected == 5 ||
        this.lastColumnSelected == 0 ||
        this.lastColumnSelected == 6
      ) {
        useStartingPosition_DeclineDiagonal(
          this.lastColumnSelected,
          this.lastRowSelected
        );
      } else {
        for (
          let lastColumn = this.lastColumnSelected,
            lastRow = this.lastRowSelected;
          lastColumn > 0;

        ) {
          lastColumn--;
          lastRow--;
          if (
            this.board[lastColumn] == undefined ||
            this.playersTurn !== this.board[lastColumn][lastRow]
          ) {
            useStartingPosition_DeclineDiagonal(lastColumn + 1, lastRow + 1);
            break;
          }
        }
      }
    };
    understandPosition_DeclineDiagonal();
  }
}

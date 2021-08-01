// Model
//

export class Model {
  constructor() {
    this.board = [[], [], [], [], [], [], []];
    this.playersTurn = null;
    this.isPlayer2Human = null;
    this.lastColumnSelected = null;
    this.lastRowSelected = null;
    this.numberOfConsecutiveSlots = 0;
  }

  create_board() {
    for (let column of this.board) {
      //
      const slotsInColumn = [null, null, null, null, null, null];
      slotsInColumn.forEach((whoOwnsSlot) => column.push(whoOwnsSlot));
    }
  }

  changeData_playersTurn() {
    this.playersTurn = !this.playersTurn;
  }

  resetData_ConsecutiveSlots() {
    this.numberOfConsecutiveSlots = 0;
  }

  resetData_board() {
    this.board = [[], [], [], [], [], [], []];
  }

  resetData_playersTurn() {
    this.playersTurn = null;
  }

  //
  //
  // These are the checks for connect 4
  //
  checkData_Vertical() {
    console.log(`Column clicked: ${this.lastColumnSelected}`);
    console.log(`Row clicked: ${this.lastRowSelected}`);
    console.log("-----");
    console.log(this.board[this.lastColumnSelected]);
    ////
    for (
      let individualSlot = this.board[this.lastColumnSelected].length - 1;
      individualSlot >= 0;
      individualSlot--
    ) {
      if (
        this.board[this.lastColumnSelected][individualSlot] == this.playersTurn
      ) {
        // console.log(
        //   `Player ${this.playersTurn} owns ${
        //     this.board[this.lastColumnSelected][individualSlot]
        //   }`
        // );
        // //
        this.numberOfConsecutiveSlots + 1;
        console.log(this.numberOfConsecutiveSlots);
      }
    }
  }

  checkData_Horizontal_Right() {}

  checkData_Horizontal_Left() {}

  checkData_RunAllChecks() {
    //
    //
    // this.checkData_Vertical();
    // this.numberOfConsecutiveSlots = 0;
  }
}

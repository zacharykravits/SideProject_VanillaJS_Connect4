//
// ----------------------- controller
//
//// CLASS:  Controller_game
// METHOD: selectMode
// change isPlayer2Human to true if selected player 2 mode
// change isPlayer2Human to false if selected computer mode
//
// METHOD: gameWinner
// run createView_Winner with the winners passed in
//
// METHOD: update_board
// update the view
// -- tells model to update the board in data
// -- tells model to run checkData_numberOfConsecutiveSlots with the current player passed in
// -- if
// -- -- numberOfConsectiveSlots >= 4 then run gameWinner
// -- else
// -- -- tells view to rip out section
// -- -- tells view to generate the updated board passing in data
// -- -- if isPlayer2Human == false
// -- -- -- run computersTurn
//
// METHOD: update_player
// runs changeData_playersTurn
//
// METHOD: computersTurn
// computer loops to see if player 1 could win vertically or horizontally if so it'll block it

// 4 in a row logic
// METHOD: runChecks
// loops through the different check methods in Data_board class

// ----------------------- model ----------------------- //
//
//// CLASS:  Data_board
// CONSTRUCTOR
// let board = [ 1: [...], 2: [...], 3: [...], etc]
// -- the slots will need to have 3 states: null, true, false
// let isPlayer2Human = null;
// -- this is set at the beginning of the game in Controller_game class
// -- if isPlayer2Human == false then player2 is a CPU
// let lastSlotFilled = null;
// --
// let numberOfConsectiveSlots = 0
// -- if 4 or more then player with
// let playersTurn == true
// -- true means player1sTurn, false is player2sTurn or computers turn
// let lastColumnSelected = null;
// let lastRowSelected = null;
//
// METHOD: checkData_Vertical
// numberOfConsectiveSlots + 1;
// loop through the pieces below in the column
// -- if board.lastRowSelected - (numberOfConsectiveSlots) == board.lastColumnSelected.lastRowSelected
// -- -- then numberOfConsectiveSlots++
// -- else
// -- -- numberOfConsectiveSlots = 0;
//
// METHOD: checkData_Horizontal_Right
// numberOfConsectiveSlots + 1;
// loop through the pieces below in the column
// -- if board.(lastColumnSelected + x)[lastRowSelected] = board.lastColumnSelected[lastRowSelected]
// -- -- then numberOfConsectiveSlots++
// -- else
// -- -- numberOfConsectiveSlots = 0;
//
// METHOD: checkData_Horizontal_Left
// numberOfConsectiveSlots + 1;
// loop through the pieces below in the column
// -- if board.(lastColumnSelected - x)[lastRowSelected] = board.lastColumnSelected[lastRowSelected]
// -- -- then numberOfConsectiveSlots++
// -- else
// -- -- numberOfConsectiveSlots = 0;
//
// METHOD: checkData_Diagonal_Right_Up
// numberOfConsectiveSlots + 1;
// -- if board.(lastColumnSelected - x)[lastRowSelected + 1]
//
// METHOD: checkData_Diagonal_Right_Down
// numberOfConsectiveSlots + 1;
// --
//
// METHOD: checkData_Diagonal_Left_Down
// numberOfConsectiveSlots + 1;
// --
//
// METHOD: checkData_Diagonal_Left_Up
// numberOfConsectiveSlots + 1;
// --
//
// METHOD: checkData_numberOfConsecutiveSlots
// count if the current players numberOfConsecutiveSlots >= 4
//
// METHOD: changeData_playersTurn
// change players turn with playersTurn == !playersTurn
//
// METHOD: changeData_slotOwnership
// loop through to find next "noOwnership" and change to current players ownership
//
// METHOD: resetData_board
// loop through board multi-dem array to set all slots to "noOwnership"
//
// METHOD: resetData_playersTurn
// set playersTurn = true

// you're going to have the basic logic to check if there is a connect4, then check if there is anything on the other side
// of the last slotClicked and continue to count.
// then reset if not connect4

// ----------------------- view ----------------------- //
//
//// CLASS:  View_game
// METHOD: createView_start(section, header, button1Info, button2Info)
// call header and two buttons with info passed in
//
// METHOD: createView_header(sectionForTextHeaders, playerHeader, player2Header, sectionForBoard)
// call in the headers and columns with info passed in
//
// METHOD: ripViewOut(whatViewToRipOut)
// pass in ID of view to be removed
//
// METHOD: createView_board(sectionForBoard, boardArray)
// pass in ID of view to be displayed
// pass in array to determine slot display
// -- a column is full then don't let it be clickable
//
// METHOD: createView_winner(winner)
// pass in winning player and display in modal

// more methods:
// scores
//

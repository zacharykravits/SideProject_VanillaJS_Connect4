// Controller
//

import { View } from "./view.js";
import { Model } from "./model.js";

export class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  // ---------------------
  // --------------------- START THE GAME ------------------------------------------
  // ---------------------
  // enables 2 player and cpu mode
  //
  //
  game_start() {
    view.view_GameStart();
    const enablePlayer2 = document.getElementById("enable-player2--button");
    enablePlayer2.addEventListener("click", () => {
      model.isPlayer2Human = true;
      model.create_board();
      model.playersTurn = true;
      view.view_Removal("view--starting-screen");
      view.view_GamePlay(model.isPlayer2Human, model.board);
      this.game_playersTurnToMakeMove();
    });
    const enablePlayerCPU = document.getElementById("enable-cpu--button");
    enablePlayerCPU.addEventListener("click", () => {
      model.isPlayer2Human = false;
      model.create_board();
      model.playersTurn = false;
      view.view_Removal("view--starting-screen");
      view.view_GamePlay(model.isPlayer2Human, model.board);
      this.game_playersTurnToMakeMove();
    });
  }

  // ---------------------
  // --------------------- RESTART THE GAME ------------------------------------------
  // ---------------------
  // restart the game when
  // the game is over
  //
  //
  game_restart() {
    console.log("WINNER WINNER CHICKEN DINNER for...");

    setTimeout(function () {
      view.view_Removal("player1-header");
      view.view_Removal("vs-header");
      view.view_Removal("player2-header");
      view.view_Removal("board");
      view.view_GameShowWinner(model.isPlayer2Human, model.winner, model.board);
    }, 200);

    setTimeout(function () {
      view.view_GameShowResetButton();
      const resetGameButton = document.getElementById("game-reset-button");
      resetGameButton.addEventListener("click", () => {
        model.resetData();
        view.view_Removal("view--play-screen");
        controller.game_start();
      });
    }, 500);
  }

  // ---------------------
  // --------------------- GO THROUGH CHECKERS ------------------------------------------
  // ---------------------
  // loop through the checker methods
  //
  //
  game_goThroughAllCheckers() {
    const checkers = [
      model.checkData_Vertical(),
      model.checkData_Horizontal(),
      model.checkData_Incline(),
      model.checkData_Decline(),
    ];
    for (let checker in checkers) {
      checkers[checker];
      if (model.winner == true || model.winner == false) {
        break;
      } else {
        model.consecutiveSlots = 0;
      }
    }
  }

  // ---------------------
  // --------------------- FIGURE OUT COLUMN NUMBER ------------------------------------------
  // ---------------------
  // figure out column number from string of button id
  //
  //
  game_figureOutColumnNumber(buttonId) {
    return parseInt(buttonId[buttonId.length - 1]);
  }

  // ---------------------
  // --------------------- PLAY GAME ------------------------------------------
  // ---------------------
  // if cpu then randomly selects a slot
  // if player then makes columns clickable
  //
  //
  game_playersTurnToMakeMove() {
    if (model.playersTurn == false && model.isPlayer2Human == false) {
      console.log("COMPUTERS TURN ----------------------");
      model.playersMove_randomlySelectColumn();
      model.playersMove_updateBoardWithSlot(model.randomlySelectedColumn);
      this.game_goThroughAllCheckers();
      console.log(`consecutive slots: ${model.consecutiveSlots}`);
      view.view_Removal("view--play-screen");
      if (model.winner !== null) {
        controller.game_restart();
      }
      view.view_GamePlay(model.isPlayer2Human, model.board);
      model.changeData_playersTurn();
      this.game_playersTurnToMakeMove();
    } else {
      console.log("PLAYER 1S TURN ----------------------");
      document.querySelectorAll(".column").forEach((button) => {
        button.addEventListener("click", () => {
          model.playersMove_updateBoardWithSlot(
            this.game_figureOutColumnNumber(button.id)
          );
          this.game_goThroughAllCheckers();
          console.log(`consecutive slots: ${model.consecutiveSlots}`);
          view.view_Removal("view--play-screen");
          if (model.winner !== null) {
            controller.game_restart();
          }
          view.view_GamePlay(model.isPlayer2Human, model.board);
          model.changeData_playersTurn();
          this.game_playersTurnToMakeMove();
        });
      });
    }
    //
    //
    //
  }
}

// ---------------------
// --------------------- INIT CLASSES ------------------------------------------
// ---------------------
// init view, model, and controller classes
//
//
let view = new View();
let model = new Model();
let controller = new Controller();
controller.game_start(view);

// Controller
//

import { View } from "./view.js";
import { Model } from "./model.js";

// Section component
//
export class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }
  //
  //
  // METHOD: game_Start
  // Will launch the start screen
  // Allow play to select game mode
  game_Start() {
    //
    // Call the Start View
    view.view_GameStart();
    //
    // Determines the game mode
    // switches the view to allow game mode
    //
    const enablePlayer2 = document.getElementById("enable-player2--button");
    enablePlayer2.addEventListener("click", () => {
      // console.log("ENABLED PLAYER 2 MODE");
      model.isPlayer2Human = true;
      model.create_board();
      model.playersTurn = true;
      view.view_Removal("view--starting-screen");
      view.view_GamePlay(model.isPlayer2Human, model.board);
      controller.game_Play();
    });
    const enablePlayerCPU = document.getElementById("enable-cpu--button");
    enablePlayerCPU.addEventListener("click", () => {
      // console.log("ENABLED PLAYER CPU MODE");
      model.isPlayer2Human = false;
      model.create_board();
      model.playersTurn = true;
      view.view_Removal("view--starting-screen");
      view.view_GamePlay(model.isPlayer2Human, model.board);
      controller.game_Play();
    });
  }

  game_RerenderBoard() {
    view.view_Removal("view--play-screen");
    view.view_GamePlay(model.isPlayer2Human, model.board);

    controller.game_Play();
  }

  game_Play() {
    document.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        //
        //
        //
        console.log("-------------------------------------");
        if (model.playersTurn == true) {
          console.log("Turn Now: Player 1");
        } else {
          console.log("Turn Now: Player 2");
        }
        //
        //
        let columnNumberStr = button.id;
        let columnNumber = parseInt(
          columnNumberStr[columnNumberStr.length - 1]
        );
        //
        for (
          let slot = model.board[columnNumber].length - 1;
          slot >= 0;
          slot--
        ) {
          if (model.board[columnNumber][slot] == null) {
            model.lastColumnSelected = columnNumber;
            model.lastRowSelected = slot;
            model.board[columnNumber][slot] = model.playersTurn;
            model.checkData_Vertical();
            model.changeData_playersTurn();
            break;
          }
        }
        //
        // Change turns and rerender the board
        controller.game_RerenderBoard();
        //
        // if (model.playersTurn == true) {
        //   console.log("Turn Now: Player 1");
        // } else {
        //   console.log("Turn Now: Player 2");
        // }
      });
    });
  }
}

let view = new View();
let model = new Model();
let controller = new Controller();
controller.game_Start(view);

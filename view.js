// Views
//

import {
  Section,
  Slot,
  Column,
  TextElement,
  Button,
  Modal,
} from "./components.js";

export class View {
  // ---------------------
  // --------------------- VIEW FOR GAME START ------------------------------------------
  // ---------------------
  //
  //
  view_GameStart() {
    section.render("body", "view--starting-screen", "");

    textElement.render(
      "view--starting-screen",
      "header-connect4",
      "",
      "h1",
      "Connect 4"
    );

    textElement.render(
      "view--starting-screen",
      "paragraph--start-instructions",
      "",
      "p",
      "Playing a friend or the CPU?"
    );

    section.render(
      "view--starting-screen",
      "starting-screen--start-buttons",
      ""
    );

    button.render(
      "starting-screen--start-buttons",
      "enable-player2--button",
      "mode-selection--button",
      "Play a Friend"
    );

    button.render(
      "starting-screen--start-buttons",
      "enable-cpu--button",
      "mode-selection--button",
      "Play the CPU"
    );
  }

  // ---------------------
  // --------------------- VIEW FOR GAME PLAY ------------------------------------------
  // ---------------------
  //
  //
  view_GamePlay(isPlayer2Human, arrayOfSlots) {
    section.render("body", "view--play-screen", "");
    textElement.render(
      "view--play-screen",
      "main-header",
      "",
      "h1",
      "Connect 4"
    );

    section.render("view--play-screen", "header--players", "");

    textElement.render(
      "header--players",
      "player1-header",
      "player--header",
      "h2",
      "Player 1"
    );

    textElement.render("header--players", "", "", "h2", "vs");

    if (isPlayer2Human == true) {
      textElement.render(
        "header--players",
        "player2-header",
        "player--header",
        "h2",
        "Player 2"
      );
    } else {
      textElement.render(
        "header--players",
        "player2-header",
        "player--header",
        "h2",
        "CPU"
      );
    }

    section.render("view--play-screen", "board", "");

    for (let newCol in arrayOfSlots) {
      column.render("board", `col-${newCol}`, "column");
      for (let newSlot in arrayOfSlots[newCol]) {
        slot.render(
          `col-${newCol}`,
          `C${newCol}-R${newSlot}`,
          `slot-ownership-${arrayOfSlots[newCol][newSlot]}`,
          `col-${newCol}`,
          `row-${newSlot}`
        );
      }
    }
  }

  // ---------------------
  // --------------------- VIEW FOR END OF GAME ------------------------------------------
  // ---------------------
  //
  //
  view_GameEnd(playerWinner) {
    modal.render(
      "body",
      "winner-modal",
      `${playerWinner}`,
      "Back To Main Menu"
    );
  }

  // ---------------------
  // --------------------- REMOVE VIEW ------------------------------------------
  // ---------------------
  // removes the view that is passed in
  //
  //
  view_Removal(viewToRemove) {
    let sectionToRemove = document.getElementById(viewToRemove);
    sectionToRemove.remove();
  }
}

// ---------------------
// --------------------- INIT CLASSES ------------------------------------------
// ---------------------
// init component classes
//
//
let section = new Section();
let slot = new Slot();
let column = new Column();
let textElement = new TextElement();
let button = new Button();
let modal = new Modal();

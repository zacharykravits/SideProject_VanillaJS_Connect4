// Components
//

// ---------------------
// --------------------- SECTION COMPONENT ------------------------------------------
// ---------------------
//
//
export class Section {
  constructor(section) {
    this.section = section;
  }
  render(renderLocation, componentId, componentClass) {
    let section = document.createElement("div");
    section.setAttribute("id", componentId);
    section.setAttribute("class", componentClass);
    document.getElementById(renderLocation).appendChild(section);
  }
}

// ---------------------
// --------------------- SLOT COMPONENT ------------------------------------------
// ---------------------
//
//
export class Slot {
  constructor(slot) {
    this.slot = slot;
  }
  render(
    renderLocation,
    componentId,
    componentClass,
    componentDataCol,
    componentDataRow
  ) {
    let slot = document.createElement("div");
    slot.setAttribute("id", componentId);
    slot.setAttribute("class", componentClass);
    slot.setAttribute("data-col", componentDataCol);
    slot.setAttribute("data-row", componentDataRow);
    document.getElementById(renderLocation).appendChild(slot);
  }
}

// ---------------------
// --------------------- COLUMN COMPONENT ------------------------------------------
// ---------------------
//
//
export class Column {
  constructor(column) {
    this.column = column;
  }
  render(renderLocation, componentId, componentClass) {
    let column = document.createElement("button");
    column.setAttribute("id", componentId);
    column.setAttribute("class", componentClass);
    document.getElementById(renderLocation).appendChild(column);
  }
}

// ---------------------
// --------------------- PARAGRAPH COMPONENT ------------------------------------------
// ---------------------
//
//
export class TextElement {
  constructor(textElement) {
    this.textElement = textElement;
  }
  //
  render(renderLocation, componentId, componentClass, textType, textToRender) {
    let textElement = document.createElement(textType);
    textElement.setAttribute("id", componentId);
    textElement.setAttribute("class", componentClass);
    textElement.innerHTML = textToRender;
    document.getElementById(renderLocation).appendChild(textElement);
  }
}

// ---------------------
// --------------------- BUTTON COMPONENT ------------------------------------------
// ---------------------
//
//
export class Button {
  constructor(button) {
    this.button = button;
  }
  render(renderLocation, componentId, componentClass, textToRender) {
    let button = document.createElement("button");
    button.setAttribute("id", componentId);
    button.setAttribute("class", componentClass);
    button.innerHTML = textToRender;
    document.getElementById(renderLocation).appendChild(button);
  }
}

// ---------------------
// --------------------- MODAL COMPONENT ------------------------------------------
// ---------------------
//
//
export class Modal {
  constructor(modal) {
    this.modal = modal;
  }
  render(renderLocation, componentId, headerToRender, buttonTextToRender) {
    let modal = document.createElement("div");
    document.getElementById(renderLocation).appendChild(modal);
    modal.setAttribute("id", componentId);
    let header = document.createElement("h1");
    document.getElementById(componentId).appendChild(header);
    header.setAttribute("id", "modal--header");
    header.innerHTML = headerToRender;
    let button = document.createElement("button");
    document.getElementById(componentId).appendChild(button);
    button.setAttribute("id", "modal--button");
    button.innerHTML = buttonTextToRender;
  }
}

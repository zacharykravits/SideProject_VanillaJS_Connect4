// UI components for View
//

// Section component
//
export class Section {
  constructor(section) {
    this.section = section;
  }
  //
  render(renderLocation, componentId, componentClass) {
    let section = document.createElement("div");
    section.setAttribute("id", componentId);
    section.setAttribute("class", componentClass);
    document.getElementById(renderLocation).appendChild(section);
  }
}

// Slot component
//
export class Slot {
  constructor(slot) {
    this.slot = slot;
  }
  //
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

// Column component
//
export class Column {
  constructor(column) {
    this.column = column;
  }
  //
  render(renderLocation, componentId, componentClass) {
    let column = document.createElement("button");
    column.setAttribute("id", componentId);
    column.setAttribute("class", componentClass);
    document.getElementById(renderLocation).appendChild(column);
  }
}

// Paragraph component
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

// Button component
//
export class Button {
  constructor(button) {
    this.button = button;
  }
  //
  render(renderLocation, componentId, componentClass, textToRender) {
    let button = document.createElement("button");
    button.setAttribute("id", componentId);
    button.setAttribute("class", componentClass);
    button.innerHTML = textToRender;
    document.getElementById(renderLocation).appendChild(button);
  }
}

class StateApplicationHandler {
  constructor() {
    this.currentState = null;
    this.historyState = [];
  }

  changeState(newState) {
    if (this.currentState) {
      this.currentState.remove();
    }

    this.currentState = newState;
    document.body.appendChild(this.currentState);
  }

  revertToPreviousState() {
    if (this.historyState.length >= 2) {
      const previousState = this.historyState[this.historyState.length - 2];
      this.currentState.remove();
      this.currentState = previousState;
      document.body.appendChild(this.currentState);
      this.historyState.pop();
    }
  }
}

export { StateApplicationHandler };

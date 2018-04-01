/* eslint-disable no-underscore-dangle */
class Model {
  constructor(state) {
    this._state = state;
    this._defaultState = state;
  }

  getState() {
    return this._state;
  }

  resetState() {
    this._state = this._defaultState;
  }
}

export default Model;

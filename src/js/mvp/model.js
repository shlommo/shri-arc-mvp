/* eslint-disable no-underscore-dangle */
class Model {
  constructor(state) {
    this._state = state;
    this._defaultState = state;
  }

  resetState() {
    this._state = this._defaultState;
  }
}

export default Model;

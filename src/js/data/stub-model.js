/* eslint-disable no-underscore-dangle */
import Model from './../mvp/model';
import stubData from './app-data';
import { setLabel } from './stub-model-helpers';

class StubModel extends Model {
  constructor(state = stubData) {
    super(state);
    this._label = this._state.label;
  }

  set label(label) {
    this._state = setLabel(this._state, label);
  }

  get label() {
    return this._label;
  }
}

export default new StubModel();

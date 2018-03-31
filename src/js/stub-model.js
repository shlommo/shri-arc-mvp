/* eslint-disable no-underscore-dangle */
import Model from './mvp/model';
import stub from './data/app-data';

class StubModel extends Model {
  constructor(state = stub) {
    super(state);
    this._label = this._state.label;
  }

  set label(label) {
    this._label = label;
  }

  get label() {
    return this._label;
  }
}

export default new StubModel();

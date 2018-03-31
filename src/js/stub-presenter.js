/* eslint-disable no-underscore-dangle */
import Presenter from './mvp/presenter';
import StubModel from './stub-model';
import stubView from './stub-view';

class StubPresenter extends Presenter {
  constructor(model = StubModel) {
    super(model);
  }

  updateLabel(label) {
    this._model.label = label;
    const obj = {
      label: this._model.label
    };

    stubView(obj).renderView();
  }
}

export default new StubPresenter();

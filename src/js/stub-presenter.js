/* eslint-disable no-underscore-dangle */
import Presenter from './mvp/presenter';
import StubModel from './data/stub-model';
import Logger from './utils/logger';


class StubPresenter extends Presenter {
  constructor(model = StubModel) {
    super(model);
  }

  updateLabel(label) {
    this._model.label = label;
    Logger.log('Изменил поле label в модели');
    this._renderView();
  }
}

export default new StubPresenter();

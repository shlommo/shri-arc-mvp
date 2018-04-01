/* eslint-disable no-underscore-dangle, class-methods-use-this */
import View from './../mvp/view';
import StubPresenter from './../stub-presenter';

class StubView extends View {
  constructor(inputData) {
    super(inputData);
    this._containerClassName = 'view-stub';
    this.label = this.inputData.label;
    this.updateLabelHandler = this.updateLabelHandler.bind(this);
  }

  getMarkup() {
    const viewStubInputBlock = `<div class="view-stub__input-block">
                                  <input class="view-stub__input"/>
                                  <button class="view-stub__apply">Отправить на сервер</button>
                                </div>`;
    const viewStubLabel = `<p class="view-stub__label">${this.label}</p>`;

    return `<div class="${this._containerClassName}">
              ${viewStubInputBlock}
              ${viewStubLabel}
            </div>`;
  }

  updateLabelHandler() {
    const viewStubInput = this._element.querySelector('.view-stub__input');
    const inputValue = viewStubInput.value;
    if (inputValue.length === 0) {
      return;
    }

    this.clearHandlers();
    StubPresenter.updateLabel(inputValue);
  }

  bindHandlers() {
    this.viewStubBtn = this._element.querySelector('.view-stub__apply');
    this.viewStubBtn.addEventListener('click', this.updateLabelHandler);
  }

  clearHandlers() {
    this.viewStubBtn.removeEventListener('click', this.updateLabelHandler);
  }
}

export default (data, containerSelector) => new StubView(data, containerSelector);

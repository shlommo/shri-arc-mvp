/* eslint-disable no-underscore-dangle, class-methods-use-this */
class View {
  constructor(inputData) {
    this.inputData = inputData;
    this._containerClassName = 'main';
  }

  /**
   * Возвращает DOM элемент полученный из функции getMarkup()
   * и привязывает к нему события bindHandlers()
   * @return {Element}
   */
  get element() {
    if (!this._element) {
      const domElement = document.createElement('div');
      domElement.innerHTML = this.getMarkup();
      this._element = domElement.firstChild;
      this.bindHandlers();
    }
    return this._element;
  }

  renderView() {
    const containerElement = document.querySelector(`.${this._containerClassName}`);
    containerElement.parentNode.replaceChild(this.element, containerElement);
  }

  getMarkup() {
    throw new Error('Abstract method should be implemented');
  }

  bindHandlers() {

  }

  clearHandlers() {

  }
}

export default View;

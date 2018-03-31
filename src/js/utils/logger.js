/* eslint-disable no-underscore-dangle */
const Logger = {
  _loggerContainer: document.querySelector('.log-container__content'),
  getlLogNode(log) {
    const logTmp = `<div class="log">${log}</div>`;
    const domElement = document.createElement('div');
    domElement.innerHTML = logTmp;

    return domElement.firstChild;
  },
  clearLogs() {
    this._loggerContainer.innerHTML = '';
  },
  log(...args) {
    const logStr = args.join(' - ');
    const logNode = this.getlLogNode(logStr);
    this._loggerContainer.appendChild(logNode);
  }
};

export default Logger;

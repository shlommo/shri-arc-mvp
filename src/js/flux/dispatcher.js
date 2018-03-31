/* eslint-disable no-underscore-dangle, no-plusplus */
import logger from './../utils/logger';

const _prefix = 'ID_';

class Dispatcher {
  constructor() {
    this._callbacks = {};
    this._isDispatching = false;
    this._isPending = {};
    this._isHandled = {};
    this._lastId = 1;
  }

  register(callback) {
    const id = _prefix + this._lastId++;
    this._callbacks[id] = callback;
    logger.log('регистрация диспетчером callbakc-а хранилища, id', id);
    return id;
  }

  unregister(id) {
    delete this._callbacks[id];
  }

  dispatch(payload) {
    logger.log('передача данных', JSON.stringify(payload));
    this._startDispatching(payload);
    try {
      Object.keys(this._callbacks).forEach((id) => {
        if (this._isPending[id]) {
          return;
        }
        this._invokeCallback(id);
      });
    } finally {
      this._stopDispatching();
    }
  }

  _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  }

  _startDispatching(payload) {
    Object.keys(this._callbacks).forEach((id) => {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    });
    this._pendingPayload = payload;
    this._isDispatching = true;
  }

  _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  }
}

export default Dispatcher;

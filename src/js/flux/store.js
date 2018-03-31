/* eslint-disable no-underscore-dangle, class-methods-use-this */
import EventEmitter from './../utils/event-emitter';
import logger from './../utils/logger';

class Store {
  constructor(dispatcher) {
    this._changed = false;
    this._changeEvent = 'dataIsSent';
    this._dispatcher = dispatcher;
    this._emitter = new EventEmitter();
    this._state = this.getInitialState();
    this._dispatchToken = dispatcher.register((payload) => {
      this._invokeOnDispatch(payload);
    });
  }

  addListener(callback) {
    logger.log('подписал DOM ноду на изменение данных');
    return this._emitter.subscribe(this._changeEvent, callback);
  }

  getState() {
    return this._state;
  }

  getInitialState() {
    return true;
  }

  reduce(state, action) {
    logger.log(state, action);
  }

  areEqual(one, two) {
    return one === two;
  }

  _invokeOnDispatch(action) {
    this._changed = false;

    const startingState = this._state;
    const endingState = this.reduce(startingState, action);

    if (endingState === undefined) {
      const errorMsg = 'Ваш state не может быть undefined';
      logger.log(errorMsg);
      throw new Error(errorMsg);
    }

    if (!this.areEqual(startingState, endingState)) {
      this._state = endingState;
      this._emitChange();
      logger.log('данные в store переписались');
    }


    if (this._changed) {
      logger.log('передача слушателю события');
      this._emitter.emit(this._changeEvent, this._state);
    }
  }

  _emitChange() {
    this._changed = true;
  }
}

export default Store;

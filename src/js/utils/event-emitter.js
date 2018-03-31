/* eslint-disable no-underscore-dangle */
class EventEmitter {
  constructor() {
    this._events = {};
  }

  subscribe(eventName, fn) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }

    this._events[eventName].push(fn);
  }

  emit(eventName, data) {
    const event = this._events[eventName];
    if (event) {
      event.forEach(fn => fn.call(null, data));
    }
  }

  unsubcribe(eventName, fn) {
    this.events[eventName] = this.events[eventName].filter(eventFn => fn !== eventFn);
  }
}

export default EventEmitter;

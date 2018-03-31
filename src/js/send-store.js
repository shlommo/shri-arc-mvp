/* eslint-disable class-methods-use-this */
import SendDispatcher from './send-dispatcher';
import Store from './flux/store';

class SendStore extends Store {
  constructor() {
    super(SendDispatcher);
  }

  getInitialState() {
    return 'sdfgdfgdfgdf';
  }

  reduce(state, action) {
    switch (action.type) {
      case 'change-string':
        return action.string;

      default:
        return state;
    }
  }
}

export default new SendStore();

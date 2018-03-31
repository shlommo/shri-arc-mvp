import sendDispatcher from './send-dispatcher';

function sendToServer(data) {
  sendDispatcher.dispatch({
    type: 'change-string',
    string: data
  });
}

export default sendToServer;

function sendToServer(data) {
  console.log(data);

  const event = new CustomEvent('dataIsSent', { detail: data });

  document.dispatchEvent(event);
}

export default sendToServer;

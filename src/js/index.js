import sendToServer from './send-to-server';

// Пример обработки события dataIsSent. Рекомендуется изменить API модуля так,
// чтобы вызова события через document не было

function test() {
  document.addEventListener('dataIsSent', (event) => {
    console.log(`event got ${event.detail}`);
  });
  sendToServer('mydata');
}

test();

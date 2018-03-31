import sendToServer from './send-to-server';
import sendStore from './send-store';
import logger from './utils/logger';

const viewStubBtn = document.querySelector('.view-stub__apply');
const viewStubInput = document.querySelector('.view-stub__input');
let str;
viewStubBtn.addEventListener('click', () => {
  str = viewStubInput.value;
  if (str.length === 0) {
    return;
  }
  viewStubInput.value = '';
  sendToServer(str);
});

const viewStubLabel = document.querySelector('.view-stub__label');
sendStore.addListener((data) => {
  logger.log('рендер');
  viewStubLabel.innerHTML = `Сервер принял данные: ${data}`;
});

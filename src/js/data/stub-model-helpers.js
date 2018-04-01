/* eslint-disable import/prefer-default-export */
/**
 * Обновляет label в моделе данных
 * @param  {Object} dataObj - текущее состояние данных
 * @param  {string} label - значение на которое нужно изменит данные
 * @returns {Object} - новое состояние данных
 */
const setLabel = (dataObj, label) => {
  if (typeof label !== 'string') {
    throw new RangeError('Label must be a string');
  }

  return Object.assign({}, dataObj, {
    label
  });
};

export { setLabel };

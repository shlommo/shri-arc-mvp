/* eslint-disable import/prefer-default-export */
const setLabel = (dataObj, label) => {
  if (typeof label !== 'string') {
    throw new RangeError('Label must be a string');
  }

  return Object.assign({}, dataObj, {
    label
  });
};

export { setLabel };

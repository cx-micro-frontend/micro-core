/**
 * Assignment in mutations to change state
 * @param state
 * @param data
 * @param limit
 */
export const stateAssign = (state, data, limit = []) => {
  Object.keys(data).forEach(k => {
    if (limit && limit.length) {
      if (limit.some(limitKey => limitKey === k)) {
        state[k] = data[k];
      }
    } else {
      state[k] = data[k];
    }
  });
};

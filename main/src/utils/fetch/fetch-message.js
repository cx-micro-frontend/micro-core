import {Message} from 'element-ui'

export const elMessage = (msg, onClose) => {
  Message({
    showClose: true,
    message: msg,
    type: 'error',
    duration: 2000,
    onClose: onClose
  })
};

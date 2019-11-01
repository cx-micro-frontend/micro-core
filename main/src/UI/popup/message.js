import { Message } from 'element-ui';

let messageInstance = null;

/**
 * limit messages
 * @param options
 * @param limit
 * @returns {ElMessageComponent}
 * @constructor
 */
const LimitMessage = function(options, limit = 1) {
  const l = document.body.getElementsByClassName('el-message').length;

  if (messageInstance && l >= limit) {
    messageInstance.close();
  }

  messageInstance = Message(options);

  return messageInstance;
};

['success', 'warning', 'info', 'error'].forEach(type => {
  LimitMessage[type] = (options, limit = 1) => {
    if (typeof options === 'string') {
      options = {
        message: options,
      };
    }
    options.type = type;

    return LimitMessage(options, limit);
  };
});

export const message = LimitMessage;

//
// const showMessage = Symbol('showMessage');
// let messageInstance = null;
//
// class LimitMessage {
//   [showMessage](type, options, single) {
//     if (messageInstance && single) {
//       messageInstance.close();
//     }
//     messageInstance = Message[type](options);
//   }
//
//   info(options, single = true) {
//     this[showMessage]('info', options, single);
//   }
//
//   warning(options, single = true) {
//     this[showMessage]('warning', options, single);
//   }
//
//   error(options, single = true) {
//     this[showMessage]('error', options, single);
//   }
//
//   success(options, single = true) {
//     this[showMessage]('success', options, single);
//   }
// }
//
// export const message = new LimitMessage();

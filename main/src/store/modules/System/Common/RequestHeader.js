import {getToken} from "../../../../utils/library/auth";

const requestHead = {
  state: {
    base: {
      appId: '07d8737811434732',
      appClientType: 'pc',
      'Set-Cookie': getToken(),
    },
  }
};

export default requestHead;

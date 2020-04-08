import { getToken } from '../../../../utils/library/auth';

const requestHead = {
  state: {
    base: {
      appId: '07d8737811434732',
      appClientType: 'pc',
      token: getToken(),
    },
  },
};

export default requestHead;

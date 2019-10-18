import { encryptBase64 } from '../../utils/library/crypto';

export default {
  data() {
    return {
      cryptoKey: '0123456789012345', //crypto key
    };
  },
  methods: {
    //set crypto by Pass64
    getCryptoBybase64(password) {
      return encryptBase64(password, this.cryptoKey);
    },
  },
};

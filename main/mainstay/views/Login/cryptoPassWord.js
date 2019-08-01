import {encryptBase64} from '../../utils/crypto';

export default {
  data() {
    return {
      cryptoKey: '0123456789012345', //crypto key
    };
  },
  computed: {
    //set crypto by Pass64
    getCryptoBybase64() {
      return encryptBase64(this.loginForm.password, this.cryptoKey);
    },
  },

}

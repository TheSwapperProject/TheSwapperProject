// MODULES
import axios from 'axios';

// CONFIG
import config from './lib/config.js';

// SERVICES
import services from './lib/services.js';

// UTILS
import utils from './lib/utils.js';

class swapper {
  constructor({ apiKey, chainId = 56 }) {
    if (!apiKey) {
      throw new Error('Api key is not provided in init');
    }

    if (typeof apiKey !== 'string') {
      throw new Error('Api key is not provided in init');
    }

    axios.get(config.api.domain + '/v1/core/check-apikey/' + apiKey);

    this.config = {
      ERC20_ABI: config.ERC20_ABI,
      api: config.api,
      apiKey: apiKey,
      chainId: chainId,
    };

    this.utils = {
      displayFloat: utils.displayFloat,
      connectWallet: utils.connectWallet,
      addDots: utils.addDots,
    };
  }
}

// Service binds
swapper.prototype.getPrice = services.getPrice;
swapper.prototype.getQuote = services.getQuote;
swapper.prototype.sign = services.sign;
swapper.prototype.setAllowance = services.setAllowance;
swapper.prototype.sendTransaction = services.sendTransaction;

export default swapper;

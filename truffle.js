require('dotenv').config();
require('babel-register');
require('babel-polyfill');

const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    develop: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    },
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: '*' // Match any network id
    },
    rinkeby: {
      host: 'localhost',
      port: 8545,
      network_id: 4,
      gas: 4700000
    },
    live: {
      host: 'localhost',
      port: 8545,
      network_id: 1,
      gas: 4700000,
      gasPrice: 15000000000,
      from: '0xxxxxxxxxxxxxx'
    }
  }
};

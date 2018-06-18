var PeaceCoinCrowdsaleToken = artifacts.require('PeaceCoinCrowdsaleToken.sol');

module.exports = function(deployer, networks, accounts) {
  console.log('network: ', networks);
  return liveDeploy(deployer, accounts);
};

async function liveDeploy(deployer, accounts) {
  // Peace Coin Crowdsale Token
  let token;

  console.log('Token will be deployed by: ', accounts[0]);

  // Deploy Peace Coin Crowdsale Token
  await deployer.deploy(PeaceCoinCrowdsaleToken).then(function() {
    token = PeaceCoinCrowdsaleToken;
  });
  console.log('Token Address: ', token.address);
}

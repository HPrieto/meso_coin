const EIP20 = artifacts.require('./EIP20.sol');

module.exports = (deployer) => {
  deployer.deploy(EIP20, 690000, 'Elon\'s Musk', 1, 'MUSK');
};

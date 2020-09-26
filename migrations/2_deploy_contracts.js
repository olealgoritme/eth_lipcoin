const LipCoinToken = artifacts.require("LipCoin");


module.exports = function (deployer) {
    deployer.deploy(LipCoinToken);
}

pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";


/**
 * @title Peace Coin Crowdsale Token
 * @dev Peace Coin ERC20 Token that can be minted.
 *      This Token is used for a crowdsale.
 *      URL: https://www.peace-coin.org
 */
contract PeaceCoinCrowdsaleToken is MintableToken {

    // Peace Coin Crowdsale Token
    string public constant name = "Peace Coin Crowdsale Token";
    string public constant symbol = "PCE";
    uint8 public constant decimals = 18;

}

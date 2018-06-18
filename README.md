# Peace Coin Crowdsale Token Contract

Please visit our web site at the [PEACE-COIN.ORG][peace-coin.org].

This is for Peace Coin Crowdsale Token Contract.

## Token Contract

Please check the [contracts/](contracts) directory. We only provide token contract at this stage. For more infomation, visit our web site.

## Token Specification

- PCE token is ERC-20 compliant.
- PCE token is powered by OpenZeppelin-solidity@1.9.0 which is secure & reliable.

## Test

```
$ truffle test --network ganache
```

## Development Mode

```
$ truffle develop
truffle(develop)> migrate --compile-all --network=develop --reset
```

## Development Mode For ganache

```
$ truffle migrate --compile-all --network=ganache --reset
$ truffle console --network ganache
```

## Live Mode

```
$ truffle migrate --compile-all --network=live --reset
$ truffle console --network ganache
```

[peace-coin.org]: https://www.peace-coin.org

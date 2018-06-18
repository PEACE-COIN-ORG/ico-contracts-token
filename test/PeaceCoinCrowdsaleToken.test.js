import assertRevert from '../helpers/assertRevert';

const PeaceCoinCrowdsaleToken = artifacts.require(
  '../contracts/PeaceCoinCrowdsaleToken.sol'
);

contract('PeaceCoinCrowdsaleToken', accounts => {
  let token;
  const owner = accounts[0];
  const anotherAccount = accounts[1];

  beforeEach(async function() {
    token = await PeaceCoinCrowdsaleToken.new({ from: owner });
  });

  it('has a name', async function() {
    const name = await token.name();
    assert.equal(name, 'Peace Coin Crowdsale Token');
  });

  it('has a symbol', async function() {
    const symbol = await token.symbol();
    assert.equal(symbol, 'PCE');
  });

  it('has 18 decimals', async function() {
    const decimals = await token.decimals();
    assert(decimals.eq(18));
  });

  describe('mint', function() {
    const amount = 100;

    describe('when the sender is the token owner', function() {
      const from = owner;

      describe('when the token was not finished', function() {
        it('mints the requested amount', async function() {
          await token.mint(owner, amount, { from });

          const balance = await token.balanceOf(owner);
          assert.equal(balance, amount);
        });

        it('emits a mint finished event', async function() {
          const { logs } = await token.mint(owner, amount, { from });

          assert.equal(logs.length, 2);
          assert.equal(logs[0].event, 'Mint');
          assert.equal(logs[0].args.to, owner);
          assert.equal(logs[0].args.amount, amount);
          assert.equal(logs[1].event, 'Transfer');
        });
      });

      describe('when the token minting is finished', function() {
        beforeEach(async function() {
          await token.finishMinting({ from });
        });

        it('reverts', async function() {
          await assertRevert(token.mint(owner, amount, { from }));
        });
      });
    });

    describe('when the sender is not the token owner', function() {
      const from = anotherAccount;

      describe('when the token was not finished', function() {
        it('reverts', async function() {
          await assertRevert(token.mint(owner, amount, { from }));
        });
      });

      describe('when the token was already finished', function() {
        beforeEach(async function() {
          await token.finishMinting({ from: owner });
        });

        it('reverts', async function() {
          await assertRevert(token.mint(owner, amount, { from }));
        });
      });
    });
  });
});

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

beforeEach(() => {
    // Get a list of all accounts
    web3.eth.getAccounts()
    .then(fetachedAccounts => {
        console.log(fetachedAccounts);
    });
    // Use one of those accounts to deploy

    // The contract
});

describe('Inbox', () => {
    it('deploys a contract', () => {});
});
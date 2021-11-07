# meso_coin
EIC-20 Token Standard Project

# Deploy to Live Network

### truffle.config.js

```javascript
module.exports {
  networks: {
    "live": {
      network_id: 1,
      host: "127.0.0.1",
      port: 8545,
      gas: 6721975,           // Gas limit used for deploys
      gasPrice: 20000000000,  // Gas price used for deploys
      //from: "",             // From address used during migrations. Defaults to the first available account provided by your ethereum client.
      //provider: "",         // Default web3 provider using `host` and `port` options: new Web3.providers.HttpProvider("http://<host>:<port>")
      websockets: false,      // You will need this enabled to use the confirmations listener or to hear events using .on or .once. Default is false.
      deploymentPollingInterval: 4000 // When a smart contract is deployed, this determines how often to check whether the transaction has been completed, in ms.
    },
    "development": {
      network_id: 3,
      host: "127.0.0.1",
      port; 8545
    }
  }
}
```

### Deploy Smart Contract: mainnet

```
truffle deploy --network live
```

```
truffle deploy --network development
```

### Initialize Clef

```
clef init
```

### Create Account

```
clef newaccount
```

### Start Clef: MainNet

```
clef --keystore /Users/<root_user>/Library/Ethereum/keystore --chainid 1
```

### Start Clef: Ropsten

```
clef --keystore /Users/<root_user>/Library/Ethereum/keystore --chainid 3
```

### Start Geth: Live Network

```
geth --mainnet --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 1
```

### Start Geth: Test Network

```
geth --ropsten --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 3
```

```
geth --rinkeby --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 3
```

```
geth --goerli --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 3
```

### Connect to Live Network Geth console using IPC

```
geth attach /Users/<root_user>/Library/Ethereum/geth.ipc
```

### Connect to Test Network Geth console using IPC

```
geth attach /Users/<root_user>/Library/Ethereum/ropsten/geth.ipc
```

```
geth attach /Users/<root_user>/Library/Ethereum/rinkeby/geth.ipc
```

```
geth attach /Users/<root_user>/Library/Ethereum/goerli/geth.ipc
```

### Clear chaindata

```
rm -rf /Users/<root_user>/Library/ethereum/<network_name>/geth/chaindata
```

```
rm -rf /Users/<root_user>/Library/ethereum/<network_name>/geth/lightchaindata
```

# Web3 console commands

### Get Chain Id

```javascript
web3.eth.chainId()
```

### Get Balance

```javascript
web3.fromWei(eth.getBalance("<account_id>"), "ether");
```

### Send transaction

```javascript
eth.sendTransaction({
  from: "<from_account_id>",
  to: "<to_account_id>",
  value: web3.toWei(0.01, "ether")
});
```

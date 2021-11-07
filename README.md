# meso_coin
EIC-20 Token Standard Project

# Deploy to Live Network

Initialize Clef

```
clef init
```

Create Account

```
clef newaccount
```

Start Clef

```
clef --keystore /Users/<root_user>/Library/Ethereum/keystore --chainid 1
```

Start Geth

```
geth --mainnet --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 1
```

Connect to Geth console using IPC

```
geth attach /Users/<root_user>/Library/Ethereum/geth.ipc
```

# Web3 console commands

Get Chain Id

```javascript
web3.eth.chainId()
```

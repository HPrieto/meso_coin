# meso_coin
EIC-20 Token Standard Project

# Deploy to Live Network

Initialize Clef

```
clef init
```

## Create Account

```
clef newaccount
```

## Start Clef

```
clef --keystore /Users/<root_user>/Library/Ethereum/keystore --chainid 1
```

## Start Geth: Live Network

```
geth --mainnet --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 1
```

## Start Geth: Test Network

```
geth --ropsten --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 2
```

```
geth --rinkeby --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 2
```

```
geth --goerli --syncmode "light" --http --signer=/Users/<root_user>/Library/Signer/clef.ipc --networkid 2
```

## Connect to Live Network Geth console using IPC

```
geth attach /Users/<root_user>/Library/Ethereum/geth.ipc
```

## Connect to Test Network Geth console using IPC

```
geth attach /Users/<root_user>/Library/Ethereum/ropsten/geth.ipc
```

```
geth attach /Users/<root_user>/Library/Ethereum/rinkeby/geth.ipc
```

```
geth attach /Users/<root_user>/Library/Ethereum/goerli/geth.ipc
```

# Web3 console commands

Get Chain Id

```javascript
web3.eth.chainId()
```

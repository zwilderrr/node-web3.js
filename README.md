# Getting started

### Install node-web3

```
npm i @zwilderrr/node-web3
```

### Create `web3` provider

```
const config = {
	endpoint: "https://868605ce-acde-424e-800c-55ab87808268.ethereum.bison.run",
	username: <USERNAME>,
	password: <PASSWORD>,
};

const web3 = createNodeWeb3Provider(config);
```

### Standard web3 calls

```
const latestBlock = await web3.eth.getBlockNumber();
console.log("Latest Ethereum Block is ", latestBlock);
>> Latest Ethereum Block is  15430232
```

### AdvancedAPI calls

```
const rpcResponse = await web3.node.rpcMethod("RPC", "call");
console.log(rpcResponse);
{ method: 'node_rpc_method', params: [ 'RPC', 'call' ] }

const restResponse = await web3.node.restMethod("REST", "call");
console.log(restResponse);
{
  method: 'node_rest_method',
  params: [ 'REST', 'call' ],
  res: Response {
    size: 0,
    timeout: 0,
    [Symbol(Body internals)]: { body: [Gunzip], disturbed: false, error: null },
    [Symbol(Response internals)]: {
      url: 'https://www.example.com/',
      status: 200,
      statusText: 'OK',
      headers: [Headers],
      counter: 0
    }
  }
}
```

### Switching from web3.js

```
const Web3 = require('web3');
const web3 = new Web3('ws://localhost:8546');

// swap the above code for the following
const web3 = createNodeWeb3Provider(config);
```

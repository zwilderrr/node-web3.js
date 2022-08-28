# proof of concept

## getting started

### install package

```
npm i @zwilderrr/node-web3
```

### create provider

```
const config = {
	endpoint: "https://868605ce-acde-424e-800c-55ab87808268.ethereum.bison.run",
	username: <USERNAME>,
	password: <PASSWORD>,
};

const provider = createNodeWeb3Provider(config);
```

### custom calls

```
const resp1 = await provider.node.test1("i", "love", "node");
console.log(resp1)
>> { method: 'node_test1', params: [ 'i', 'love', 'node' ] }

const resp1 = await provider.node.test2("i", "do", "too");
console.log(resp2)
{
  method: 'node_rest_test2',
  params: [ 'i', 'do', 'too' ],
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

### standard web3 calls

```
const latestBlock = await provider.eth.getBlockNumber();
console.log("Latest Ethereum Block is ", latestBlock);
>> Latest Ethereum Block is  15430232
```

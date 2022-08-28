import Web3 from "web3";

const advancedAPI = {
	// Advanced API functions
	test1: function (...params) {
		return callNodeRPCMethod({
			method: "node_rpc_test1",
			params,
		});
	},

	test2: async function (...params) {
		return callNodeRestMethod({
			method: "node_rest_test2",
			params,
		});
	},
};

export function createNodeWeb3Provider({
	username,
	password,
	endpoint,
	...config
}) {
	const base64String = Buffer.from(`${username}:${password}`).toString(
		"base64"
	);
	const options = {
		keepAlive: true,
		withCredentials: true,
		timeout: 20000, // ms
		headers: [{ name: "Authorization", value: "Basic " + base64String }],
		...config,
	};

	const web3Provider = new Web3.providers.HttpProvider(endpoint, options);
	const web3 = new Web3(web3Provider);

	web3.node = {
		...advancedAPI,
		// others
	};

	return web3;
}

function callNodeRPCMethod({ method, params }) {
	return Promise.resolve({ method, params });
}

async function callNodeRestMethod({ method, params }) {
	const res = await fetch("https://www.example.com");
	return Promise.resolve({ method, params, res });
}

// tests
const config = {
	endpoint: "https://868605ce-acde-424e-800c-55ab87808268.ethereum.bison.run",
	username: "XLHELWRFNKIW6OTDWEXU",
	password: "ED7KOCLQ3XMWA3N6FFXJETO2DIFBUKWILVGOZLDU",
};

const provider = createNodeWeb3Provider(config);

const resp1 = await provider.node.test1("method making rpc call");
const resp2 = await provider.node.test2("method making rest call");
console.log(resp1);
console.log(resp2);

const latestBlock = await provider.eth.getBlockNumber();
console.log("Latest Ethereum Block is ", latestBlock);

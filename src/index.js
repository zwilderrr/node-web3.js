import Web3 from "web3";

// Advanced API functions
const advancedAPI = {
	rpcMethod: function (...params) {
		return callNodeRPCMethod({
			method: "node_rpc_test1",
			params,
		});
	},

	restMethod: async function (...params) {
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

const { networkIDs } = require('./enum')
const {
	MAINNET_CODE,
	ROPSTEN_CODE,
	RINKEBY_CODE,
	GOERLI_CODE,
	KOVAN_CODE,
	SOKOL_CODE,
	POA_CORE_CODE,
	XDAI_CODE,
	RSK_CODE,
	RSK_TESTNET_CODE,
	CLASSIC_CODE,
	CELO_CODE,
	CELO_ALFAJORES_TESTNET_CODE,
	CELO_BAKLAVA_TESTNET_CODE,
	ROI_CODE,
	ROI_TESTNET_CODE,
	ROI_TESTNET_LOCAL_CODE,
	EZC_CODE,
	EZC_TESTNET_CODE
} = networkIDs

function getRPCEndpoints(network) {
	const netID = parseInt(network)
	switch (netID) {
	case MAINNET_CODE:
		return ['https://mainnet.infura.io/']
	case ROPSTEN_CODE:
		return ['https://ropsten.infura.io/']
	case RINKEBY_CODE:
		return ['https://rinkeby.infura.io/']
	case GOERLI_CODE:
		return ['https://rpc.slock.it/goerli/']
	case KOVAN_CODE:
		return ['https://kovan.poa.network/']
	case SOKOL_CODE:
		return ['https://sokol.poa.network/']
	case POA_CORE_CODE:
		return ['https://core.poanetwork.dev/']
	case XDAI_CODE:
		return ['https://xdai.poanetwork.dev/']
	case RSK_CODE:
		return ['https://public-node.rsk.co']
	case RSK_TESTNET_CODE:
		return ['https://public-node.testnet.rsk.co']
	case CLASSIC_CODE:
		return ['https://www.ethercluster.com/etc']
	case CELO_CODE:
		return ['https://forno.celo.org']
	case CELO_ALFAJORES_TESTNET_CODE:
		return ['https://alfajores-forno.celo-testnet.org']
	case CELO_BAKLAVA_TESTNET_CODE:
		return ['https://baklava-forno.celo-testnet.org']
	case ROI_CODE:
		return ['https://roi.network.io/ext/bc/C/rpc']
	case ROI_TESTNET_CODE:
		return ['http://45.76.183.104:9650/ext/bc/C/rpc']
	case ROI_TESTNET_LOCAL_CODE:
		return ['http://127.0.0.1:9650/ext/bc/C/rpc']
	case EZC_CODE:
		return ['https://api.ezchain.com/ext/bc/C/rpc']
	case EZC_TESTNET_CODE:
		return ['https://testnet-api.ezchain.com/ext/bc/C/rpc']
	default:
		return []
	}
}

module.exports = {
	getRPCEndpoints
}
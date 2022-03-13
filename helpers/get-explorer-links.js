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

const blockScoutLink = (net, prefix) => `https://blockscout.com/${net}/${prefix}`
const etherscanLink = (prefix) => prefix === 'mainnet' ? 'https://etherscan.io' : `https://${prefix}.etherscan.io`
const rskTestnetExplorerLink = 'https://explorer.testnet.rsk.co'
const celoExplorerLink = 'https://explorer.celo.org'
const celoAlfajoresTestnetExplorerLink = 'https://alfajores-blockscout.celo-testnet.org'
const celoBaklavaTestnetExplorerLink = 'https://baklava-blockscout.celo-testnet.org'
const roiExplorerLink = 'https://roi.exploter.com'
const roiTestnetExplorerLink = 'http://45.32.107.168:4000/'
const roiTestnetLocalExplorerLink = 'http://127.0.0.1:4000'
const ezcExplorerLink = 'https://cchain-explorer.ezchain.com'
const ezcTestnetExplorerLink = 'https://testnet-cchain-explorer.ezchain.com'


const explorerLink = (networkCode, net, prefix) => {
	switch (networkCode) {
	case SOKOL_CODE: // POA Sokol testnet
	case POA_CORE_CODE: // POA Core
	case XDAI_CODE: // xDai chain
	case CLASSIC_CODE: // ETC mainnet
	case RSK_CODE: // RSK mainnet
		return blockScoutLink(net, prefix)
	case RSK_TESTNET_CODE: // RSK testnet
		return rskTestnetExplorerLink
	case MAINNET_CODE: // main net
	case ROPSTEN_CODE: // ropsten testnet
	case RINKEBY_CODE: // rinkeby testnet
	case KOVAN_CODE: // kovan testnet
	case GOERLI_CODE: // Goerli testnet
		return etherscanLink(prefix)
	case CELO_CODE: // CELO
		return celoExplorerLink
	case CELO_ALFAJORES_TESTNET_CODE: // CELO ALFAJORES TESTNET
		return celoAlfajoresTestnetExplorerLink
	case CELO_BAKLAVA_TESTNET_CODE: // CELO BAKLAVA TESTNET
		return celoBaklavaTestnetExplorerLink
	case ROI_CODE:
		return roiExplorerLink // ROI MAINNET
	case ROI_TESTNET_CODE:
		return roiTestnetExplorerLink // ROI TESTNET
	case ROI_TESTNET_LOCAL_CODE:
		return roiTestnetLocalExplorerLink // LOCAL TEST
	case EZC_CODE:
		return ezcExplorerLink
	case EZC_TESTNET_CODE:
		return ezcTestnetExplorerLink
	default:
		return blockScoutLink(net, prefix)
	}
}

const tokenLink = (networkCode, chain, prefix, tokenAddress, holderAddress) => {
	const blockscoutLinkStr = `${blockScoutLink(chain, prefix)}/address/${holderAddress}/tokens/${tokenAddress}/token-transfers`
	const etherscanLinkStr = `${etherscanLink(prefix)}/token/${tokenAddress}?a=${holderAddress}`
	const rskTestnetExplorerLinkStr = `${rskTestnetExplorerLink}/address/${tokenAddress}`
	const celoExplorerLinkStr = `${celoExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const celoAlfajoresTestnetExplorerLinkStr = `${celoAlfajoresTestnetExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const celoBaklavaTestnetExplorerLinkStr = `${celoBaklavaTestnetExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const roiExplorerLinkStr = `${roiExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const roiTestnetExplorerLinkStr = `${roiTestnetExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const roiTestnetLocalExplorerLinkStr = `${roiTestnetLocalExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const ezcExplorerLinkStr = `${ezcExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	const ezcTestnetExplorerLinkStr = `${ezcTestnetExplorerLink}/address/${holderAddress}/tokens/${tokenAddress}/token_transfers`
	switch (networkCode) {
	case SOKOL_CODE: // POA Sokol testnet
	case POA_CORE_CODE: // POA Core
	case XDAI_CODE: // xDai chain
	case CLASSIC_CODE: // ETC mainnet
	case RSK_CODE: // RSK mainnet
		return blockscoutLinkStr
	case RSK_TESTNET_CODE: // RSK testnet
		return rskTestnetExplorerLinkStr
	case MAINNET_CODE: // main net
	case ROPSTEN_CODE: // ropsten testnet
	case RINKEBY_CODE: // rinkeby testnet
	case KOVAN_CODE: // kovan testnet
	case GOERLI_CODE: // Goerli testnet
		return etherscanLinkStr
	case CELO_CODE: // CELO
		return celoExplorerLinkStr
	case CELO_ALFAJORES_TESTNET_CODE: // CELO Alfajores testnet
		return celoAlfajoresTestnetExplorerLinkStr
	case CELO_BAKLAVA_TESTNET_CODE: // CELO Baklava testnet
		return celoBaklavaTestnetExplorerLinkStr
	case ROI_CODE:
		return roiExplorerLinkStr // ROI MAINNET
	case ROI_TESTNET_CODE:
		return roiTestnetExplorerLinkStr // ROI TESTNET
	case ROI_TESTNET_LOCAL_CODE:
		return roiTestnetLocalExplorerLinkStr // LOCAL TEST
	case EZC_CODE:
		return ezcExplorerLinkStr
	case EZC_TESTNET_CODE:
		return ezcTestnetExplorerLinkStr
	default:
		return blockscoutLinkStr
	}
}

const getExplorerAccountLinkFor = (account, networkCode) => {
	const prefix = getExplorerPrefix(networkCode)
	const chain = getExplorerChain(networkCode)
	return `${explorerLink(networkCode, chain, prefix)}/address/${account}`
}

const getExplorerTxLinkFor = (hash, networkCode) => {
	const prefix = getExplorerPrefix(networkCode)
	const chain = getExplorerChain(networkCode)
	return `${explorerLink(networkCode, chain, prefix)}/tx/${hash}`
}

const getExplorerTokenLinkFor = (tokenAddress, holderAddress, networkCode) => {
	const prefix = getExplorerPrefix(networkCode)
	const chain = getExplorerChain(networkCode)
	return tokenLink(networkCode, chain, prefix, tokenAddress, holderAddress)
}

function getExplorerChain (networkCode) {
	const net = parseInt(networkCode)
	let chain
	switch (net) {
	case MAINNET_CODE: // main net
	case ROPSTEN_CODE: // ropsten testnet
	case RINKEBY_CODE: // rinkeby testnet
	case KOVAN_CODE: // kovan testnet
	case GOERLI_CODE: // Goerli testnet
		chain = 'eth'
		break
	case SOKOL_CODE: // POA Sokol testnet
	case POA_CORE_CODE: // POA Core
	case XDAI_CODE: // xDai chain
		chain = 'poa'
		break
	case CLASSIC_CODE: // ETC mainnet
		chain = 'etc'
		break
	case RSK_CODE: // RSK mainnet
		chain = 'rsk'
		break
	case CELO_CODE: // CELO
		chain = 'celo'
		break
	case CELO_ALFAJORES_TESTNET_CODE: // CELO Alfajores testnet
		chain = 'celo-alfajores'
		break
	case CELO_BAKLAVA_TESTNET_CODE: // CELO Baklava testnet
		chain = 'celo-baklava'
		break
	case EZC_CODE:
	case EZC_TESTNET_CODE:
		chain = 'ezc'
		break
	default:
		chain = ''
	}
	return chain
}

function getExplorerPrefix (networkCode) {
	const net = parseInt(networkCode)
	let prefix
	switch (net) {
	case MAINNET_CODE: // main net
	case CLASSIC_CODE: // ETC mainnet
	case RSK_CODE: // RSK mainnet
		prefix = 'mainnet'
		break
	case ROPSTEN_CODE: // ropsten testnet
		prefix = 'ropsten'
		break
	case RINKEBY_CODE: // rinkeby testnet
		prefix = 'rinkeby'
		break
	case KOVAN_CODE: // kovan testnet
		prefix = 'kovan'
		break
	case SOKOL_CODE: // POA Sokol testnet
		prefix = 'sokol'
		break
	case POA_CORE_CODE: // POA Core
		prefix = 'core'
		break
	case XDAI_CODE: // xDai chain
		prefix = 'xdai'
		break
	case GOERLI_CODE: // Goerli testnet
		prefix = 'goerli'
		break
	case EZC_CODE: // Goerli testnet
		prefix = 'ezc'
		break
	default:
		prefix = ''
	}
	return prefix
}

module.exports = {
	getExplorerAccountLinkFor,
	getExplorerTxLinkFor,
	getExplorerTokenLinkFor,
}

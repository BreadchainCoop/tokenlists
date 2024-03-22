/* eslint-disable max-len */
import { Network, OverwritesForList } from '../../types'

export const overwrites: OverwritesForList = {
  [Network.Ethereum]: {
    '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2': {
      name: 'Wrapped Ether',
    },
    '0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8': {
      name: 'Curve.fi Y Pool Token',
      symbol: 'yCRV',
      decimals: 18,
    },
    '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359': {
      name: 'Sai Stablecoin v1.0',
      symbol: 'SAI',
      decimals: 18,
    },
    '0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A': {
      name: 'DigixDAO DGD Token',
      symbol: 'DGD',
      decimals: 9,
    },
    '0x960b236A07cf122663c4303350609A66A7B288C0': {
      name: 'Aragon v1',
      symbol: 'ANT (old)',
      decimals: 18,
    },
    '0x0Ba45A8b5d5575935B8158a88C631E9F9C95a2e5': {
      name: 'Tellor Tributes',
      symbol: 'TRB (old)',
      decimals: 18,
    },
    '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2': {
      decimals: 18,
      symbol: 'MKR',
      name: 'Maker',
    },
    '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48': {
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    },
    '0x304A2050dF259DCA35335C90CE983AdC5f2Dc50C': {
      decimals: 18,
      symbol: 'sWETH',
      name: 'Sturdy Wrapped ETH',
    },
    '0x2BBf681cC4eb09218BEe85EA2a5d3D13Fa40fC0C': {
      decimals: 18,
      symbol: 'bb-a-USDT (old)',
      name: 'Balancer Aave Boosted Pool (USDT)',
    },
    '0x804CdB9116a10bB78768D3252355a1b18067bF8f': {
      decimals: 18,
      symbol: 'bb-a-DAI (old)',
      name: 'Balancer Aave Boosted Pool (DAI)',
    },
    '0x9210F1204b5a24742Eba12f710636D76240dF3d0': {
      decimals: 18,
      symbol: 'bb-a-USDC (old)',
      name: 'Balancer Aave Boosted Pool (USDC)',
    },
    '0x7B50775383d3D6f0215A8F290f2C9e2eEBBEceb2': {
      decimals: 18,
      symbol: 'bb-a-USD (old)',
      name: 'Balancer Aave Boosted StablePool (USD)',
    },
    '0xE95A203B1a91a908F9B9CE46459d101078c2c3cb': {
      decimals: 18,
      symbol: 'ankrETH',
      name: 'Ankr Staked ETH',
    },
    '0x9559Aaa82d9649C7A7b220E7c461d2E74c9a3593': {
      decimals: 18,
      symbol: 'staFi rETH',
      name: 'staFi rETH',
    },
    '0xEb91861f8A4e1C12333F42DCE8fB0Ecdc28dA716': {
      decimals: 18,
      symbol: 'eUSDC',
      name: 'Euler Pool: USD Coin',
    },
    '0x4d19F33948b99800B6113Ff3e83beC9b537C85d2': {
      decimals: 18,
      symbol: 'eUSDT',
      name: 'Euler Pool: Tether USD',
    },
    '0xe025E3ca2bE02316033184551D4d3Aa22024D9DC': {
      decimals: 18,
      symbol: 'eDAI',
      name: 'Euler Pool: Dai Stablecoin',
    },
    '0xa2E3356610840701BDf5611a53974510Ae27E2e1': {
      decimals: 18,
      symbol: 'wBETH',
      name: 'Wrapped Beacon ETH',
    },
    '0x02c2d189b45ce213a40097b62d311cf0dd16ec92': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x65799b9fd4206cdaa4a1db79254fcbc2fd2ffee6': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x862c57d48becb45583aeba3f489696d22466ca1b': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
  },
  [Network.Goerli]: {
    '0x9bA00D6856a4eDF4665BcA2C2309936572473B7E': {
      symbol: 'aUSDC',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9bA00D6856a4eDF4665BcA2C2309936572473B7E/logo.png',
    },
    '0x71fc860F7D3A592A4a98740e39dB31d25db65ae8': {
      symbol: 'aUSDT',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x71fc860F7D3A592A4a98740e39dB31d25db65ae8/logo.png',
    },
    '0x398106564948fEeb1fEdeA0709AE7D969D62a391': {
      symbol: 'miMATIC',
      logoURI:
        'https://assets.coingecko.com/coins/images/15264/large/mimatic-red.png?1620281018',
    },
    '0xfA8449189744799aD2AcE7e0EBAC8BB7575eff47': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
  },
  [Network.Polygon]: {
    '0x9a71012B13CA4d3D0Cdc72A177DF3ef03b0E76A3': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
    '0x1D607Faa0A51518a7728580C238d912747e71F7a': {
      name: 'Data Economy Index',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x33d63Ba1E57E54779F7dDAeaA7109349344cf5F1/logo.png',
    },
    '0x282d8efCe846A88B159800bd4130ad77443Fa1A1': {
      name: 'Ocean Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x967da4048cD07aB37855c090aAF366e4ce1b9F48/logo.png',
    },
    '0x2934b36ca9A4B31E633C5BE670C8C8b28b6aA015': {
      name: 'THX Network',
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/refactor-for-multichain/assets/0x2934b36ca9a4b31e633c5be670c8c8b28b6aa015.png',
    },
    '0xC8A94a3d3D2dabC3C1CaffFFDcA6A7543c3e3e65': {
      name: 'Gemini Dollar',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd/logo.png',
    },
    '0x5FFD62D3C3eE2E81C00A7b9079FB248e7dF024A8': {
      name: 'Gnosis',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png',
    },
    '0x263534a4Fe3cb249dF46810718B7B612a30ebbff': {
      name: 'Perpetual Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xbC396689893D065F41bc2C6EcbeE5e0085233447/logo.png',
    },
    '0x2C89bbc92BD86F8075d1DEcc58C7F4E0107f286b': {
      name: 'Avalanche',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/2563ac9dc5369d8e3255cde663cf7f08e3c58914/blockchains/avalanchec/info/logo.png',
    },
    '0x3066818837c5e6eD6601bd5a91B0762877A6B731': {
      name: 'UMA Protocol',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828/logo.png',
    },
    '0x87ff96aba480f1813aF5c780387d8De7cf7D8261': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x4Fabb145d64652a948d72533023f6E7A623C7C53/logo.png',
    },
    '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619': {
      name: 'Wrapped Ether',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    '0x7DfF46370e9eA5f0Bad3C4E29711aD50062EA7A4': {
      name: 'Solana',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/2563ac9dc5369d8e3255cde663cf7f08e3c58914/blockchains/solana/info/logo.png',
    },
    '0xE7804D91dfCDE7F776c90043E03eAa6Df87E6395': {
      name: 'DFX Token',
      logoURI:
        'https://raw.githubusercontent.com/dfx-finance/assets/add-dfx-logov3/blockchains/ethereum/assets/0x888888435FDe8e7d4c54cAb67f206e4199454c60/logo.png',
    },
    '0xF501dd45a1198C2E1b5aEF5314A68B9006D842E0': {
      name: 'Meta',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2/logo.png',
    },
    '0xfBd8A3b908e764dBcD51e27992464B4432A1132b': {
      name: 'Index',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0954906da0Bf32d5479e25f46056d22f08464cab/logo.png',
    },
    '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D/logo.png',
    },
    '0xDB7Cb471dd0b49b29CAB4a1C14d070f27216a0Ab': {
      name: 'Bankless DAO',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198/logo.png',
    },
    '0xbD7A5Cf51d22930B8B3Df6d834F9BCEf90EE7c4f': {
      name: 'Ethereum Name Service',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72/logo.png',
    },
    '0xdb95f9188479575F3F718a245EcA1B3BF74567EC': {
      name: 'Gitcoin',
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0xde30da39c46104798bb5aa3fe8b9e0e1f348163f.png',
    },
    '0xEC38621e72D86775a89C7422746de1f52bbA5320': {
      symbol: 'DUSD',
      name: 'DUSD',
    },
    '0xc04296aa4534f5a3bab2d948705bc89317b2f1ed': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x2dca80061632f3f87c9ca28364d1d0c30cd79a19': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x31f5ac91804a4c0b54c0243789df5208993235a1': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0x87a1fdc4c726c459f597282be639a045062c0e46': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
  },
  [Network.Arbitrum]: {
    '0x040d1EdC9569d4Bab2D15287Dc5A4F10F56a56B8': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
    '0x11cDb42B0EB46D95f990BeDD4695A6e3fA034978': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xD533a949740bb3306d119CC777fa900bA034cd52/logo.png',
    },
    '0x23A941036Ae778Ac51Ab04CEa08Ed6e2FE103614': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc944E90C64B2c07662A292be6244BDf05Cda44a7/logo.png',
    },
    '0x2e9a6Df78E42a30712c10a9Dc4b1C8656f8F2879': {
      name: 'Maker',
      symbol: 'MKR',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2/logo.png',
    },
    '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
    },
    '0x354A6dA3fcde098F8389cad84b0182725c6C91dE': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc00e94Cb662C3520282E6f5717214004A7f26888/logo.png',
    },
    '0x8038F3C971414FD1FC220bA727F2D4A0fC98cb65': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84/logo.png',
    },
    '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
    },
    '0x82e3A8F066a6989666b031d916c43672085b1582': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e/logo.png',
    },
    '0xa0b862F60edEf4452F25B4160F177db44DeB6Cf1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png',
    },
    '0xa684cd057951541187f288294a1e1C2646aA2d24': {
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/refactor-for-multichain/assets/0xa684cd057951541187f288294a1e1c2646aa2d24.png',
    },
    '0xA970AF1a584579B618be4d69aD6F73459D112F95': {
      logoURI:
        'https://raw.githubusercontent.com/balancer-labs/assets/master/assets/0x57ab1ec28d129707052df4df418d58a2d46d5f51.png',
    },
    '0xB965029343D55189c25a7f3e0c9394DC0F5D41b1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x86772b1409b61c639EaAc9Ba0AcfBb6E238e5F83/logo.png',
    },
    '0xC3Ae0333F0F34aa734D5493276223d95B8F9Cb37': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xa1d65E8fB6e87b60FECCBc582F7f97804B725521/logo.png',
    },
    '0xd4d42F0b6DEF4CE0383636770eF773390d85c61A': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png',
    },
    '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    },
    '0xef888bcA6AB6B1d26dbeC977C455388ecd794794': {
      logoURI:
        'https://assets.coingecko.com/coins/images/12900/large/Rari_Logo_Transparent.png?1613978014',
    },
    '0xf4D48Ce3ee1Ac3651998971541bAdbb9A14D7234': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2ba592F78dB6436527729929AAf6c908497cB200/logo.png',
    },
    '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    },
    '0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0': {
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984/logo.png',
    },
    '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8': {
      symbol: 'USDC.e',
      name: 'Bridged USDC',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    '0xaf88d065e77c8cC2239327C5EDb3A432268e5831': {
      symbol: 'USDC',
      name: 'USDC Coin',
      logoURI:
        'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    },
    '0x3a301e7917689b8e8a19498b8a28fc912583490c': {
      decimals: 6,
      symbol: 'AaveUSDC',
      name: 'Static Aave Ethereum USDC',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x7cfadfd5645b50be87d546f42699d863648251ad': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0xbde67e089886ec0e615d6f054bc6f746189a3d56': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x8b5541b773dd781852940490b0c3dc1a8cdb6a87': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
    '0xb165a74407fe1e519d6bcbdec1ed3202b35a4140': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
  },
  [Network.Optimism]: {
    '0xe05A08226c49b636ACf99c40Da8DC6aF83CE5bB3': {
      logoURI:
        'https://www.ankr.com/_next/static/images/ethereum-ankreth-logo-794cb04ee270a7cb5c8559924aa5211d.png',
    },
    '0x97513e975a7fA9072c72C92d8000B0dB90b163c5': {
      symbol: 'multiBeets',
      name: 'multiBeets',
    },
    '0x9f281eb58fd98ad98ede0fc4c553ad4d73e7ca2c': {
      decimals: 6,
      symbol: 'AaveUSDCe',
      name: 'Static Aave Ethereum USDC.e',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x4dd03dfd36548c840b563745e3fbec320f37ba7e': {
      decimals: 6,
      symbol: 'AaveUSDCn',
      name: 'Static Aave Ethereum USDCn',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xe719aef17468c7e10c0c205be62c990754dff7e5.png',
    },
    '0x035c93db04e5aaea54e6cd0261c492a3e0638b37': {
      decimals: 6,
      symbol: 'AaveUSDT',
      name: 'Static Aave Ethereum USDT',
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xf8fd466f12e236f4c96f7cce6c79eadb819abf58.png',
    },
  },
  [Network.Gnosis]: {
    '0x7eF541E2a22058048904fE5744f9c7E4C57AF717': {
      logoURI:
        'https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0xba100000625a3754423978a60c9317c58a424e3d.png',
    },
  },
  [Network.Zkevm]: {},
  [Network.Fantom]: {
    '0xf1648C50d2863f780c57849D812b4B7686031A3D': {
      name: 'LayerZero Wrapped Bitcoin',
      symbol: 'lzWBTC',
    },
    '0x448d59B4302aB5d2dadf9611bED9457491926c8e': {
      name: 'Axelar Wrapped Bitcoin',
      logoURI:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    },
    '0x321162Cd933E2Be498Cd2267a90534A804051b11': {
      name: 'Multichain Wrapped Bitcoin',
      symbol: 'multiWBTC',
    },
    '0x695921034f0387eAc4e11620EE91b1b15A6A09fE': {
      name: 'LayerZero Wrapped Ethereum',
      symbol: 'lzWETH',
    },
    '0xfe7eDa5F2c56160d406869A8aA4B2F365d544C7B': {
      name: 'Axelar Wrapped Ethereum',
      symbol: 'axlWETH',
    },
    '0x74b23882a30290451A17c44f4F05243b6b58C76d': {
      name: 'Multichain Wrapped Ethereum',
      symbol: 'multiWETH',
    },
    '0xcc1b99dDAc1a33c201a742A1851662E87BC7f22C': {
      name: 'LayerZero USDT',
      symbol: 'lzUSDT',
    },
    '0x049d68029688eAbF473097a2fC38ef61633A3C7A': {
      name: 'Multichain Frapped USDT',
      symbol: 'multiFUSDT',
    },
    '0x1B6382DBDEa11d97f24495C9A90b7c88469134a4': { name: 'Axelar USDC' },
    '0x28a92dde19D9989F39A49905d7C9C2FAc7799bDf': {
      name: 'LayerZero USD Coin',
      symbol: 'lzUSDC',
    },
    '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75': {
      name: 'Multichain USD Coin',
      symbol: 'multiUSDC',
    },
    '0x91a40C733c97a6e1BF876EaF9ed8c08102eB491f': {
      name: 'LayerZero Dai',
      symbol: 'lzDAI',
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/dai-128.png',
    },
    '0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E': {
      name: 'Multichain Dai',
      symbol: 'multiDAI',
    },
    '0xd7028092c830b5C8FcE061Af2E593413EbbC1fc1': {
      name: 'BeethovenX sFTMX',
      symbol: 'sFTMx',
    },
    '0xF24Bcf4d1e507740041C9cFd2DddB29585aDCe1e': { name: 'Beethoven X' },
    '0xDE1E704dae0B4051e80DAbB26ab6ad6c12262DA0': {
      logoURI:
        'https://assets.coingecko.com/coins/images/18779/large/DEI-logo-round-white-3.png?1646300101',
    },
    '0xC5e2B037D30a390e62180970B3aa4E91868764cD': {
      name: 'oldTarot',
      symbol: 'oldTAROT',
    },
    '0xD3FDCb837DAfdb7C9C3eBD48FE22a53F6Dd3d7D7': {
      name: 'Qi Dao',
      logoURI:
        'https://assets.coingecko.com/coins/images/15329/large/qi.png?1620540969',
    },
    '0x54546a860416483994E7E83803A72d59D15fBAA3': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-cane-icon.6d6a0b8e.png',
    },
    '0x80Fe671E580CD1D95B2Dcd8EA09233DF06C81C7b': {
      logoURI:
        'https://www.tarot.to/assets/images/token-icons/0x80Fe671E580CD1D95B2Dcd8EA09233DF06C81C7b.png',
    },
    '0x84F8D24231DfbBfae7f39415cD09c8f467729fc8': {
      name: 'Cosmic Cash',
      logoURI: 'https://mineempire.io/assets/csc-256x256.png',
    },
    '0xDE12c7959E1a72bbe8a5f7A1dc8f8EeF9Ab011B3': {
      name: 'old _DEI',
      symbol: 'old_DEI',
      logoURI:
        'https://assets.coingecko.com/coins/images/18779/small/DEI-logo-round-white-3.png?1646300101',
    },
    '0x16DCdC7BB3235a60243b34875c9D86a4980Da26d': {
      name: 'Deliland',
      logoURI: 'https://deliland.io/static/media/mgDELI-icon.7424806d.png',
    },
    '0x250CD2c6B7259a0621d1C2997C48dDdbEA54A5A6': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/Bwool_logo_round.svg',
    },
    '0x010226C777E27e04AE31d4CDDE9510863f5f1Aaa': {
      name: 'Multiverse',
      logoURI:
        'https://quanta.farmgod.finance/static/media/quanta.f6421c18.png',
    },
    '0x1f365AC62AAbf64eF52A2C2FD86df9dd9e03665F': {
      name: 'Deliland',
      logoURI: 'https://deliland.io/static/media/animal.e2a9910b.png',
    },
    '0x86c6aCa3c920Cb85261f2a3f2F89450b906297Cc': {
      name: 'Truth',
      logoURI: 'https://eyeoftruth.io/static/media/ALETHEIA.png',
    },
    '0x86c8bF055D6785A00b23361A49B849859B7f686B': {
      name: 'Multiverse',
      logoURI: 'https://eyeoftruth.io/static/media/govECHO.png',
    },
    '0xE5586582E1a60E302a53e73E4FaDccAF868b459a': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/xrlc.png',
    },
    '0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1': {
      logoURI:
        'https://app.fbomb.finance/images/tokens/0xbf4906762C38F50bC7Be0A11BB452C944f6C72E1.png',
    },
    '0xD802dF71F737F9C687c5d389FD6AC421d0666f10': {
      name: 'Deliland',
      symbol: 'gH2O',
      logoURI: 'https://deliland.io/static/media/watertoken256.d860f17d.png',
    },
    '0x195FE0c899434fB47Cd6c1A09ba9DA56A1Cca12C': {
      name: 'Multiverse',
      logoURI: 'https://eyeoftruth.io/static/media/munny.43d4bd5c.png',
    },
    '0xe0D902BcC8c8F15caEe20c57069163C5C1F55ee1': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-gpoil-icon.ca75f5c7.png',
    },
    '0xc5713B6a0F26bf0fdC1c52B90cd184D950be515C': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/linspirit.png',
    },
    '0xF04A45b429eB5930a85884141C530147Db0f609E': {
      logoURI:
        'https://valhalla-dao.com/wp-content/uploads/2023/02/logo1-1.png',
    },
    '0x62227c75908b7d358a9d70eA4670F57f8b012Ccc': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/mFTM-Token-BlackBlue.png',
    },
    '0x4f76664105ba7E35dD4904eC70F2042fc17563d9': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/icon_white.png',
    },
    '0x31F3207dD01B02bA3e85b5af5E932092C6B86d3f': {
      name: 'Truth',
      logoURI: 'https://eyeoftruth.io/static/media/TRUTH.png',
    },
    '0xDbE808E1968B0C8978Ad7d13255CBA8aC659Ea0a': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-gseed-icon.5bb8f287.png',
    },
    '0x126eE076DA8cc4ffCA5cd89BB4a0EbfE6Fa09189': {
      name: 'Deliland',
      logoURI: 'https://deliland.io/static/media/EnerG-icon.29c1aed0.png',
    },
    '0x454d4BaE7c2adab588d837aFF4Db16Db19d46A33': {
      name: 'Good Morning FTM',
      logoURI: 'https://i.ibb.co/12RsJ9g/GMFTMTOKENfuneral.png',
    },
    '0x877e7328292277D11752317420f44d6a61B4CD8e': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-sugar-icon.21147744.png',
    },
    '0x08d70A47D3f28BbF755ae050a783844b40ae5761': {
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/kelvin.png',
    },
    '0x6CAa3e5FebA1f83ec1d80EA2EAca37C3421C33A8': {
      logoURI:
        'https://www.tarot.to/assets/images/token-icons/0x6CAa3e5FebA1f83ec1d80EA2EAca37C3421C33A8.png',
    },
    '0x031305e65166c26F0666353c021c563B4a7c9ca2': {
      name: 'Truth',
      logoURI: 'https://eyeoftruth.io/static/media/MAAT.png',
    },
    '0x73E30eb2e469cc542d86397bECA97Ea6547e1cA7': {
      name: 'Sanik',
      logoURI:
        'https://equalizer.exchange/assets/fantom/token/0x73e30eb2e469cc542d86397beca97ea6547e1ca7.png',
    },
    '0x3f9C449FEBb5e8cC452637ACe9287dD806F49B86': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-ugu-icon.37f99c72.png',
    },
    '0x6e9c4Fe1D8509ED2d4219C21FbaB232A81b8d4b6': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-liggies-icon.32907d3c.png',
    },
    '0x68EFc4716507709691d5e7AD9906a44FaBCdb1CA': {
      logoURI: 'https://app.mineempire.io/assets/gem-256x256.png',
    },
    '0x59D07a115fe3FFe5db3D52029D43Cc0ef5e9ba08': {
      logoURI:
        'https://assets.coingecko.com/coins/images/22522/large/KmzajETygnMWAKm05ljiI3pc7_JTIdu_H6hhOgaRc-ICj0M9geEpF83iceGbQ6U2PByY3A3jwkHFC0zLEycnplJpUcqb_cl0QV89fPI_h3XdflDh9Sroq22uFfvwQ8lCjl7EFiIKpr-fGbW2ArkJEdPkWL6UJu5DbE6YArcksukEcc_8cpryHjchAdd-imlOugScNPswFZzMqb.jpg?1641970344',
    },
    '0x9BF30B6544498AD01cc558c3df44e08892D0952d': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-gcoil-icon.99f9c11c.png',
    },
    '0x217934412c0a70e64c8FF0e0fe2e7b7717fdDCeb': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-flour-icon.ae755fe0.png',
    },
    '0xbF07093ccd6adFC3dEB259C557b61E94c1F66945': {
      name: 'BIFI Maxi',
      symbol: 'mooBIFI',
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/mooBIFI.png',
    },
    '0xcdE5a11a4ACB4eE4c805352Cec57E236bdBC3837': {
      symbol: 'BPT-BEETS-FTM ',
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/fidelio-duetto.png',
    },
    '0xB6F07FcD05E90D46b411f4F4F1c0665227bCdd35': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-wheat-icon.b6b9fb4e.png',
    },
    '0x953Cd009a490176FcEB3a26b9753e6F01645ff28': {
      symbol: 'XDEUS',
      logoURI:
        'https://assets.coingecko.com/coins/images/28702/large/xDEUS_logo_200x200.png?1673425416',
    },
    '0xF386eB6780a1e875616b5751794f909095283860': {
      name: 'fMulti',
      symbol: 'fMULTI',
      logoURI: 'https://maxflowO2.com/img/image.png',
    },
    '0x96312c36cB278bB84BB1c180E33f17b8857fFFab': {
      logoURI:
        'https://raw.githubusercontent.com/firebird-finance/firebird-assets/master/blockchains/fantom/assets/0x96312c36cB278bB84BB1c180E33f17b8857fFFab/logo.png',
    },
    '0x0C9393d08B817a6dA19381ED86D03FF64E11F9b0': {
      logoURI: 'https://i.imgur.com/GGzuFKw.png',
    },
    '0x12245af2d6d298D98019C15FB1001D8712D27A7D': {
      name: 'Deliland',
      logoURI: 'https://deliland.io/static/media/acre.png',
    },
    '0x6c2A43fd04E7Ad9bC2b81523E383c445695b73a1': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-brownsugar-icon.c246a550.png',
    },
    '0x496e1693A7B162c4f0Cd6a1792679cC48EcbCC8d': {
      name: 'Truth',
      logoURI: 'https://eyeoftruth.io/static/media/eye.7cccf58f.png',
    },
    '0xE3e0EBA90185e7292B9Ca92c7409cDEf504F9d07': {
      logoURI: 'https://i.imgur.com/VO0SnyG.png',
    },
    '0x43F9a13675e352154f745d6402E853FECC388aA5': {
      logoURI:
        'https://equalizer.exchange/assets/fantom/token/0x43f9a13675e352154f745d6402e853fecc388aa5.png',
    },
    '0x524CAbe5b2F66CBd6F6b08dEf086F18F8DdE033a': {
      logoURI: 'https://i.ibb.co/b37Gktw/BICO-Ticker-01.png',
    },
    '0x7473c63e0247fe25f1388B5eB3dccc412d7a6343': {
      name: 'Deliland',
      logoURI:
        'https://deliland.io/static/media/deliland-wholeflour-icon.32c210f5.png',
    },
    '0xfcef8a994209d6916EB2C86cDD2AFD60Aa6F54b1': {
      name: 'Fresh BEETS',
      logoURI:
        'https://beethoven-assets.s3.eu-central-1.amazonaws.com/fBEETS.png',
    },
    '0xC09A82aD5075B3067D80F54f05e1E22229699Cc1': {
      logoURI:
        'https://assets.coingecko.com/coins/images/24109/large/logo-blue.png?1646376874',
    },
    '0x2B6850bF31874d96A21eD4Dc7C6415B9640BE2A4': {
      logoURI: 'https://www.fantomon.net/plasmagunk.png',
    },
    '0x2FcDcf0172376764c0462DDE4165c6F08F920135': {
      name: 'Truth',
      logoURI: 'https://eyeoftruth.io/static/media/MYTH.png',
    },
  },
}

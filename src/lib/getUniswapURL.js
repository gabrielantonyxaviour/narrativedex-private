import { IS_MAINNET } from 'src/constants'

const getUniswapURL = (amount, outputCurrency) => {
  return `https://app.uniswap.org/#/swap?exactField=output&exactAmount=${amount}&outputCurrency=${outputCurrency}&chain=${
    IS_MAINNET ? 'polygon' : 'polygon_mumbai'
  }`
}

export default getUniswapURL

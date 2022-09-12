import { STATIC_ASSETS } from 'src/constants'

const getTokenImage = (symbol) =>
  `${STATIC_ASSETS}/tokens/${symbol?.toLowerCase()}.svg`

export default getTokenImage

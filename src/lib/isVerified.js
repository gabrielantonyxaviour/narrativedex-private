import { mainnetVerified, testnetVerified } from 'data/verified'
import { IS_MAINNET } from 'src/constants'

const isVerified = (id) =>
  IS_MAINNET ? mainnetVerified.includes(id) : testnetVerified.includes(id)

export default isVerified

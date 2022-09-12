import getAttribute from './getAttribute'

const isBeta = (profile) =>
  getAttribute(profile?.attributes, 'isBeta') === 'true'

export default isBeta

export const getFollowModule = (name) => {
  switch (name) {
    case 'ProfileFollowModuleSettings':
      return { description: 'Only Lens profiles can follow' }
    case 'FeeFollowModuleSettings':
      return { description: 'Charge to follow' }
    case 'RevertFollowModuleSettings':
      return { description: 'No one can follow' }
    default:
      return { description: 'Anyone can follow' }
  }
}

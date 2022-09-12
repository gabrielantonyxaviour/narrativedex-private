import React from 'react'

import Module from './Module'

const Allowance = ({ allowance }) => {
  return (
    <CardBody className="space-y-4">
      {allowance?.approvedModuleAllowanceAmount?.map((item) =>
        item?.module === 'RevertCollectModule' ||
        item?.module === 'FreeCollectModule' ? (
          ''
        ) : (
          <Module key={item?.contractAddress} module={item} />
        )
      )}
    </CardBody>
  )
}

export default Allowance

import { Card } from '@components/UI/Card'
import React from 'react'

const HiddenPost = ({ type = 'Publication' }) => {
  return (
    <Card className="!bg-gray-100 dark:!bg-gray-800">
      <div className="py-3 px-4 text-sm italic">
        {type} was hidden by the author
      </div>
    </Card>
  )
}

export default HiddenPost

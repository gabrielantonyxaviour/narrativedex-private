import React from 'react'

import { Card } from './Card'

export const EmptyState = ({ message, icon, hideCard = false }) => {
  return (
    <Card className={hideCard ? 'border-0 !shadow-none !bg-transparent' : ''}>
      <div className="grid justify-items-center p-5 space-y-2">
        <div>{icon}</div>
        <div>{message}</div>
      </div>
    </Card>
  )
}

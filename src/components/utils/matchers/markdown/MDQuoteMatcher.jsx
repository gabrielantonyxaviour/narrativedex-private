import { Matcher } from 'interweave'
import React from 'react'

export class MDQuoteMatcher extends Matcher {
  replaceWith(children) {
    return (
      <span className="py-1.5 pl-2 text-gray-700 border-l-4 dark:text-gray-400 dark:border-gray-700">
        {children}
      </span>
    )
  }

  asTag() {
    return 'span'
  }

  match(value) {
    return this.doMatch(value, /^\> (.*$)/, (matches) => ({
      match: matches[1]
    }))
  }
}

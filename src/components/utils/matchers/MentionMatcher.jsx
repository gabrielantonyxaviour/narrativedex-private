import Slug from '@components/Shared/Slug'
import { Matcher } from 'interweave'
import Link from 'next/link'
import React from 'react'

export function Mention({ ...props }) {
  return (
    <Link href={`/u/${props.display.slice(1)}`}>
      <a href={`/u/${props.display.slice(1)}`}>
        <Slug className="text-md" slug={props.display} />
      </a>
    </Link>
  )
}

export class MentionMatcher extends Matcher {
  replaceWith(match, props) {
    return React.createElement(Mention, props, match)
  }

  asTag() {
    return 'a'
  }

  match(value) {
    return this.doMatch(value, /@[a-zA-Z0-9_.]+/, (matches) => {
      return {
        display: matches[0]
      }
    })
  }
}

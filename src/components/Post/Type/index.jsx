import { useRouter } from 'next/router'
import React from 'react'

import Collected from './Collected'
import Commented from './Commented'
import CommentedPublication from './CommentedPublication'
import Mirrored from './Mirrored'

const PostType = ({ post, showType, showThread }) => {
  const { pathname } = useRouter()
  const type = post?.__typename
  const postType = post?.metadata?.attributes[0]?.value
  const isCollected = !!post?.collectedBy

  if (!showType) return null

  return (
    <>
      {type === 'Mirror' && <Mirrored post={post} />}
      {type === 'Comment' &&
        pathname === '/posts/[id]' &&
        postType !== 'community post' && (
          <CommentedPublication publication={post} />
        )}
      {type === 'Comment' &&
        !showThread &&
        !isCollected &&
        postType !== 'community post' && <Commented post={post} />}
      {isCollected && postType !== 'community' && postType !== 'crowdfund' && (
        <Collected post={post} type="Collected" />
      )}
      {isCollected && postType === 'crowdfund' && (
        <Collected post={post} type="Funded" />
      )}
    </>
  )
}

export default PostType

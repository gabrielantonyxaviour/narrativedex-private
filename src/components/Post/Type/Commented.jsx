import React from 'react'

import ThreadBody from '../ThreadBody'

const Commented = ({ post }) => {
  const commentOn = post?.commentOn
  const mainPost = commentOn?.mainPost
  const postType = mainPost?.metadata?.attributes[0]?.value

  return (
    <div>
      {mainPost && postType !== 'community' ? (
        <ThreadBody post={mainPost} />
      ) : null}
      <ThreadBody post={commentOn} />
    </div>
  )
}

export default Commented

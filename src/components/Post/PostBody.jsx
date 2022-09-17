import Attachments from '@components/Shared/Attachments'
import IFramely from '@components/Shared/IFramely'
import Markup from '@components/Shared/Markup'
import CrowdfundShimmer from '@components/Shared/Shimmer/CrowdfundShimmer'
import { UserAddIcon, UsersIcon } from '@heroicons/react/outline'
import getURLs from '@lib/getURLs'
import imagekitURL from '@lib/imagekitURL'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

// const Crowdfund = dynamic(() => import('./Crowdfund'), {
//   loading: () => <CrowdfundShimmer />
// })

const PostBody = ({ post }) => {
  const { pathname } = useRouter()
  const postType = post?.metadata?.attributes[0]?.value
  const [showMore, setShowMore] = useState(
    post?.metadata?.content?.length > 450
  )

  return (
    <div className="break-words">
      {postType === 'community' ? (
        <div className="block items-center space-y-2 space-x-0 sm:flex sm:space-y-0 sm:space-x-2 linkify"></div>
      ) : postType === 'crowdfund' ? (
        // <Crowdfund fund={post} />
        <div />
      ) : (
        <>
          <div
            className={clsx({
              'line-clamp-5 text-transparent bg-clip-text bg-gradient-to-b from-black dark:from-white to-gray-400 dark:to-gray-900':
                showMore && pathname !== '/posts/[id]'
            })}
          >
            <div className="whitespace-pre-wrap break-words leading-md linkify text-md">
              <Markup>{post?.metadata?.content}</Markup>
            </div>
          </div>
          {showMore && pathname !== '/posts/[id]' && (
            <button
              type="button"
              className="mt-2 text-sm font-bold"
              onClick={() => setShowMore(!showMore)}
            >
              Show more
            </button>
          )}
        </>
      )}
      {post?.metadata?.media?.length > 0 ? (
        <Attachments attachments={post?.metadata?.media} />
      ) : (
        post?.metadata?.content &&
        postType !== 'crowdfund' &&
        postType !== 'community' &&
        getURLs(post?.metadata?.content)?.length > 0 && (
          <IFramely url={getURLs(post?.metadata?.content)[0]} />
        )
      )}
    </div>
  )
}

export default PostBody

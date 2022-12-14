import {
  ChatAlt2Icon,
  PencilAltIcon,
  PhotographIcon,
  SwitchHorizontalIcon
} from '@heroicons/react/outline'
import nFormatter from '@lib/nFormatter'
import clsx from 'clsx'
import React from 'react'

const FeedType = ({ stats, setFeedType, feedType }) => {
  const FeedLink = ({ name, icon, type, count = 0, testId }) => (
    <button
      type="button"
      onClick={() => {
        setFeedType(type)
      }}
      className={clsx(
        {
          'text-brand bg-brand-100 dark:bg-opacity-20 bg-opacity-100 font-bold':
            feedType === type
        },
        'flex items-center space-x-2 rounded-lg px-4 sm:px-3 py-2 sm:py-1 text-brand hover:bg-brand-100 dark:hover:bg-opacity-20 hover:bg-opacity-100'
      )}
      aria-label={name}
      data-test={testId}
    >
      {icon}
      <div className="hidden sm:block">{name}</div>
      {count ? (
        <div className="px-2 text-xs font-medium rounded-full bg-brand-200 dark:bg-brand-800">
          {nFormatter(count)}
        </div>
      ) : null}
    </button>
  )

  return (
    <div className="flex overflow-x-auto gap-3 px-5 pb-2 mt-3 sm:px-0 sm:mt-0 md:pb-0">
      <FeedLink
        name="Posts"
        icon={<PencilAltIcon className="w-4 h-4" />}
        type="POST"
        count={stats?.totalPosts}
        testId="type-posts"
      />
      <FeedLink
        name="Comments"
        icon={<ChatAlt2Icon className="w-4 h-4" />}
        type="COMMENT"
        count={stats?.totalComments}
        testId="type-comments"
      />
      <FeedLink
        name="Mirrors"
        icon={<SwitchHorizontalIcon className="w-4 h-4" />}
        type="MIRROR"
        count={stats?.totalMirrors}
        testId="type-mirrors"
      />
      <FeedLink
        name="NFTs"
        icon={<PhotographIcon className="w-4 h-4" />}
        type="NFT"
        testId="type-nfts"
      />
    </div>
  )
}

export default FeedType

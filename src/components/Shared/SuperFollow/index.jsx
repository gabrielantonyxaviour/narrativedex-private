import { Button } from '@components/UI/Button'
import { Modal } from '@components/UI/Modal'
import { StarIcon } from '@heroicons/react/outline'
import dynamic from 'next/dynamic'
import { useState } from 'react'

import Loader from '../Loader'
import Slug from '../Slug'

const FollowModule = dynamic(() => import('./FollowModule'), {
  loading: () => <Loader message="Loading super follow" />
})

const SuperFollow = ({
  profile,
  setFollowing,
  followersCount,
  setFollowersCount,
  showText = false,
  again = false
}) => {
  const [showFollowModal, setShowFollowModal] = useState(false)

  return (
    <>
      <Button
        className="text-sm !px-3 !py-1.5"
        variant="super"
        outline
        onClick={() => setShowFollowModal(!showFollowModal)}
        aria-label="Super Follow"
        icon={<StarIcon className="w-4 h-4" />}
      >
        {showText && `Super follow`}
      </Button>
      <Modal
        title={
          <span>
            Super follow <Slug slug={profile?.handle} prefix="@" />{' '}
            {again ? 'again' : ''}
          </span>
        }
        icon={<StarIcon className="w-5 h-5 text-pink-500" />}
        show={showFollowModal}
        onClose={() => setShowFollowModal(false)}
      >
        <FollowModule
          profile={profile}
          setFollowing={setFollowing}
          setShowFollowModal={setShowFollowModal}
          followersCount={followersCount}
          setFollowersCount={setFollowersCount}
          again={again}
        />
      </Modal>
    </>
  )
}

export default SuperFollow
